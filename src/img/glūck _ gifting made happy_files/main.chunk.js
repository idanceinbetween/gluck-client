(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.MuiListItem-root .gifts {\n  background-color: red;\n}\n\n#landing-container {\n  background: url('https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80')\n    no-repeat center center fixed;\n  background-size: cover;\n}\n\n#navBar {\n  background-color: #296567;\n}\n#yellowbox {\n  border: 1px solid yellow;\n}\n#pinkbox {\n  border: 1px solid pink;\n}\n#redbox {\n  border: 1px solid red;\n}\n#bluebox {\n  border: 1px solid blue;\n}\n#orangebox {\n  border: 1px solid orange;\n  margin: 0 auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: 'Roboto', apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class API {
  static signUp(cred) {
    return fetch(this.signUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cred)
    }).then(resp => resp.json());
  }

  static signIn(user) {
    return fetch(this.signInUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static validate() {
    const token = localStorage.getItem('token');
    return fetch(this.validateUrl, {
      headers: {
        Authorization: token
      }
    }).then(resp => resp.json());
  }

  static fetchUsers() {
    return fetch(this.usersUrl).then(resp => resp.json());
  }

  static fetchGifts() {
    return fetch(this.giftsUrl).then(resp => resp.json());
  }

  static fetchOtherUser(id) {
    return fetch(this.usersUrl + "/".concat(id)).then(resp => resp.json());
  }

  static addGift(giftObj) {
    return fetch(this.giftsUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(giftObj)
    }).then(resp => resp.json());
  }

  static editGift(giftObj) {
    return fetch(this.giftsUrl + "/".concat(giftObj.id), {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(giftObj)
    }).then(resp => resp.json());
  }

  static fetchSingleGift(id) {
    return fetch(this.giftsUrl + "/".concat(id)).then(resp => resp.json());
  }

  static updateExchangeStat(exchange) {
    return fetch(this.exchangesUrl + "/".concat(exchange.id), {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(exchange)
    }).then(resp => resp.json());
  }

}

API.baseUrl = 'http://localhost:3000';
API.usersUrl = API.baseUrl + '/users';
API.giftsUrl = API.baseUrl + '/gifts';
API.exchangesUrl = API.baseUrl + '/exchanges';
API.signUpUrl = API.baseUrl + '/signup';
API.signInUrl = API.baseUrl + '/signin';
API.validateUrl = API.baseUrl + '/validate';
/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_nav_topNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/topNav */ "./src/components/nav/topNav.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about */ "./src/components/about.js");
/* harmony import */ var _components_landing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing */ "./src/components/landing.js");
/* harmony import */ var _containers_mainCanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/mainCanvas */ "./src/containers/mainCanvas.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/App.js";










const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])();
const styles = {
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) // typography: {
    //   fontFamily: [
    //     '-apple-system',
    //     'BlinkMacSystemFont',
    //     '"Segoe UI"',
    //     'Roboto',
    //     '"Helvetica Neue"',
    //     'Arial',
    //     'sans-serif',
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     '"Segoe UI Symbol"',
    //   ].join(','),
    // },

  }
};

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      users: [],
      user: {},
      gifts: [],
      today: new Date(),
      formToShow: '',
      startEmail: '',
      errorMessage: '',
      mobileOpen: false,
      pageTitle: 'Home'
    };

    this.checkEmail = email => {
      // eslint-disable-next-line
      const regexResult = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(email);

      if (email && regexResult) {
        const foundUser = this.state.users.find(user => user.email === email);

        if (foundUser) {
          this.setState({
            formToShow: 'login',
            startEmail: foundUser.email
          });
        } else {
          this.setState({
            formToShow: 'signup',
            startEmail: email
          });
        }
      } else {
        this.setState({
          errorMessage: 'Email is invalid, please try again.'
        });
      }
    };

    this.handleSignIn = credentials => {
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].signIn(credentials).then(data => {
        if (data.error) {
          alert("please try again: ".concat(data.error));
        } else {
          localStorage.setItem('token', data.token);
          this.signIn(data.user, localStorage.getItem('token'));
        }
      });
    };

    this.handleSignUp = credentials => {
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].signUp(credentials).then(data => {
        if (data.error) {
          alert("Didn't work somehow: ".concat(data.error, " "));
        } else {
          _API__WEBPACK_IMPORTED_MODULE_3__["default"].fetchUsers().then(users => {
            this.setState({
              users
            }, () => this.signIn(data.user, localStorage.getItem('token')));
          });
        }
      });
    };

    this.signIn = (user, token) => {
      const foundUser = this.state.users.find(u => u.id === user.id);

      if (foundUser) {
        this.setState({
          user: foundUser
        }, () => {
          if (this.props.history.location.pathname === '/signin') {
            this.props.history.push('/dashboard');
          }
        });
      } else {
        alert('Sorry something went wrong.');
        this.signOut();
      }
    };

    this.signOut = () => {
      this.setState({
        user: '',
        formToShow: '',
        startEmail: '',
        errorMessage: '',
        pageTitle: 'Home'
      });
      localStorage.removeItem('token');
      this.props.history.push('/signin');
    };

    this.handleDrawerToggle = () => {
      this.setState({
        mobileOpen: !this.state.mobileOpen
      });
    };

    this.setPageTitle = pathname => {
      switch (pathname) {
        case '/':
          return this.setState({
            pageTitle: 'Home'
          });

        case '/about':
          return this.setState({
            pageTitle: 'About'
          });

        default:
          return this.setState({
            pageTitle: 'glūck'
          });
      }
    };
  }

  componentDidMount() {
    _API__WEBPACK_IMPORTED_MODULE_3__["default"].fetchUsers().then(users => {
      this.setState({
        users
      }, () => _API__WEBPACK_IMPORTED_MODULE_3__["default"].validate().then(data => {
        if (!data.error) {
          this.signIn(data.user, localStorage.getItem('token'));
        }
      }));
    });
    _API__WEBPACK_IMPORTED_MODULE_3__["default"].fetchGifts().then(gifts => {
      this.setState({
        gifts
      });
    });
  }

  render() {
    const _this$state = this.state,
          users = _this$state.users,
          user = _this$state.user,
          gifts = _this$state.gifts,
          today = _this$state.today,
          formToShow = _this$state.formToShow,
          startEmail = _this$state.startEmail,
          errorMessage = _this$state.errorMessage,
          mobileOpen = _this$state.mobileOpen,
          pageTitle = _this$state.pageTitle;
    const handleDrawerToggle = this.handleDrawerToggle,
          signOut = this.signOut,
          checkEmail = this.checkEmail,
          handleSignIn = this.handleSignIn,
          handleSignUp = this.handleSignUp,
          setPageTitle = this.setPageTitle;
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav_topNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      theme: theme,
      pageTitle: pageTitle,
      user: user,
      signOut: signOut,
      mobileOpen: mobileOpen,
      handleDrawerToggle: () => handleDrawerToggle(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }), this.props.location.pathname === '/' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.toolbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_landing__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setPageTitle: path => setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }))), this.props.location.pathname === '/about' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setPageTitle: path => setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }), this.props.location.pathname !== '/' && this.props.location.pathname !== '/about' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.toolbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_mainCanvas__WEBPACK_IMPORTED_MODULE_9__["default"], {
      users: users,
      user: user,
      gifts: gifts,
      today: today,
      formToShow: formToShow,
      errorMessage: errorMessage,
      startEmail: startEmail,
      pageTitle: pageTitle,
      checkEmail: email => checkEmail(email),
      signIn: credentials => handleSignIn(credentials),
      signUp: credentials => handleSignUp(credentials) // setPageTitle={path => setPageTitle(path)}
      ,
      setPageTitle: path => console.log(path),
      mobileOpen: mobileOpen,
      handleDrawerToggle: () => handleDrawerToggle(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  WithTheme: true
})(App)));

/***/ }),

