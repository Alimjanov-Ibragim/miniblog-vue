function setPosts(state, posts) {
  state.posts = posts || [];
}

function removePost(state, id) {
  state.posts = state.posts.filter(p => p.id !== id);
}

function addPost(state, post) {
  state.posts.push(post);
}

export { setPosts, removePost, addPost };
