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