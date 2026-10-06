import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache on edge for 1 hour

export async function GET() {
  try {
    // Free, reliable open exchange API (no API key required)
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.rates?.INR) {
        return NextResponse.json({
          rate: Number(data.rates.INR.toFixed(2)),
          updated: data.time_last_update_utc || new Date().toISOString(),
          success: true,
        });
      }
    }
  } catch (error) {
    console.warn('Currency API primary failed, trying fallback:', error);
  }

  // Backup open source endpoint: Frankfurter ECB API
  try {
    const backupRes = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR', {
      next: { revalidate: 3600 },
    });
    if (backupRes.ok) {
      const backupData = await backupRes.json();
      if (backupData?.rates?.INR) {
        return NextResponse.json({
          rate: Number(backupData.rates.INR.toFixed(2)),
          updated: backupData.date || new Date().toISOString(),
          success: true,
        });
      }
    }
  } catch (err) {
    console.warn('Backup currency API failed:', err);
  }

  // Graceful fallback if both APIs are temporarily unreachable
  return NextResponse.json({
    rate: 96.35,
    updated: new Date().toISOString(),
    success: false,
    fallback: true,
  });
}
