function setPosts({ commit }, posts) {
  commit("setPosts", posts);
}

function removePost({ commit }, id) {
  commit("removePost", id);
}

function addPost({ commit }, post) {
  commit("addPost", post);
}

export { setPosts, removePost, addPost };
