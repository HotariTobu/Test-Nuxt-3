export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('vue:error', (err, target, info) => {
        console.log({ err, target, info })
    })
})
