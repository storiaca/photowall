import {database} from '../database/config'

// update database
export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// loading posts from database
export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId) {
    return(dispatch) => {
        return database.ref('comment/' + postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}
// remove action

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

// adding post action

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
} 

// adding comments action

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment, 
        postId
    }
}

// load posts
export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}