/***/ "./src/Date.js":
/*!*********************!*\
  !*** ./src/Date.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DATE {
  static convert(string) {
    const date = new Date(string);
    return date.toDateString();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DATE);

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ "./src/components/logo.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/about.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const About = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => props.setPageTitle(props.location.pathname));
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "lg",
    style: {
      backgroundColor: '#fff',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "div",
    style: {
      backgroundColor: '#fff',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "gl\u016Bck"), " manages the gifting of your unwanted items; ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "easily"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "happily"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "We know that listing your unwanted item is only the first step, so we built gl\u016Bck to takes out the hassle of what follows."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, " With gl\u016Bck, you could:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Easily decide who you want to gift the item to, should you get multiple requesters."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "View your exchange schedule, so you know where and when the exchange takes place, who you are meeting and what you are gifting."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Communicate with requesters efficiently."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Because gifting should make you happy, too.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(About));

/***/ }),

/***/ "./src/components/aboutSubmenu.js":
/*!****************************************!*\
  !*** ./src/components/aboutSubmenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/aboutSubmenu.js";




const AboutSubmenu = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "About Submenu"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSubmenu);

/***/ }),

/***/ "./src/components/action/actionSubmenu.js":
/*!************************************************!*\
  !*** ./src/components/action/actionSubmenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/actionSubmenu.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

const ActionSubmenu = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.tabValue === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Filter:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "View All",
    onClick: () => props.handleGiftsFilter('all'),
    className: classes.chip,
    color: props.giftsFilter === 'all' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "With requests",
    onClick: () => props.handleGiftsFilter('requested'),
    className: classes.chip,
    color: props.giftsFilter === 'requested' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "Without requests",
    onClick: () => props.handleGiftsFilter('lonely'),
    className: classes.chip,
    color: props.giftsFilter === 'lonely' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), props.tabValue === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Sort by:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "Hoarder",
    onClick: () => props.handleSortRequester('hoarder'),
    className: classes.chip,
    color: props.sortRequester === 'hoarder' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "Conscious Taker",
    onClick: () => props.handleSortRequester('conscious'),
    className: classes.chip,
    color: props.sortRequester === 'conscious' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "Name (asc)",
    onClick: () => props.handleSortRequester('asc'),
    className: classes.chip,
    color: props.sortRequester === 'asc' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "Name (dsc)",
    onClick: () => props.handleSortRequester('dsc'),
    className: classes.chip,
    color: props.sortRequester === 'dsc' ? 'secondary' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionSubmenu);

/***/ }),

/***/ "./src/components/action/actionUserPaper.js":
/*!**************************************************!*\
  !*** ./src/components/action/actionUserPaper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/actionUserPaper.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 345
  }
}));

const findGiftingGifterStat = (props, giftingId) => {
  if (props.gifter.giftings.length > 0) {
    const foundGifting = props.gifter.giftings.find(g => g.id === giftingId);

    switch (foundGifting.exchange_stat_id) {
      case 1:
        return 'Requested';

      case 2:
        return 'Committed';

      case 3:
        return 'On hold';

      case 4:
        return 'Completed';

      case 5:
        return 'Cancelled';

      default:
        return null;
    }
  }
};

const ActionUserPaper = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, props.recipient.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    component: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Gifts requested:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, Object.keys(props.giftPairsRequested).length > 0 ? //make sure does not throw error during async loading
  props.giftPairsRequested.map(pair => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: pair.gifting_id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, props.selectedGiftsIds.includes(pair.gift.id) && !props.selectedGiftingsIds.includes(pair.gifting_id) ? //if gift is selected AND not the gifting the gift is part of, i.e. gift is selected elsewhere, disable checkbox
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: pair.gifting_id,
      dense: true,
      button: true,
      className: "gifts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      edge: "start",
      disabled: true,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': pair.gifting_id
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      id: pair.gifting_id,
      primary: "".concat(pair.gift.title, " (status: On hold)"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: pair.gifting_id,
      dense: true,
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      edge: "start",
      disableRipple: true,
      inputProps: {
        'aria-labelledby': pair.gifting_id
      },
      onChange: () => props.draftGifting(pair),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      id: pair.gifting_id,
      primary: "".concat(pair.gift.title, " (status: ") + findGiftingGifterStat(props, pair.gifting_id) + ')',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }))));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionUserPaper);

/***/ }),

/***/ "./src/components/action/giftCard.js":
/*!*******************************************!*\
  !*** ./src/components/action/giftCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/giftCard.js";


const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    maxWidth: 400
  },
  media: {
    height: 140
  }
});

const calculateRequestsOfThisGift = (user, gift) => user.giftings.filter(g => g.gift_id === gift.id).length;

const GiftCard = ({
  changeTab,
  user,
  gift
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    title: gift.title,
    image: gift.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, gift.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, calculateRequestsOfThisGift(user, gift) === 1 && "Requested by ".concat(calculateRequestsOfThisGift(user, gift), " member"), calculateRequestsOfThisGift(user, gift) > 1 && "Requested by ".concat(calculateRequestsOfThisGift(user, gift), " members"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), "Listing Expiry: ", "".concat(new Date(gift.expiry).toDateString())))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Edit/Delete"), calculateRequestsOfThisGift(user, gift) > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    onClick: () => changeTab(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Manage Gifting"))));
};

/* harmony default export */ __webpack_exports__["default"] = (GiftCard);

/***/ }),

/***/ "./src/components/action/giftingsView.js":
/*!***********************************************!*\
  !*** ./src/components/action/giftingsView.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _giftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCard */ "./src/components/action/giftCard.js");
/* harmony import */ var _actionUserPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionUserPaper */ "./src/components/action/actionUserPaper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/giftingsView.js";





const mapUniqueRecipientsIds = props => {
  if (props) {
    let results = props.user.giftings.map(gifting => gifting.recipient_id);
    let recipients_ids = [...new Set(results)];
    return recipients_ids;
  } else return null;
};

const mapUniqueRecipientsNames = props => {
  if (props) {
    let ids = mapUniqueRecipientsIds(props);
    let uniqueRecipientsNames = [];
    ids.map(id => uniqueRecipientsNames.push(props.users.find(user => user.id === id).username));
    return uniqueRecipientsNames;
  }
};

const sortByName = (props, str) => {
  let names = mapUniqueRecipientsNames(props);
  let unsortedNames = [...new Set(names)];

  if (names) {
    names.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() === b.toLowerCase()) return 0;
    });

    if (str === 'asc') {
      return names;
    } else if (str === 'dsc') {
      return names.reverse();
    } else {
      return unsortedNames;
    }
  }
};

const findUserIdWithThisName = (props, name) => props.users.find(user => user.username.toLowerCase() === name.toLowerCase()).id;

const sortNameFunction = props => {
  let sortedNamesOnly = sortByName(props, props.sortRequester);

  if (sortedNamesOnly) {
    let sortedRecipientsIds = sortedNamesOnly.map(name => findUserIdWithThisName(props, name));
    return sortedRecipientsIds;
  }
};

const redirectSort = props => {
  switch (props.sortRequester) {
    case 'asc':
      return sortNameFunction(props);

    case 'dsc':
      return sortNameFunction(props);

    case 'hoarder':
      return sortQuantityFunction(props);

    case 'conscious':
      return sortQuantityFunction(props);
  }
};

const sortQuantityFunction = props => {
  let ids = mapUniqueRecipientsIds(props);
  let idQuantityPairs = ids.map(id => findIdAndQuantityPairs(props, id)).flat(); // let idsWithGiftPairs = recipientQuantityPairs
  // let sortedIdsWithGiftsPairs = sortIdsWithGiftsPairs(recipientQuantityPairs)

  let sortedIdQuantityPairs = sortIdQuantityPairs(idQuantityPairs);
  let resultIds = sortedIdQuantityPairs.map(pair => pair.recipient_id);

  switch (props.sortRequester) {
    case 'conscious':
      return resultIds;

    case 'hoarder':
      return resultIds.reverse();
  }
};

const sortIdQuantityPairs = idQuantityPairs => {
  idQuantityPairs.sort((a, b) => {
    if (a.quantity > b.quantity) return 1;
    if (a.quantity < b.quantity) return -1;
    if (a.quantity < b.quantity) return 0;
  });
  return idQuantityPairs;
};

const findIdAndQuantityPairs = (props, id) => {
  let giftPairsRequested = findGiftPairsRequested(props.user, id); //this returns an array [{gift, gifting_id} {gift, gift.id)}]

  let recipient = props.users.find(user => user.id === id);
  let idQuantityPairs = [];
  let singleRecipientQtyPair = {
    recipient_id: id,
    quantity: giftPairsRequested.length
  };
  idQuantityPairs.push(singleRecipientQtyPair);
  return idQuantityPairs;
};

