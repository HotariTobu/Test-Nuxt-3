import { Prisma, PrismaClient } from "@prisma/client"

export default defineEventHandler(async e => {
    console.log(e)

    const method = e.node.req.method
    const prisma = new PrismaClient()

    if (method === 'GET') {
        const tasks = prisma.task.findMany()

        return tasks
    }

    if (method === 'POST') {
        const body = await readBody(e)

        const task = prisma.task.create({
            data: {
                task: body.task,
                completed: false,
            },
        })

        return task
    }
})
