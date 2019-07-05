// Demo user data
const users = [{
    id: '1',
    name: 'Tony',
    email: 'tony.george77@hotmail.co.uk',
    age: 51
}, {
    id: '2',
    name: 'Elaine',
    email: 'elaine.esprit@hotmail.co.uk',
    age: 39
}, {
    id: '3',
    name: 'Paui',
    email: 'paui.howard@hotmail.co.uk',
    age: 35
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advance post of GraphQL...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: 'This is a post body',
    published: false,
    author: '2'
}, {
    id: '13',
    title: 'Artistic Music',
    body: 'This is a post body',
    published: false,
    author: '2'
}]

const comments = [{
    id: '101',
    text: 'I am currently trying GraphQL with NodeJS and I do not know, why this error occurs with the following query',
    author: '1',
    post:'10'
}, {
    id: '111',
    text: 'I am not sure if the type of my resolve Library is right, because at any example I had a look at they used new GraphQL.GraphQLList(), but in my case I really want to return a single user object, not an array of users.',
    author: '1',
    post:'11'
}, {
    id: '121',
    text: 'I ran into this problem as well but it seems quite obvious why this happens. It appears that what you are returning from your resolver does not match the return type in your schema.',
    author: '2',
    post:'12'
}, {
    id: '131',
    text: 'I had the same problem. I was using find instead of filter.',
    author: '3',
    post:'10'
}]

const db = {
    users,
    posts,
    comments
}

export default { db }