const renderResults = props => {
  if (Object.keys(props.user).length > 0) {
    let sortedRecipientsIds = redirectSort(props);
    return sortedRecipientsIds.map(id => {
      let giftPairsRequested = findGiftPairsRequested(props.user, id); //this returns an array [{gift, gifting_id} {gift, gift.id)}]

      let recipient = props.users.find(user => user.id === id);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionUserPaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: id,
        gifter: props.user,
        recipient: recipient,
        giftPairsRequested: giftPairsRequested //an array of [{gift, gifting_id} {gift, gift.id)}]
        ,
        selectedGiftsIds: props.selectedGiftsIds,
        selectedGiftingsIds: props.selectedGiftingsIds,
        draftGifting: pair => props.draftGifting(pair),
        commitGifting: id => props.commitGifting(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: undefined
      }));
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    });
  }
};

const findGiftPairsRequested = (user, id) => {
  let findGiftings = user.giftings.filter(g => g.recipient_id === id);
  let giftPairs = [];
  findGiftings.forEach(gifting => {
    const pair = {};
    pair['gifting_id'] = gifting.id;
    pair['gift'] = user.gifts.find(g => g.id === gifting.gift_id);
    giftPairs.push(pair);
  });
  return giftPairs;
};

const GiftingsView = props => {
  if (props.user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }, renderResults(props)));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GiftingsView));

/***/ }),

/***/ "./src/components/action/giftsView.js":
/*!********************************************!*\
  !*** ./src/components/action/giftsView.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _giftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCard */ "./src/components/action/giftCard.js");
/* harmony import */ var _actionUserPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionUserPaper */ "./src/components/action/actionUserPaper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/giftsView.js";





const mapGiftsAccordingly = props => {
  if (Object.keys(props.user).length > 0) {
    const myGiftings = props.user.giftings;
    const giftsIdsInMyGiftings = myGiftings.map(giftings => giftings.gift_id);
    const myGifts = props.user.gifts;
    const giftsToMap = filterGifts(myGifts, giftsIdsInMyGiftings, props.giftsFilter);
    return giftsToMap.map(gift => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        key: gift.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giftCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: gift.id,
        gift: gift,
        user: props.user,
        changeTab: value => props.changeTab(value),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }));
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    });
  }
};

const filterGifts = (myGifts, giftsIdsInMyGiftings, giftsFilter) => {
  switch (giftsFilter) {
    case 'requested':
      return myGifts.filter(gift => giftsIdsInMyGiftings.includes(gift.id));

    case 'lonely':
      return myGifts.filter(gift => !giftsIdsInMyGiftings.includes(gift.id));

    case 'all':
      return myGifts;
  }
};

const GiftsView = props => {
  if (props.user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, mapGiftsAccordingly(props)));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GiftsView));

/***/ }),

/***/ "./src/components/action/requestsView.js":
/*!***********************************************!*\
  !*** ./src/components/action/requestsView.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _giftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCard */ "./src/components/action/giftCard.js");
/* harmony import */ var _actionUserPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionUserPaper */ "./src/components/action/actionUserPaper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/requestsView.js";





const mapGiftsAccordingly = (props, str) => {
  if (Object.keys(props.user).length > 0) {
    const myGiftings = props.user.giftings;
    const giftsIdsInMyGiftings = myGiftings.map(giftings => giftings.gift_id);
    const myGifts = props.user.gifts;

    if (str === 'requested') {
      const requestedGifts = myGifts.filter(gift => giftsIdsInMyGiftings.includes(gift.id));
      return requestedGifts.map(gift => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: undefined
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giftCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: gift.id,
          gift: gift,
          user: props.user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        }));
      });
    }

    if (str === 'lonely') {
      const lonelyGifts = myGifts.filter(gift => !giftsIdsInMyGiftings.includes(gift.id));
      return lonelyGifts.map(gift => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_giftCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: gift.id,
          gift: gift,
          user: props.user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: undefined
        }));
      });
    }
  }
};

const mapRequesters = props => {
  if (Object.keys(props.user).length > 0) {
    let results = props.user.giftings.map(gifting => gifting.recipient_id);
    let recipients_ids = [...new Set(results)];
    return recipients_ids.map(id => {
      let giftPairsRequested = findGiftPairsRequested(props.user, id); //this returns an array [{gift, gifting_id} {gift, gift.id)}]

      let recipient = props.users.find(user => user.id === id);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionUserPaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: id,
        gifter: props.user,
        recipient: recipient,
        giftPairsRequested: giftPairsRequested //an array of [{gift, gifting_id} {gift, gift.id)}]
        ,
        selectedGiftsIds: props.selectedGiftsIds,
        selectedGiftingsIds: props.selectedGiftingsIds,
        draftGifting: pair => props.draftGifting(pair),
        commitGifting: id => props.commitGifting(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      });
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    });
  }
};

const findGiftPairsRequested = (user, id) => {
  let findGiftings = user.giftings.filter(g => g.recipient_id === id);
  let giftPairs = [];
  findGiftings.forEach(gifting => {
    const pair = {};
    pair['gifting_id'] = gifting.id;
    pair['gift'] = user.gifts.find(g => g.id === gifting.gift_id);
    giftPairs.push(pair);
  });
  return giftPairs;
};

const RequestsView = props => {
  if (props.user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, "MY REQUESTS")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(RequestsView));

/***/ }),

/***/ "./src/components/action/schedule.js":
/*!*******************************************!*\
  !*** ./src/components/action/schedule.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Date */ "./src/Date.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/action/schedule.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(1),
    maxWidth: 300
  },
  button: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 0, 0, 0)
  }
}));

const findGiftObjectByGifting = (props, gifting) => {
  if (props.users) {
    const gifter = props.users.find(user => user.id === gifting.gifter_id);

    if (gifter) {
      return gifter.gifts.find(gift => gift.id === gifting.gift_id);
    }
  }
};

const renderGiftsNamesForThisRecipient = props => props.giftingsOfThisRecipient.map(gifting => {
  const giftObject = findGiftObjectByGifting(props, gifting);

  if (giftObject) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: giftObject.id,
      dense: true,
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      edge: "start",
      disabled: true,
      checked: true,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': giftObject.id
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      id: giftObject.id,
      primary: "".concat(giftObject.title, " (status: Committed)"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    });
  }
});

const Schedule = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, props.recipient && props.giftingsOfThisRecipient.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h6",
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, _Date__WEBPACK_IMPORTED_MODULE_3__["default"].convert(props.giftingsOfThisRecipient[0].date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, props.recipient.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "p",
    component: "p",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Receiving:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, renderGiftsNamesForThisRecipient(props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "p",
    variant: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Contact: ", props.recipient.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "secondary",
    className: classes.button,
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Collected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "default",
    className: classes.button,
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Manage"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./src/components/addGift.js":
/*!***********************************!*\
  !*** ./src/components/addGift.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API */ "./src/API.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/dist/material-ui-pickers.esm.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/addGift.js";










class AddListing extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      title: '',
      description: '',
      image: '',
      gifter_id: this.props.user.id,
      expiry: '',
      listing_stat_id: 1,
      exchange1_datetime: '',
      exchange1_location: '',
      exchange2_datetime: '',
      exchange2_location: ''
    };

    this.submitForm = event => {
      event.preventDefault();
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].addGift(this.state).then(data => {
        if (data.error) {
          alert("".concat(data.error, " Internal server error."));
        } else {
          this.props.history.push("/gifts/".concat(data.id));
        }
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleDateChange = date => {
      this.setState({
        expiry: new Date(date).toISOString()
      });
    };
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin');
    }

    this.props.setPageTitle(this.props.location.pathname);
  }

  shouldComponentUpdate(prevProps, prevState) {
    debugger;

    if (prevProps.pageTitle === this.props.pageTitle) {
      return false;
    }
  }

  render() {
    const user = this.props.user;
    const _this$state = this.state,
          title = _this$state.title,
          description = _this$state.description,
          exchange1_datetime = _this$state.exchange1_datetime,
          exchange1_location = _this$state.exchange1_location,
          expiry = _this$state.expiry,
          image = _this$state.image;
    const submitForm = this.submitForm,
          handleChange = this.handleChange,
          handleDateChange = this.handleDateChange; // if (user && user.locations) {

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "List A Gift"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      id: "title",
      name: "title",
      value: title,
      onChange: handleChange,
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      id: "description",
      name: "description",
      value: description,
      onChange: handleChange,
      helperText: "Describe the gift in detail including its condition, and any other info that you might want other gl\u016Bckers to know",
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Image URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      accept: "image/*" // className={classes.input}
      ,
      id: "icon-button-file",
      type: "file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "icon-button-file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "primary" // className={classes.button}
      ,
      "aria-label": "Upload picture",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      id: "image",
      name: "image",
      value: image,
      onChange: handleChange,
      helperText: "insert a URL",
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "When are you available at your selected location?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      id: "exchange1_datetime",
      name: "exchange1_datetime",
      value: exchange1_datetime,
      onChange: handleChange,
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "When should this post expire?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["KeyboardDatePicker"], {
      margin: "normal",
      id: "mui-pickers-date",
      label: "Date picker",
      value: expiry,
      onChange: handleDateChange,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "contained",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "List this Gift")))); // } else {
    //   return <Fragment>Page loading...</Fragment>
    // }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AddListing));

