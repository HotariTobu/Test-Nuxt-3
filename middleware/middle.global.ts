// Apply globally automatically
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(from, '->', to)
})
