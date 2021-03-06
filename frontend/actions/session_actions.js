var SessionAPIUtils = require("../utils/session_api_utils");
var UserAPIUtils = require("../utils/user_api_utils");
var AppDispatcher = require("../dispatcher/dispatcher");
var ActionTypes = require("../constants/app_constants").ActionTypes;

var SessionActions = {

  // Sign up modal actions
  showSignUpModal: function () {
    AppDispatcher.dispatch({
      actionType: ActionTypes.SHOW_SIGN_UP_MODAL
    });
  },

  closeSignUpModal: function () {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CLOSE_SIGN_UP_MODAL
    });
  },

  // Login modal actions
  showLoginModal: function () {
    AppDispatcher.dispatch({
      actionType: ActionTypes.SHOW_LOGIN_MODAL
    });
  },

  closeLoginModal: function () {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CLOSE_LOGIN_MODAL
    });
  },

  // Request actions
  login: function (userData) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGIN_INITIATED
    });

    SessionAPIUtils.login(userData, SessionActions.receiveLogin);
  },

  logout: function () {
    SessionAPIUtils.logout(SessionActions.receiveLogout);
  },

  fetchClient: function (username) {
    UserAPIUtils.fetchUser(username, SessionActions.receiveClient);
  },

  // Response actions
  receiveLogin: function (response) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGIN_RESPONSE,
      response: response
    });
  },

  receiveLogout: function (response) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.LOGOUT_RESPONSE,
      response: response
    });
  },

  receiveClient: function (response) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CLIENT_RECEIVED,
      response: response
    });
  }
};

module.exports = SessionActions;