/***/ }),

/***/ "./src/components/addGiftSubmenu.js":
/*!******************************************!*\
  !*** ./src/components/addGiftSubmenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/addGiftSubmenu.js";




const AddListingSubmenu = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    to: "/gifts/add",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Add Gifting Submenu"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddListingSubmenu);

/***/ }),

/***/ "./src/components/commsCard.js":
/*!*************************************!*\
  !*** ./src/components/commsCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/StarRate */ "./node_modules/@material-ui/icons/StarRate.js");
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/commsCard.js";



const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    maxWidth: 200
  }
});

const CommsCard = ({
  communication,
  pref_comm_id
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    fontWeight: "fontWeightMedium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, communication.label, ' ', parseInt(pref_comm_id) === communication.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      fontSize: 14
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, communication.content))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CommsCard);

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _commsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commsCard */ "./src/components/commsCard.js");
/* harmony import */ var _locationCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locationCard */ "./src/components/locationCard.js");
/* harmony import */ var _user_templateCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_templateCard */ "./src/components/user_templateCard.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/dashboard.js";






const mapData = props => {
  if (Object.keys(props.user).length > 0) {
    let user = props.user;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, user.username, "'s Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "Actions Summary"), user.giftings.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "Giftings: ", user.giftings.length, " exchanges to take action!"), user.receivings.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, "Receivings: ", user.receivings.length, " exchanges to take action!"), user.gifts.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, user.gifts.length), " Gifts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Account Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, "Your Username: ", user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, "Your Email: ", user.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "Communications"), user.communications.length > 0 ? user.communications.map(communication => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: communication.id,
      communication: communication,
      pref_comm_id: user.pref_comm_id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "You have no communications. Add one?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, "Locations"), user.locations.length > 0 ? user.locations.map(location => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_locationCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: location.id,
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, "You have no locations. Add one?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "User Templates"), user.user_templates.length > 0 ? user.user_templates.map(user_template => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_templateCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: user_template.id,
      user_template: user_template,
      locations: user.locations,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "You have no user templates. Add one?"));
  } else {
    props.history.push('/signin');
  }
};

const Dashboard = props => {
  // const classes = useStyles()
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, props.users.length > 0 && mapData(props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Dashboard));

/***/ }),

/***/ "./src/components/dashboardSubmenu.js":
/*!********************************************!*\
  !*** ./src/components/dashboardSubmenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/dashboardSubmenu.js";




const DashboardSubmenu = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Dashboard Submenu"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardSubmenu);

/***/ }),

/***/ "./src/components/giftList.js":
/*!************************************!*\
  !*** ./src/components/giftList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Date */ "./src/Date.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/giftList.js";





const findGifter = (users, id) => {
  const foundGifter = users.find(u => u.id === id);

  if (foundGifter) {
    return foundGifter.username;
  } else {
    return null;
  }
};

const mapGiftsByExpiry = props => {
  let gifts = [...props.gifts].filter(gift => {
    return gift.title.toLowerCase().includes(props.searchTerm.toLowerCase()) && new Date(gift.expiry) > props.today;
  });

  if (gifts.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, "Item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "Subtitle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, "Gifter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, "Expiry Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, "Preferred Meeting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, "Posting Date"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, "Sorry, there are no results from your search."))));
  } else {
    if (props.sortByExpiry === 'asc') {
      // eslint-disable-next-line
      gifts.sort((a, b) => {
        let dateA = new Date(a.expiry);
        let dateB = new Date(b.expiry);
        if (dateA > dateB) return 1;
        if (dateA < dateB) return -1;
        if (dateA === dateB) return 0;
      });
    } else if (props.sortByExpiry === 'dsc') {
      // eslint-disable-next-line
      gifts.sort((a, b) => {
        let dateA = new Date(a.expiry);
        let dateB = new Date(b.expiry);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        if (dateA === dateB) return 0;
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, "Item"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, "Gifter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, "Expiry Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, "Preferred Meeting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, "Posting Date"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, gifts.map(gift => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      key: gift.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/gifts/".concat(gift.id),
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, gift.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, props.users ? findGifter(props.users, gift.gifter_id) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, _Date__WEBPACK_IMPORTED_MODULE_3__["default"].convert(gift.expiry)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, gift.exchange1_location, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }), gift.exchange1_datetime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, _Date__WEBPACK_IMPORTED_MODULE_3__["default"].convert(gift.created_at)))))));
  }
};

const GiftList = props => {
  if (props.gifts) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: undefined
    }, props.gifts.length > 0 ? mapGiftsByExpiry(props) : null);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GiftList);

/***/ }),

/***/ "./src/components/giftListSubmenu.js":
/*!*******************************************!*\
  !*** ./src/components/giftListSubmenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/giftListSubmenu.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}));

const ListingsSubmenu = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Listings Submenu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Expiry date: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: () => props.sortByExpiry('asc'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Ascending"), " |", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: () => props.sortByExpiry('dsc'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Descending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Posting date: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: () => props.sortByExpiry(''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Oldest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.search,
    onSubmit: event => {
      event.preventDefault();
      props.search();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputBase"], {
    placeholder: "Search for a gift",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    },
    onChange: event => props.searchOnChange(event),
    name: "searchTerm",
    id: "searchTerm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Features coming soon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: () => alert('Feature coming soon'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "View As:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), "List", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    value: "checked",
    color: "default",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), "Grid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: () => alert('Feature coming soon'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Show within 5 miles of Your Location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), " Off", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    value: "checked",
    color: "default",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), "On")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingsSubmenu);

/***/ }),

/***/ "./src/components/landing.js":
/*!***********************************!*\
  !*** ./src/components/landing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "../node_modules/react-spring/web.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/landing.js";





const styles = {
  landingContainer: {
    height: 910,
    backgroundImage: "url(".concat('https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', ")"),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: "calc(100vw)",
    margin: -8,
    padding: 24
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  empty: {
    padding: theme.spacing(2),
    textAlign: 'left'
  },
  title: {
    textAlign: 'center'
  }
}));

const Landing = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => props.setPageTitle(props.location.pathname));
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-end",
    alignItems: "right",
    style: styles.landingContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 5,
    className: classes.empty,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    xs: 6,
    id: "container2",
    container: true,
    className: "main-content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    id: "pic",
    alignItems: "flex-end",
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    id: "text",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "gl\u016Bck"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "gifting made happy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    to: "/about" // onClick={() => {
    //   props.setPageTitle(props.location.pathname)
    // }}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Start")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    id: "text",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    className: classes.empty,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Landing));

/***/ }),

/***/ "./src/components/locationCard.js":
/*!****************************************!*\
  !*** ./src/components/locationCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/locationCard.js";


const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    maxWidth: 200
  }
});

const LocationCard = ({
  location
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    fontWeight: "fontWeightMedium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, location.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, location.address, " ", location.city, " ", location.postcode))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationCard);

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/logo.js";



const Logo = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../img/logo_vibe.jpg */ "./src/img/logo_vibe.jpg"),
    alt: "gluck's logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/nav/accountMenu.js":
