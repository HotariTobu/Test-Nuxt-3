declare global {
    interface NuxtApp {
        $hello: (name: string) => string,
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            hello(name: string) {
                return `Hello ${name}!`
            }
        }
    }
})
