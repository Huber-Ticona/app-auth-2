import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const usuario = writable({
    id: 0,
    name: "",
    authenticated: false,
});

export const userStore = {
    subscribe: usuario.subscribe,
    set: (n) => {
        usuario.set(n);
        localStorage.setItem("datos_usuario", JSON.stringify(n));
    },
};

function createCounter(count) {
    const { subscribe, set, update } = writable(count);

    function increment() {
        update((count) => count + 1);
    }

    function decrement() {
        update((count) => count - 1);
    }

    function reset() {
        set(0);
    }

    return { subscribe, increment, decrement, reset };
}

export const counter = createCounter(0);
$: console.log("(lib user) Counter: ", counter);