/*!*******************************************!*\
  !*** ./src/components/nav/accountMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_fis_gluck_gluck_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/SwapHorizontalCircle */ "./node_modules/@material-ui/icons/SwapHorizontalCircle.js");
/* harmony import */ var _material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CardGiftcard */ "./node_modules/@material-ui/icons/CardGiftcard.js");
/* harmony import */ var _material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "./node_modules/@material-ui/icons/PowerSettingsNew.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/nav/accountMenu.js";










 // import InputIcon from '@material-ui/icons/Input'


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

const calculateScheduled = user => {
  if (Object.keys(user).length > 0) {
    return user.giftings.filter(gifting => gifting.exchange_stat_id === 2).length;
  } else {
    return 0;
  }
};

const calculateActions = user => {
  if (Object.keys(user).length > 0) {
    return user.giftings.filter(gifting => gifting.exchange_stat_id === 1).length;
  } else {
    return 0;
  }
};

const AccountMenu = props => {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
        _React$useState2 = Object(_Users_fis_gluck_gluck_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        anchorEl = _React$useState2[0],
        setAnchorEl = _React$useState2[1];

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
        _React$useState4 = Object(_Users_fis_gluck_gluck_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
        mobileMoreAnchorEl = _React$useState4[0],
        setMobileMoreAnchorEl = _React$useState4[1];

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleDashboardMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/dashboard",
    color: "inherit",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: event => {
      handleMenuClose(event);
      props.signOut();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Sign Out"));

  const renderMobileMoreIcon = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "Show more",
      "aria-controls": mobileMenuId,
      "aria-haspopup": "true",
      onClick: handleMobileMenuOpen,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    })), renderMobileMenu);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/gifts",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "All Gifts",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "All Gifts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/about",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "All Gifts",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/schedule",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "Show number of scheduled exchanges",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    badgeContent: calculateScheduled(props.user),
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, "Exchange Schedule"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/action",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "Show number of exchanges to take action",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    badgeContent: calculateActions(props.user),
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, "My Action Panel"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/gifts/add",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "Add Gift",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, "List A Gift"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/dashboard",
    color: "inherit",
    className: classes.link,
    onClick: () => {
      handleMobileMenuClose();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "Account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onClick: event => {
      handleMenuClose(event);
      props.signOut();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    "aria-label": "Signout",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, "Sign Out")));

  const renderUserMenu = props => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.sectionDesktop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/gifts",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: undefined
    }, "All Gifts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/about",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: undefined
    }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: undefined
    }, ' | '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/schedule",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "Show number of scheduled exchanges",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      badgeContent: calculateScheduled(props.user),
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_SwapHorizontalCircle__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: undefined
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/action",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "Show number of exchanges to take action",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      badgeContent: calculateActions(props.user),
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: undefined
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/gifts/add",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      "aria-label": "Add a post",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      edge: "end",
      "aria-label": "Account of current user",
      "aria-controls": menuId,
      "aria-haspopup": "true",
      onClick: handleDashboardMenuOpen,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.sectionMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: undefined
    }, renderMobileMoreIcon()), renderMenu);
  };

  const renderSigninMenu = props => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.sectionDesktop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/gifts",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: undefined
    }, "All Gifts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/about",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: undefined
    }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/signin",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      edge: "end",
      "aria-label": "Sign up or Sign in",
      "aria-controls": menuId,
      "aria-haspopup": "false",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: undefined
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.sectionMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      to: "/signin",
      color: "inherit",
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
      edge: "end",
      "aria-label": "Sign up or Sign in",
      "aria-controls": menuId,
      "aria-haspopup": "false",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: undefined
    })))));
  };

  if (Object.keys(props.user).length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: undefined
    }, renderUserMenu(props));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: undefined
    }, renderSigninMenu(props));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AccountMenu);

/***/ }),

/***/ "./src/components/nav/topNav.js":
/*!**************************************!*\
  !*** ./src/components/nav/topNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _accountMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountMenu */ "./src/components/nav/accountMenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/nav/topNav.js";







const drawerWidth = 220;
const useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: "calc(100% - ".concat(drawerWidth, "px)")
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  menuButtonMain: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: "calc(100% - ".concat(drawerWidth, "px)")
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const TopNav = props => {
  const classes = useStyles();
  const classes2 = useStyles2();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
    position: "fixed",
    className: classes.appBar,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/",
    color: "inherit",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    edge: "start",
    className: classes.menuButtonMain,
    color: "inherit",
    "aria-label": "Open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, props.pageTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accountMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: props.user,
    signOut: props.signOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopNav));

/***/ }),

/***/ "./src/components/signin.js":
/*!**********************************!*\
  !*** ./src/components/signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/dist/material-ui-pickers.esm.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/signin.js";




class Signin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      email: '',
      password: '',
      formToShow: '',
      username: ''
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.renderStartPage = ({
      checkEmail,
      errorMessage
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Let's get started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Enter your email address to get started. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: event => {
          event.preventDefault();
          checkEmail(this.state.email);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "email",
        name: "email",
        placeholder: "email@email.com",
        value: this.state.email,
        onChange: this.handleChange,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "contained",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Get Started")));
    };

    this.renderSigninForm = ({
      signIn
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Welcome back, gl\u016Bcker!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Please sign in with your password."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: event => {
          event.preventDefault();
          signIn({
            email: this.state.email,
            password: this.state.password
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "email",
        name: "email",
        placeholder: "email@email.com",
        value: this.state.email,
        onChange: this.handleChange,
        margin: "normal",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "password",
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.handleChange,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "contained",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Login")));
    };

    this.renderSignupForm = ({
      email,
      signUp,
      users
    }) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Hey there, welcome!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Looks like it's your first time here! Please sign up."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: event => {
          event.preventDefault();

          if (users.find(user => user.username === this.state.username)) {
            alert('username already exists, please choose a different username!');
          } else {
            signUp({
              email: this.state.email,
              password: this.state.password,
              username: this.state.username
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "email",
        name: "email",
        placeholder: email,
        value: this.state.email,
        onChange: this.handleChange,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "password",
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.handleChange,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Pick a username, you can change this later."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        id: "username",
        type: "username",
        name: "username",
        placeholder: "username",
        value: this.state.username,
        onChange: this.handleChange,
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "contained",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Sign Up")));
    };
  }

  componentDidMount() {
    if (this.props.startEmail) {
      this.setState({
        email: this.props.startEmail
      });
    }
  }

  render() {
    if (this.props.formToShow !== null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, !this.props.formToShow && this.renderStartPage(this.props), this.props.formToShow === 'login' && this.renderSigninForm(this.props), this.props.formToShow === 'signup' && this.renderSignupForm(this.props));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./src/components/signinSubmenu.js":
/*!*****************************************!*\
  !*** ./src/components/signinSubmenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/signinSubmenu.js";




const SigninSubmenu = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    to: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Signin Submenu"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SigninSubmenu);

/***/ }),

/***/ "./src/components/singleGift.js":
/*!**************************************!*\
  !*** ./src/components/singleGift.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Date */ "./src/Date.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/singleGift.js";



 // import { withStyles, createMuiTheme } from '@material-ui/core/styles'

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000
  },
  image: {
    width: 400,
    height: 400,
    top: -50
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%' // button: {
    //   margin: 'auto'
    // }

  }
}));

const SingleGift = ({
  gift,
  handleEditMode
}) => {
  const classes = useStyles();
  return gift ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    id: "big_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: true,
    id: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "TITLE:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), " ", gift.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "DESCRIPTION:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), " ", gift.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Expiry:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), " ", _Date__WEBPACK_IMPORTED_MODULE_1__["default"].convert(gift.expiry)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Exchange Date/Time:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), " ", gift.exchange1_datetime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Exchange Location:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), " ", gift.exchange1_location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    id: "container2",
    md: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    id: "pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ButtonBase"], {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    alt: "".concat(gift.title),
    src: "".concat(gift.image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    id: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Manage")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    id: "button",
    onClick: () => handleEditMode(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Edit"))))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleGift);

/***/ }),

/***/ "./src/components/singleGiftEdit.js":
/*!******************************************!*\
  !*** ./src/components/singleGiftEdit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API */ "./src/API.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/dist/material-ui-pickers.esm.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/singleGiftEdit.js";








const renderGiftsList = gifts => {
  if (gifts) {
    return gifts.map(gift => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        key: gift.id,
        value: gift.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, gift.title);
    });
  } else return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "You don't have any gifts to list.");
};

