import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    robotsTxt(), 
    react(),
    tailwind({ applyBaseStyles: true })
  ],
  site: 'https://psuarez.pages.dev'
});