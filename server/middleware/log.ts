export default defineEventHandler(e => {
    console.log('New request:', e.node.req.url)
})