class SingleGiftEdit extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};

    this.submitForm = (props, event) => {
      event.preventDefault();
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].editGift(this.state).then(data => {
        if (data.error) {
          console.log('error');
        } else {
          alert('Your gift has been updated!');
          props.handleEditMode();
          this.props.history.push("/gifts/".concat(data.id));
        }
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleDateChange = date => {
      this.setState({
        expiry: new Date(date).toISOString()
      });
    };
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin');
    }

    this.setState({
      title: this.props.gift.title,
      description: this.props.gift.description,
      exchange1_datetime: this.props.gift.exchange1_datetime,
      exchange1_location: this.props.gift.exchange1_location,
      expiry: this.props.gift.expiry,
      image: this.props.gift.image,
      id: this.props.gift.id
    });
  }

  render() {
    const _this$props = this.props,
          user = _this$props.user,
          handleEditMode = _this$props.handleEditMode;
    const _this$state = this.state,
          title = _this$state.title,
          description = _this$state.description,
          image = _this$state.image,
          exchange1_datetime = _this$state.exchange1_datetime,
          exchange1_location = _this$state.exchange1_location,
          expiry = _this$state.expiry;
    const submitForm = this.submitForm,
          handleChange = this.handleChange,
          handleDateChange = this.handleDateChange;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 2,
      id: "big_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: event => submitForm(this.props, event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      md: true,
      id: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      gutterBottom: true,
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "TITLE:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      id: "title",
      name: "title",
      value: title,
      onChange: handleChange,
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "DESCRIPTION:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      id: "description",
      label: "Select",
      value: description,
      onChange: handleChange,
      helperText: "Describe the gift in detail including its condition, and any other info that you might want other gl\u016Bckers to know",
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Expiry:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
      margin: "normal",
      id: "mui-pickers-date",
      label: "Date picker",
      value: expiry,
      onChange: handleDateChange,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Exchange Date/Time:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      id: "exchange1_datetime",
      name: "exchange1_datetime",
      value: exchange1_datetime,
      onChange: handleChange,
      margin: "normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Exchange Location:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), user.locations && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], {
      "aria-label": "Location",
      name: "exchange1_location",
      value: exchange1_location,
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, user.locations.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["FormControlLabel"], {
      value: user.locations[0].postcode,
      control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }),
      label: "".concat(user.locations[0].address, ", ").concat(user.locations[0].city, ", ").concat(user.locations[0].postcode, " (").concat(user.locations[0].label, ")"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["FormControlLabel"], {
      value: user.locations[1].postcode,
      control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Radio"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }),
      label: "".concat(user.locations[1].address, ", ").concat(user.locations[1].city, ", ").concat(user.locations[1].postcode, " (").concat(user.locations[1].label, ")"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), user.locations.length === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "You don't have any addresses listed, please add this from the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Dashboard"), "."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      id: "container2",
      md: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      id: "pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      id: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Submit Edits"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SingleGiftEdit));

/***/ }),

/***/ "./src/components/singleGiftSubmenu.js":
/*!*********************************************!*\
  !*** ./src/components/singleGiftSubmenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/singleGiftSubmenu.js";




const SingleGiftSubmenu = ({
  gift,
  giftOwner,
  user
}) => {
  if (giftOwner && user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxWidth: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, "Single Gift Submenu"), giftOwner.id === user.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, "This is your item! Go to Action Panel to manage this gift."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/action",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "contained",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, "Manage Gifting"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "contained",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, "Request Gift")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Other items by ", giftOwner.username), giftOwner.gifts.filter(l => l.id !== gift.id).map(gift => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: gift.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/gifts/".concat(gift.id),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }, gift.title));
    })));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SingleGiftSubmenu);

/***/ }),

/***/ "./src/components/user_templateCard.js":
/*!*********************************************!*\
  !*** ./src/components/user_templateCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/components/user_templateCard.js";


const useStyles = Object(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  card: {
    maxWidth: 500
  }
});

const findLocationName = (locations, id) => locations.find(l => l.id === id).label;

const UserTemplateCard = ({
  user_template,
  locations
}) => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    fontWeight: "fontWeightMedium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, user_template.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, user_template.content), user_template.location_id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Related to:", ' ', findLocationName(locations, user_template.location_id)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserTemplateCard);

/***/ }),

/***/ "./src/containers/aboutCanvas.js":
/*!***************************************!*\
  !*** ./src/containers/aboutCanvas.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about */ "./src/components/about.js");
/* harmony import */ var _components_aboutSubmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/aboutSubmenu */ "./src/components/aboutSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/aboutCanvas.js";





const AboutCanvas = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (AboutCanvas);

/***/ }),

/***/ "./src/containers/actionCanvas.js":
/*!****************************************!*\
  !*** ./src/containers/actionCanvas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_action_giftsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/action/giftsView */ "./src/components/action/giftsView.js");
/* harmony import */ var _components_action_giftingsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/action/giftingsView */ "./src/components/action/giftingsView.js");
/* harmony import */ var _components_action_requestsView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/action/requestsView */ "./src/components/action/requestsView.js");
/* harmony import */ var _components_action_actionSubmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/action/actionSubmenu */ "./src/components/action/actionSubmenu.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../API */ "./src/API.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/actionCanvas.js";









