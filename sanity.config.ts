import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'airwave_studio',
  title: 'Airwave Content Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
});
