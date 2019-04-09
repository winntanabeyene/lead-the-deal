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

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/arnulfo/Documents/operation-spark/fork-lead-the-deal/package.json: Error while parsing JSON - Unexpected token < in JSON at position 868\\n    at JSON.parse (<anonymous>)\\n    at readConfigPackage (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/files/package.js:57:20)\\n    at /home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/files/utils.js:29:12\\n    at cachedFunction (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/caching.js:33:19)\\n    at findPackageData (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/files/package.js:33:11)\\n    at buildRootChain (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/config-chain.js:105:85)\\n    at loadPrivatePartialConfig (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/partial.js:85:55)\\n    at Object.loadPartialConfig (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/@babel/core/lib/config/partial.js:110:18)\\n    at Object.<anonymous> (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:140:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:5:194)\\n    at /home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object.loader (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:56:18)\\n    at Object.<anonymous> (/home/arnulfo/Documents/operation-spark/fork-lead-the-deal/node_modules/babel-loader/lib/index.js:51:12)\");\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

/******/ });