import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: { esbuildOptions: { target: 'esnext' } },
    build: { target: 'esnext' },
};

export default config;
