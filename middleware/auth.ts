export default defineNuxtRouteMiddleware((to, from) => {
    if (from.path === '/middleware') {
        // Redirect to root
        // return navigateTo('/')

        // 404
        return abortNavigation()
    }
})
