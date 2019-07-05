import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

// prisma.query prisma.mutation prisma.subscription prisma.exists

const createPostForUser = async (authorId, data) => {
    const userExists = await prisma.exists.User({ id: authorId})

    if (!userExists) {
        throw new Error('User not found')
    }

    const post = await prisma.mutation.createPost({
        data: {
            ...data,
            author: {
                connect: {
                    id: authorId
                }
            }
        }
    }, '{ author { id name email posts { id title published }}}')
    // const user = await prisma.query.user({
    //     where: {
    //         id: authorId
    //     }
    // }, '{ id name email posts { id title published } }')
    return post.author
}

createPostForUser('cjx1y79i100rv0740hd76j0fc', {
    title: 'Great books to read',
    body: 'The War of Art',
    published: true
}).then((user) => {
    console.log(JSON.stringify(user, undefined, 2))
}).catch((error) => {
    console.log(error.message)
})

// prisma.mutation.createPost({
//     data: {
//         title: "My new Graphql post is live!",
//         body: "",
//         published: false,
//         author: {
//             connect: {
//                 id: "cjx1y79i100rv0740hd76j0fc"
//             }
//         }
//     }
// }, '{ id title body published }').then((data) => {
//     console.log(data)
//     return prisma.query.users(null, '{ id name posts { id title published } }')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })