import dynamic from 'next/dynamic';

export const ColorModeSelector = dynamic(() => import('./ColorModeSelector'), {
  ssr: false,
});
