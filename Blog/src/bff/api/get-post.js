import { transformPost } from "../transformers";

export const getPost = async (idToFind) =>
	fetch(`http://localhost:3001/posts/?id=${idToFind}`)
		.then((postData) => postData.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
