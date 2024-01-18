//SSG and SPA

import adapter from "@sveltejs/adapter-static";
import dotenv from "dotenv";

dotenv.config();
console.log("env basepath: ", process.env.BASE_PATH);

/**  @type {import('@sveltejs/kit').Config}  */
const config = {
    kit: {
        // ADAPTER SSG
        /*  adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: "build",
            assets: "build/assets",
            fallback: undefined,
            precompress: false,
            strict: true,
        }), */
        // ADAPTER SPA
        adapter: adapter({
            fallback: "index.html", // may differ from host to host
        }),

        paths: {
            base: process.env.BASE_PATH,
        },
    },
};

// NORMAL BUILD
/* import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} 
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
    },
};
*/
export default config;
