// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tableorie.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect',
    },
  },
});
