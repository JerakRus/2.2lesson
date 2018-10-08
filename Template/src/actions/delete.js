export const DElETE_POST = "DELETE_POST";

// Generators action

function deletePost(string) {
    return {
        type: DElETE_POST, payload: string
    };
}

export default deletePost;