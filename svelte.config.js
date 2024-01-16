import adapter from "@sveltejs/adapter-static";
console.log("CREANDO APP");
console.log("env basepath: ", process.env.BASE_PATH);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: "index.html",
        }),
        paths: {
            base: "/app-auth-2",
        },
    },
};

export default config;
