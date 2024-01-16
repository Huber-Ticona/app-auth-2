import adapter from "@sveltejs/adapter-static";
console.log("CREANDO APP");
console.log("env basepath: ", process.env.BASE_PATH);
export default {
    kit: {
        adapter: adapter({
            fallback: "index.html",
        }),
        paths: {
            base: "/app-auth-2",
        },
    },
};