class ActionCanvas extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      user: this.props.user,
      selectedGiftsIds: [],
      //For all giftings across recipients, used for draft gifting
      selectedGiftingsIds: [],
      //For all giftings across recipients, used for draft gifting
      tabValue: 1,
      giftsFilter: 'all',
      sortRequester: 'asc'
    };

    this.findUser = id => this.props.users.find(user => user.id === id);

    this.removeGiftings = giftings => {
      let giftIdsForThisRecipient = [];
      let removedGiftingsIds = [];
      let giftingsToMakeAvailable = [];
      giftings.map(gifting => {
        this.changeGiftingState(gifting, 5); //find the GIFTING and archive it

        giftIdsForThisRecipient.push(gifting.gift_id); //collect the ids of GIFTS allocated to this user that were archived

        removedGiftingsIds.push(gifting.id); //collect the ids of GIFTINGS that were archived

        return null;
      });

      if (giftIdsForThisRecipient.length > 0) {
        giftIdsForThisRecipient.map((giftId //find other GIFTINGS with the same gift
        ) => giftingsToMakeAvailable.push(this.findOtherGiftingsWithSameGift(giftId, removedGiftingsIds) //collect ALL of the results, an array per user
        ));
      }

      if (giftingsToMakeAvailable.flat().length > 0) {
        giftingsToMakeAvailable.flat().map(gifting => {
          this.changeGiftingState(gifting, 1);
          return null;
        });
      }

      this.setState({
        selectedGiftsIds: [],
        selectedGiftingsIds: []
      }, this.alertMessageSummary());
      return window.location.reload();
    };

    this.commitGiftings = giftings => {
      let giftIdsForThisRecipient = [];
      let committedGiftingsIds = [];
      let giftingsToMakeAvailable = [];
      giftings.map(gifting => {
        this.changeGiftingState(gifting, 2);
        giftIdsForThisRecipient.push(gifting.gift_id);
        committedGiftingsIds.push(gifting.id);
        return null;
      });

      if (giftIdsForThisRecipient.length > 0) {
        giftIdsForThisRecipient.map(giftId => giftingsToMakeAvailable.push(this.findOtherGiftingsWithSameGift(giftId, committedGiftingsIds)));
      }

      if (giftingsToMakeAvailable.flat().length > 0) {
        giftingsToMakeAvailable.flat().map(gifting => {
          this.changeGiftingState(gifting, 3);
          return null;
        });
      }

      this.setState({
        selectedGiftsIds: [],
        selectedGiftingsIds: []
      }, this.alertMessageSummary());
      return window.location.reload();
    };

    this.changeGiftingState = (gifting, statId) => {
      gifting.exchange_stat_id = statId;
      _API__WEBPACK_IMPORTED_MODULE_7__["default"].updateExchangeStat(gifting);
    };

    this.alertMessageSummary = () => {
      return alert('Status of all giftings has been updated and the recipients notified by email.');
    };

    this.findOtherGiftingsWithSameGift = (giftId, giftingsToNotPickFrom) => {
      let allGiftingsWithThisGift = this.state.user.giftings.filter(gifting => gifting.gift_id === giftId);
      return allGiftingsWithThisGift.filter(gifting => !giftingsToNotPickFrom.includes(gifting.id));
    };

    this.handleGiftsFilter = str => this.setState({
      giftsFilter: str
    });

    this.handleSortRequester = str => this.setState({
      sortRequester: str
    });

    this.changeTab = (event, newValue) => this.setState({
      tabValue: newValue
    });

    this.changeTab1 = tabValue => this.setState({
      tabValue
    });

    this.changeSortByExpiry = str => this.setState({
      sortByExpiry: str
    });

    this.draftGifting = pair => {
      if (!this.state.selectedGiftsIds.includes(pair.gift.id)) {
        //if the gift is not yet selected to be gifted, this click is to add
        const selectedGiftsIds = [...this.state.selectedGiftsIds];
        const selectedGiftingsIds = [...this.state.selectedGiftingsIds];
        selectedGiftsIds.push(pair.gift.id);
        selectedGiftingsIds.push(pair.gifting_id);
        this.setState({
          selectedGiftsIds,
          selectedGiftingsIds
        });
      } else {
        //if the gift is already selected, this click is to remove
        const currentIndex = this.state.selectedGiftsIds.indexOf(pair.gift.id);
        const selectedGiftsIds = [...this.state.selectedGiftsIds];
        const selectedGiftingsIds = [...this.state.selectedGiftingsIds];
        selectedGiftsIds.splice(currentIndex, 1);
        selectedGiftingsIds.splice(currentIndex, 1);
        this.setState({
          selectedGiftsIds,
          selectedGiftingsIds
        });
      }
    };

    this.findCommittedGiftingsWithThisRecipient = recipientId => {
      const foundAllGiftingsWithThisRecipient = this.props.user.giftings.filter(gifting => gifting.recipient_id === recipientId);
      const giftingsWithCommittedStatus = foundAllGiftingsWithThisRecipient.filter(gifting => gifting.exchange_stat_id === 2);
      return giftingsWithCommittedStatus;
    };

    this.exchangeCompletedWith = recipientId => {
      const selectedGiftings = this.findCommittedGiftingsWithThisRecipient(recipientId);
      selectedGiftings.map(gifting => this.changeGiftingState(gifting, 4));
      this.alertMessageSummary();
      return window.location.reload();
    };

    this.exchangeCancelledWith = recipientId => {
      const selectedGiftings = this.findCommittedGiftingsWithThisRecipient(recipientId);
      selectedGiftings.map(gifting => this.changeGiftingState(gifting, 5));
      this.alertMessageSummary();
      window.location.reload();
    };
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin');
    }
  }

  render() {
    const _this$state = this.state,
          viewByRequesters = _this$state.viewByRequesters,
          selectedGiftsIds = _this$state.selectedGiftsIds,
          selectedGiftingsIds = _this$state.selectedGiftingsIds,
          tabValue = _this$state.tabValue,
          giftsFilter = _this$state.giftsFilter,
          sortRequester = _this$state.sortRequester;
    const _this$props = this.props,
          users = _this$props.users,
          user = _this$props.user;
    const changeView = this.changeView,
          changeSortByExpiry = this.changeSortByExpiry,
          draftGifting = this.draftGifting,
          commitGiftings = this.commitGiftings,
          removeGiftings = this.removeGiftings,
          exchangeCompletedWith = this.exchangeCompletedWith,
          exchangeCancelledWith = this.exchangeCancelledWith,
          changeTab = this.changeTab,
          handleGiftsFilter = this.handleGiftsFilter,
          handleSortRequester = this.handleSortRequester,
          changeTab1 = this.changeTab1;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      value: tabValue,
      onChange: changeTab,
      indicatorColor: "primary",
      textColor: "primary",
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      label: "My Gifts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      label: "My Giftings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_action_actionSubmenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tabValue: tabValue,
      giftsFilter: giftsFilter,
      sortRequester: sortRequester,
      handleGiftsFilter: str => handleGiftsFilter(str),
      handleSortRequester: str => handleSortRequester(str),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }), tabValue === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_action_giftsView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      users: users,
      user: user,
      changeTab: value => changeTab1(value),
      selectedGiftsIds: selectedGiftsIds,
      selectedGiftingsIds: selectedGiftingsIds,
      giftsFilter: giftsFilter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }), tabValue === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_action_giftingsView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      users: users,
      user: user,
      viewByRequesters: viewByRequesters,
      selectedGiftsIds: selectedGiftsIds,
      selectedGiftingsIds: selectedGiftingsIds,
      giftsFilter: giftsFilter,
      sortRequester: sortRequester,
      draftGifting: id => draftGifting(id),
      exchangeCompletedWith: recipientId => exchangeCompletedWith(recipientId),
      exchangeCancelledWith: recipientId => exchangeCancelledWith(recipientId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }), tabValue === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_action_requestsView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      users: users,
      user: user,
      viewByRequesters: viewByRequesters,
      selectedGiftsIds: selectedGiftsIds,
      selectedGiftingsIds: selectedGiftingsIds,
      giftsFilter: giftsFilter,
      draftGifting: id => draftGifting(id),
      exchangeCompletedWith: recipientId => exchangeCompletedWith(recipientId),
      exchangeCancelledWith: recipientId => exchangeCancelledWith(recipientId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActionCanvas));

/***/ }),

/***/ "./src/containers/addGiftCanvas.js":
/*!*****************************************!*\
  !*** ./src/containers/addGiftCanvas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_addGift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/addGift */ "./src/components/addGift.js");
/* harmony import */ var _components_addGiftSubmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addGiftSubmenu */ "./src/components/addGiftSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/addGiftCanvas.js";






const AddGiftCanvas = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_addGift__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: props.user,
    setPageTitle: path => props.setPageTitle(path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_addGiftSubmenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AddGiftCanvas));

/***/ }),

/***/ "./src/containers/dashboardCanvas.js":
/*!*******************************************!*\
  !*** ./src/containers/dashboardCanvas.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard */ "./src/components/dashboard.js");
/* harmony import */ var _components_dashboardSubmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboardSubmenu */ "./src/components/dashboardSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/dashboardCanvas.js";





function DashboardCanvas(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.user) {
      props.history.push('/signin');
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: props.user,
    users: props.users,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboardSubmenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DashboardCanvas);

/***/ }),

/***/ "./src/containers/giftListCanvas.js":
/*!******************************************!*\
  !*** ./src/containers/giftListCanvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_giftList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/giftList */ "./src/components/giftList.js");
/* harmony import */ var _components_giftListSubmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/giftListSubmenu */ "./src/components/giftListSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/giftListCanvas.js";





class GiftListCanvas extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      sortByExpiry: '',
      searchTerm: ''
    };

    this.search = () => {
      this.props.gifts.filter(listing => listing.gift['title'].includes(this.state.searchTerm));
    };

    this.searchOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.changeSortByExpiry = str => this.setState({
      sortByExpiry: str
    });
  }

  render() {
    const _this$state = this.state,
          sortByExpiry = _this$state.sortByExpiry,
          searchTerm = _this$state.searchTerm;
    const _this$props = this.props,
          bgcolor = _this$props.bgcolor,
          today = _this$props.today,
          gifts = _this$props.gifts,
          users = _this$props.users;
    const search = this.search,
          searchOnChange = this.searchOnChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 9,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "All gifts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_giftList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      today: today,
      gifts: gifts,
      users: users,
      searchTerm: searchTerm,
      sortByExpiry: sortByExpiry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_giftListSubmenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sortByExpiry: str => this.changeSortByExpiry(str),
      search: event => search(event),
      searchOnChange: event => searchOnChange(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GiftListCanvas);

/***/ }),

