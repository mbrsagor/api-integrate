"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API_BASE_URL = 'http://localhost:8000';

var LoginService =
/*#__PURE__*/
function () {
  function LoginService() {
    _classCallCheck(this, LoginService);
  }

  _createClass(LoginService, [{
    key: "login",
    // Login
    value: function login(username, password) {
      return _axios.default.post("".concat(API_BASE_URL, "/api/rest-auth/login/"), {
        username: username,
        password: password
      }).then(function (response) {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
    } // Logout

  }, {
    key: "logout",
    value: function logout() {
      return _axios.default.post("".concat(API_BASE_URL, "/api/rest-auth/logout/"), {}).then(function (response) {
        if (response.data.accessToken) {
          localStorage.removeItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
    } // Current user

  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }]);

  return LoginService;
}();

exports.default = LoginService;