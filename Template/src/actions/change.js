export const CHANGE_POST = "CHANGE_POST";

function changePost(string) {
    return {
        type: CHANGE_POST, payload: string
    };
}

export default changePost;