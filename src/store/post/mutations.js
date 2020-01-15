function setPosts(state, posts) {
  state.posts = posts || [];
}

function removePost(state, id) {
  state.posts = state.posts.filter(p => p.id !== id)
}

export {
  setPosts,
  removePost
};
