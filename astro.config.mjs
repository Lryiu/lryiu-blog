// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deploy sonrası Vercel'in verdiği adresi buraya yaz (ör. 'https://lryiu-gunluk.vercel.app').
  // Bu alan sadece SEO/canonical link üretimi için, build'i etkilemez.
  site: 'https://lryiu-gunluk.vercel.app',
});
