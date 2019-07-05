const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    comments(parent, args, { db }, info) {
        if (!args.query) {
            return db.comments
        }

        return db.comments.filter((comment) => {
            const isTitleMatch = comment.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = comment.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    me() {
        return {
            id: '123908',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: 'Hello body',
            published: false
        }
    }

}

export { Query as default }