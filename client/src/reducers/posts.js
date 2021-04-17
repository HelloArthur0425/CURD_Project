export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.playload;
        case 'CREATE':
            return [...posts, action.playload];
        default: 
            return posts;
    }
}