/***/ "./src/containers/mainCanvas.js":
/*!**************************************!*\
  !*** ./src/containers/mainCanvas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_fis_gluck_gluck_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _aboutCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutCanvas */ "./src/containers/aboutCanvas.js");
/* harmony import */ var _giftListCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./giftListCanvas */ "./src/containers/giftListCanvas.js");
/* harmony import */ var _signinCanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signinCanvas */ "./src/containers/signinCanvas.js");
/* harmony import */ var _dashboardCanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboardCanvas */ "./src/containers/dashboardCanvas.js");
/* harmony import */ var _actionCanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionCanvas */ "./src/containers/actionCanvas.js");
/* harmony import */ var _addGiftCanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addGiftCanvas */ "./src/containers/addGiftCanvas.js");
/* harmony import */ var _singleGiftCanvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./singleGiftCanvas */ "./src/containers/singleGiftCanvas.js");
/* harmony import */ var _components_action_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/action/schedule */ "./src/components/action/schedule.js");
/* harmony import */ var _scheduleContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scheduleContainer */ "./src/containers/scheduleContainer.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../test */ "./src/test.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/mainCanvas.js";
 // eslint-disable-next-line






























const drawerWidth = 220;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: "calc(100% - ".concat(drawerWidth, "px)")
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const MainCanvas = props => {
  const container = props.container;
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_30__["useTheme"])();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
        _React$useState2 = Object(_Users_fis_gluck_gluck_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        mobileOpen = _React$useState2[0],
        setMobileOpen = _React$useState2[1];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/gifts",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_giftListCanvas__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, routerProps, {
      users: props.users,
      gifts: props.gifts,
      today: props.today,
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/dashboard",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dashboardCanvas__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, routerProps, {
      user: props.user,
      users: props.users,
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/action",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionCanvas__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, routerProps, {
      user: props.user,
      users: props.users,
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/gifts/add",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addGiftCanvas__WEBPACK_IMPORTED_MODULE_9__["default"], {
      user: props.user,
      setPageTitle: path => props.setPageTitle(path),
      pageTitle: props.pageTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/gifts/:id",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_singleGiftCanvas__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, routerProps, {
      user: props.user,
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/signin",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_signinCanvas__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, routerProps, {
      users: props.users,
      formToShow: props.formToShow,
      startEmail: props.startEmail,
      errorMessage: props.errorMessage,
      checkEmail: email => props.checkEmail(email),
      signIn: credentials => props.signIn(credentials),
      signUp: credentials => props.signUp(credentials),
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/test",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_test__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, routerProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/schedule",
    component: routerProps => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_scheduleContainer__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, routerProps, {
      user: props.user,
      users: props.users,
      gifts: props.gifts,
      setPageTitle: path => props.setPageTitle(path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: () => '404: Page Not Found',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainCanvas);

/***/ }),

/***/ "./src/containers/scheduleContainer.js":
/*!*********************************************!*\
  !*** ./src/containers/scheduleContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_action_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/action/schedule */ "./src/components/action/schedule.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/scheduleContainer.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    maxWidth: 300
  }
}));

const renderCommittedGiftings = props => {
  const giftingsInQuestion = findCommittedGiftings(props.user);
  const recipients = findUniqueRecipientsObjectsFromGiftings(giftingsInQuestion, props.users);
  return recipients.map(recipient => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      md: 3,
      zeroMinWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_action_schedule__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: recipient.id,
      recipient: recipient,
      giftingsOfThisRecipient: giftingsOfThisRecipient(recipient, giftingsInQuestion),
      users: props.users,
      exchangeCompletedWith: recipientId => props.exchangeCompletedWith(recipientId),
      exchangeCancelledWith: recipientId => props.exchangeCancelledWith(recipientId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }));
  });
};

const findCommittedGiftings = user => user.giftings.filter(g => g.exchange_stat_id === 2);

const giftingsOfThisRecipient = (recipient, giftingsOfThisGifter) => {
  return giftingsOfThisGifter.filter(gifting => gifting.recipient_id === recipient.id);
};

const findUniqueRecipientsObjectsFromGiftings = (giftings, users) => {
  const r = [];
  giftings.map(g => r.push(users.find(u => u.id === g.recipient_id)));
  const recipients = [...new Set(r)]; // unique recipients

  return recipients;
};

const ScheduleContainer = props => {
  const classes = useStyles();

  if (Object.keys(props.user).length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 3,
      zeroMinWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, renderCommittedGiftings(props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      md: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: classes.paperRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, "You're doing great! And I'm just testing a really long text to check that everything is ok.")))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleContainer);

/***/ }),

/***/ "./src/containers/signinCanvas.js":
/*!****************************************!*\
  !*** ./src/containers/signinCanvas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signin */ "./src/components/signin.js");
/* harmony import */ var _components_signinSubmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signinSubmenu */ "./src/components/signinSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/signinCanvas.js";





const SigninCanvas = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  item: true,
  xs: 9,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_signin__WEBPACK_IMPORTED_MODULE_2__["default"], {
  formToShow: props.formToShow,
  startEmail: props.startEmail,
  errorMessage: props.errorMessage,
  checkEmail: email => props.checkEmail(email),
  signIn: credentials => props.signIn(credentials),
  signUp: credentials => props.signUp(credentials),
  users: props.users,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  item: true,
  xs: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_signinSubmenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (SigninCanvas);

/***/ }),

/***/ "./src/containers/singleGiftCanvas.js":
/*!********************************************!*\
  !*** ./src/containers/singleGiftCanvas.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API */ "./src/API.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Date */ "./src/Date.js");
/* harmony import */ var _components_singleGift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/singleGift */ "./src/components/singleGift.js");
/* harmony import */ var _components_singleGiftEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/singleGiftEdit */ "./src/components/singleGiftEdit.js");
/* harmony import */ var _components_singleGiftSubmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/singleGiftSubmenu */ "./src/components/singleGiftSubmenu.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/containers/singleGiftCanvas.js";








const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])();
const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000
  },
  image: {
    width: 400,
    height: 400,
    top: -50
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%' // button: {
    //   margin: 'auto'
    // }

  }
};

class SingleGiftCanvas extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      editMode: false
    };

    this.addUserToState = giftOwner => {
      this.setState({
        giftOwner: giftOwner
      });
    };

    this.handleEditMode = () => this.setState({
      editMode: !this.state.editMode
    });

    this.handleEditSubmit = () => console.log('editing!');
  }

  componentDidMount() {
    _API__WEBPACK_IMPORTED_MODULE_3__["default"].fetchSingleGift(this.props.match.params.id).then(gift => {
      this.setState({
        gift
      });
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.gift && prevState.gift !== this.state.gift) {
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].fetchOtherUser(this.state.gift.gifter_id).then(giftOwner => {
        this.addUserToState(giftOwner);
      });
    }
  }

  render() {
    const _this$state = this.state,
          gift = _this$state.gift,
          giftOwner = _this$state.giftOwner,
          editMode = _this$state.editMode;
    const _this$props = this.props,
          user = _this$props.user,
          classes = _this$props.classes;
    const handleEditMode = this.handleEditMode,
          handleEditSubmit = this.handleEditSubmit;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, gift && !editMode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_singleGift__WEBPACK_IMPORTED_MODULE_5__["default"], {
      gift: gift,
      handleEditMode: handleEditMode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), gift && editMode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_singleGiftEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gift: gift,
      handleEditMode: handleEditMode,
      handleEditSubmit: obj => handleEditSubmit(obj),
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), !gift && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  WithTheme: true
})(SingleGiftCanvas));

/***/ }),

/***/ "./src/img/logo_vibe.jpg":
/*!*******************************!*\
  !*** ./src/img/logo_vibe.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo_vibe.297b9bc7.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["register"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComplexGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
var _jsxFileName = "/Users/fis/gluck/gluck-client/src/test.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));
function ComplexGrid() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    alt: "complex",
    src: "https://i.ibb.co/8x7h7gv/Crayons.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    sm: true,
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: true,
    container: true,
    direction: "column",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Full resolution 1920x1080 \u2022 JPEG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "ID: 1030114")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    style: {
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "$19.00"))))));
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/fis/gluck/gluck-client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/fis/gluck/gluck-client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map