const { spawn, execSync } = require('child_process');
const os = require('os');

function getLanIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const lanIp = getLanIp();

// Ensure port 3000 is clean on Windows before launch
try {
  const findPortCmd = 'netstat -ano | findstr :3000 | findstr LISTENING';
  const out = execSync(findPortCmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  const lines = out.trim().split('\n');
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (pid && pid !== String(process.pid)) {
      try {
        process.kill(Number(pid), 'SIGKILL');
      } catch (_) {}
    }
  }
} catch (_) {}

const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const child = spawn(cmd, ['next', 'dev', '-H', '0.0.0.0', '-p', '3000', ...process.argv.slice(2)], {
  stdio: ['inherit', 'pipe', 'inherit'],
  shell: true,
  env: process.env,
});

child.stdout.on('data', (chunk) => {
  const text = chunk.toString();
  // Replace 0.0.0.0 with actual network IP in the terminal output
  const modified = text.replace(/http:\/\/0\.0\.0\.0:(\d+)/g, `http://${lanIp}:$1`);
  process.stdout.write(modified);
});

child.on('exit', (code) => {
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  child.kill('SIGTERM');
  process.exit(0);
});
