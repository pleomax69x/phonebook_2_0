const getIsLoggedIn = (state) => state.auth.isLogged;

const getUsername = (state) => state.auth.user.name;

const getIsLoading = (state) => state.auth.loading;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsLoading,
};

export default authSelectors;
