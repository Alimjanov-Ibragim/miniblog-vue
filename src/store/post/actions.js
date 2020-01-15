function setPosts({ commit }, posts) {
  commit("setPosts", posts);
}

function removePost({ commit }, id) {
  commit("removePost", id);
}

export {
  setPosts,
  removePost
};
