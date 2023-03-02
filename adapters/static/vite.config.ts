import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig, qwikCity } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    // base: "/mywedding-card-pages/",
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    resolve: {
      alias: {}
    },
    plugins: [
      qwikCity({basePathname: "/mywedding-card-pages/"}),
      staticAdapter({
        origin: 'https://seenark.github.io',
      }),
    ],
  };
});
