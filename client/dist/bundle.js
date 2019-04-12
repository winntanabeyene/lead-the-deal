/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/patrick/Documents/senior/greenfield/client/src/index.jsx: Unexpected token (101:1)\\n\\n\\u001b[0m \\u001b[90m  99 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 100 | \\u001b[39m        {\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39misLoggedin \\u001b[33m?\\u001b[39m \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 101 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 102 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mDashBody\\u001b[39m auth\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mAuth\\u001b[39m} userId\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39muserId}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[33m:\\u001b[39m \\u001b[36mnull\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 103 | \\u001b[39m        }\\u001b[0m\\n\\u001b[0m \\u001b[90m 104 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n    at Object.raise (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Object.unexpected (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5167:16)\\n    at Object.jsxParseIdentifier (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3350:12)\\n    at Object.jsxParseNamespacedName (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3360:23)\\n    at Object.jsxParseElementName (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3371:21)\\n    at Object.jsxParseOpeningElementAt (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3456:22)\\n    at Object.jsxParseElementAt (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3489:33)\\n    at Object.jsxParseElement (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3558:17)\\n    at Object.parseExprAtom (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3565:19)\\n    at Object.parseExprSubscripts (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Object.parseMaybeUnary (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Object.parseExprOps (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Object.parseMaybeConditional (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Object.parseMaybeAssign (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Object.parseConditional (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5768:30)\\n    at Object.parseMaybeConditional (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5761:17)\\n    at Object.parseMaybeAssign (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Object.parseExpression (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5649:23)\\n    at Object.jsxParseExpressionContainer (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3426:30)\\n    at Object.jsxParseElementAt (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3516:34)\\n    at Object.jsxParseElement (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3558:17)\\n    at Object.parseExprAtom (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3565:19)\\n    at Object.parseExprSubscripts (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Object.parseMaybeUnary (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Object.parseExprOps (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Object.parseMaybeConditional (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Object.parseMaybeAssign (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Object.parseParenAndDistinguishExpression (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:6466:28)\\n    at Object.parseExprAtom (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:6260:21)\\n    at Object.parseExprAtom (/home/patrick/Documents/senior/greenfield/node_modules/@babel/parser/lib/index.js:3570:20)\");\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

/******/ });