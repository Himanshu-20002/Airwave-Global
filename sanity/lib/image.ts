import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | any) => {
  if (!source) return null;
  if (typeof source === 'object' && !source.asset && !source._ref) {
    return null;
  }
  try {
    return imageBuilder?.image(source).auto('format').fit('max');
  } catch {
    return null;
  }
};
