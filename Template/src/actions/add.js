
export const ADD_POST = "ADD_POST";

function addPost(array) {
    return {
        type: ADD_POST, payload: array
    };
}

export default addPost;

