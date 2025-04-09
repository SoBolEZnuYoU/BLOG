import { transformPost } from '../transformers';

export const getPost = (idToFind) =>
	fetch(`http://localhost:3001/posts/?id=${idToFind}`)
		.then((postData) => postData.json())
		.then((loadedPost) => loadedPost && transformPost(...loadedPost));
