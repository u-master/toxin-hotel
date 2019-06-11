var common =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/common/menu/menu.js":
/*!************************************!*\
  !*** ./blocks/common/menu/menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports = {\r\n    menu_submenuButton_click: function (idSubmenu) {\r\n        idSubmenu = \"#\" + idSubmenu;\r\n        const submenu = document.querySelector(idSubmenu);\r\n        if (submenu.style.visibility === \"hidden\")\r\n            submenu.style.visibility = \"visible\";\r\n        else\r\n            submenu.style.visibility = \"hidden\";\r\n    }\r\n};\n\n//# sourceURL=webpack://common/./blocks/common/menu/menu.js?");

/***/ }),

/***/ "./blocks/common/range-slider/range-slider.js":
/*!****************************************************!*\
  !*** ./blocks/common/range-slider/range-slider.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nvar widthSliderBoarder = 1;\r\nvar halfWidthToggler = 8; // for centring\r\n\r\n\r\nmodule.exports = {\r\n    rangeSlider: function(idRangeSlider) {\r\n        console.log(\"Range-slider loaded... Id: \" + idRangeSlider);\r\n\r\n        var eRangeSlider = document.getElementById(idRangeSlider);\r\n        var eTextLow = eRangeSlider.querySelector(\".range-slider__lowvalue\");\r\n        var eInputLow = eRangeSlider.querySelector(\".range-slider__input-lowvalue\");\r\n        var eTextHigh = eRangeSlider.querySelector(\".range-slider__highvalue\");\r\n        var eInputHigh = eRangeSlider.querySelector(\".range-slider__input-highvalue\");\r\n        var eAxis = eRangeSlider.querySelector(\".range-slider__axis\");\r\n        var eTogglerLow = eRangeSlider.querySelector(\".range-slider__toggler_left\");\r\n        var eTogglerHigh = eRangeSlider.querySelector(\".range-slider__toggler_right\");\r\n        var eAxisFilling = eRangeSlider.querySelector(\".range-slider__axis-filling\");\r\n\r\n        var minValue = + eRangeSlider.getAttribute(\"data-min\");\r\n        var maxValue = + eRangeSlider.getAttribute(\"data-max\");\r\n\r\n        eTogglerLow.percent = +(eTogglerLow.style.left.slice(0,-1));\r\n        eTogglerHigh.percent = +(eTogglerHigh.style.right.slice(0,-1));\r\n\r\n        function getLeftPosition(elem) {\r\n            return elem.getBoundingClientRect().left + window.pageXOffset;\r\n        }\r\n\r\n        function getRightPosition(elem) {\r\n            return elem.getBoundingClientRect().right + window.pageXOffset;\r\n        }\r\n\r\n        function setLeftValues(percent, isSkipSetText) {\r\n            eTogglerLow.style.left = eAxisFilling.style.left = percent+\"%\";\r\n            eTogglerLow.percent = percent;\r\n            var width = (100-percent-eTogglerHigh.percent);\r\n            eAxisFilling.style.width = (width>0 ? width : 0) +\"%\";\r\n            eTogglerLow.style.zIndex = (percent===100) ? 3 : 2;\r\n            if (!isSkipSetText)\r\n                eTextLow.innerText = (\"\"+(Math.round(minValue + percent * (maxValue-minValue) * 0.01))).replace(/(\\d{1,3})(?=(\\d{3})*$)/g,\"$1 \").trim();\r\n        }\r\n\r\n        function setRightValues(percent, isSkipSetText) {\r\n            eTogglerHigh.style.right = percent+\"%\";\r\n            eTogglerHigh.percent = percent;\r\n            var width = (100-percent-eTogglerLow.percent);\r\n            eAxisFilling.style.width = (width>0 ? width : 0) +\"%\";\r\n            eTogglerHigh.style.zIndex = (percent===100) ? 3 : 2;\r\n            if (!isSkipSetText)\r\n                eTextHigh.innerText = (\"\"+(Math.round(maxValue - percent * (maxValue-minValue) * 0.01))).replace(/(\\d{1,3})(?=(\\d{3})*$)/g,\" $1\");\r\n        }\r\n\r\n        /* --- low toggler moving events --- */\r\n        eTogglerLow.addEventListener(\"touchstart\",\r\n            function(event) {\r\n                event.preventDefault();\r\n                eTogglerLow.handlers = handlersTogglerLow(event);\r\n\r\n                document.addEventListener(\"touchmove\", eTogglerLow.handlers.handlerMoveToggler);\r\n                document.addEventListener(\"touchend\", eTogglerLow.handlers.handlerTouchEnd);\r\n            });\r\n\r\n        eTogglerLow.addEventListener(\"mousedown\",\r\n            function(event) {\r\n                eTogglerLow.handlers = handlersTogglerLow(event);\r\n\r\n                document.addEventListener(\"mousemove\", eTogglerLow.handlers.handlerMoveToggler);\r\n                document.addEventListener(\"mouseup\", eTogglerLow.handlers.handlerMouseUp);\r\n            });\r\n\r\n        function handlersTogglerLow(event) {\r\n            var positionSlider = getLeftPosition(eRangeSlider) + widthSliderBoarder;\r\n            var positionTogglerLow =\r\n                getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler\r\n            var positionTogglerHigh =\r\n                getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler\r\n            var shiftClick = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - positionTogglerLow;\r\n            var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;\r\n\r\n            return {\r\n                handlerMoveToggler: function (event) {\r\n                    var result = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - shiftClick;\r\n                    var percent;\r\n                    if (result < positionSlider)\r\n                        percent = 0;\r\n                    else {\r\n                        if (result > positionTogglerHigh)\r\n                            result = positionTogglerHigh;\r\n                        percent = 100 * (result - positionSlider) / widthSlider;\r\n                    }\r\n                    setLeftValues(percent);\r\n                },\r\n\r\n                handlerMouseUp: function () {\r\n                    document.removeEventListener(\"mousemove\", eTogglerLow.handlers.handlerMoveToggler);\r\n                    document.removeEventListener(\"mouseup\", eTogglerLow.handlers.handlerMouseUp);\r\n                },\r\n\r\n                handlerTouchEnd: function () {\r\n                    event.preventDefault();\r\n                    document.removeEventListener(\"touchmove\", eTogglerLow.handlers.handlerMoveToggler);\r\n                    document.removeEventListener(\"touchend\", eTogglerLow.handlers.handlerTouchEnd);\r\n                }\r\n            };\r\n        }\r\n\r\n        /* --- high toggler moving events --- */\r\n        eTogglerHigh.addEventListener(\"touchstart\",\r\n            function(event) {\r\n                event.preventDefault();\r\n                eTogglerHigh.handlers = handlersTogglerHigh(event);\r\n\r\n                document.addEventListener(\"touchmove\", eTogglerHigh.handlers.handlerMoveToggler);\r\n                document.addEventListener(\"touchend\", eTogglerHigh.handlers.handlerTouchEnd);\r\n            });\r\n\r\n        eTogglerHigh.addEventListener(\"mousedown\",\r\n            function(event) {\r\n                eTogglerHigh.handlers = handlersTogglerHigh(event);\r\n\r\n                document.addEventListener(\"mousemove\", eTogglerHigh.handlers.handlerMoveToggler);\r\n                document.addEventListener(\"mouseup\", eTogglerHigh.handlers.handlerMouseUp);\r\n            });\r\n\r\n        function handlersTogglerHigh(event) {\r\n            var positionSlider = getRightPosition(eRangeSlider)-widthSliderBoarder;\r\n            var positionTogglerLow =\r\n                getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler\r\n            var positionTogglerHigh =\r\n                getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler\r\n            var shiftClick = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - positionTogglerHigh;\r\n            var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;\r\n\r\n            return {\r\n                handlerMoveToggler: function (event) {\r\n                    var result = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - shiftClick;\r\n                    var percent;\r\n                    if (result > positionSlider)\r\n                        percent = 0;\r\n                    else {\r\n                        if (result < positionTogglerLow)\r\n                            result = positionTogglerLow;\r\n                        percent = 100 * (positionSlider-result) / widthSlider;\r\n                    }\r\n                    setRightValues(percent);\r\n                },\r\n\r\n                handlerMouseUp: function () {\r\n                    document.removeEventListener(\"mousemove\", eTogglerHigh.handlers.handlerMoveToggler);\r\n                    document.removeEventListener(\"mouseup\", eTogglerHigh.handlers.handlerMouseUp);\r\n                },\r\n\r\n                handlerTouchEnd: function () {\r\n                    event.preventDefault();\r\n                    document.removeEventListener(\"touchmove\", eTogglerHigh.handlers.handlerMoveToggler);\r\n                    document.removeEventListener(\"touchend\", eTogglerHigh.handlers.handlerTouchEnd);\r\n                }\r\n            };\r\n        }\r\n\r\n        function handlerInputEnterPressed(event) {\r\n            if (event.which == 13 || event.keyCode == 13) {\r\n                event.preventDefault();\r\n                this.blur();\r\n            }\r\n        }\r\n\r\n        function handlerClickTextLow() {\r\n            eInputLow.style.width = `${eTextLow.offsetWidth + 16}px`;\r\n            eInputLow.value = eTextLow.innerText.replace(/\\s*/g, \"\");\r\n            eTextLow.style.visibility = \"hidden\";\r\n            eInputLow.style.visibility = \"visible\";\r\n            eInputLow.focus();\r\n            eInputLow.addEventListener(\"keypress\", handlerInputEnterPressed);\r\n        }\r\n\r\n        eTextLow.addEventListener (\"mouseup\", handlerClickTextLow);\r\n        eTextLow.addEventListener (\"touchstart\", handlerClickTextLow);\r\n\r\n        eInputLow.addEventListener(\"blur\",\r\n            function() {\r\n                var textHigh = eTextHigh.innerText.replace(/\\s*/g, \"\");\r\n                var inputLow = +eInputLow.value;\r\n                if (inputLow > +textHigh)\r\n                    eInputLow.value = textHigh;\r\n                if (inputLow < minValue)\r\n                    eInputLow.value = minValue;\r\n                var percent = 100 * (+eInputLow.value-minValue) / (maxValue-minValue);\r\n                setLeftValues(percent, true);\r\n                eTextLow.innerText = eInputLow.value.replace(/(\\d{1,3})(?=(\\d{3})*$)/g,\"$1 \").trim();\r\n                eInputLow.style.visibility = \"hidden\";\r\n                eTextLow.style.visibility = \"visible\";\r\n                eInputLow.removeEventListener(\"keypress\", handlerInputEnterPressed);\r\n            });\r\n\r\n        function handlerClickTextHigh() {\r\n            eInputHigh.style.width = `${eTextHigh.offsetWidth + 16}px`;\r\n            eInputHigh.value = eTextHigh.innerText.replace(/\\s*/g, \"\");\r\n            eTextHigh.style.visibility = \"hidden\";\r\n            eInputHigh.style.visibility = \"visible\";\r\n            eInputHigh.focus();\r\n            eInputHigh.addEventListener(\"keypress\", handlerInputEnterPressed);\r\n        }\r\n\r\n        eTextHigh.addEventListener(\"mouseup\", handlerClickTextHigh);\r\n        eTextHigh.addEventListener(\"touchstart\", handlerClickTextHigh);\r\n\r\n        eInputHigh.addEventListener(\"blur\",\r\n            function() {\r\n                var textLow = +eTextLow.innerText.replace(/\\s*/g, \"\");\r\n                var inputHigh = +eInputHigh.value;\r\n                if (inputHigh < textLow)\r\n                    eInputHigh.value = textLow;\r\n                if (inputHigh > maxValue)\r\n                    eInputHigh.value = maxValue;\r\n                var percent = 100 * (maxValue-(+eInputHigh.value)) / (maxValue-minValue);\r\n                setRightValues(percent, true);\r\n                eTextHigh.innerText = eInputHigh.value.replace(/(\\d{1,3})(?=(\\d{3})*$)/g,\" $1\");\r\n                eInputHigh.style.visibility = \"hidden\";\r\n                eTextHigh.style.visibility = \"visible\";\r\n                eInputHigh.removeEventListener(\"keypress\", handlerInputEnterPressed);\r\n            });\r\n\r\n        function handlerClickAxis(event) {\r\n           if (!event.target.classList.contains(\"range-slider__toggler\")) {\r\n               var positionLeftSlider = getLeftPosition(eRangeSlider)+widthSliderBoarder;\r\n               var positionRightSlider = getRightPosition(eRangeSlider)+widthSliderBoarder;\r\n               var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;\r\n               var positionTogglerLow =\r\n                   getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler\r\n               var positionTogglerHigh =\r\n                   getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler\r\n\r\n\r\n               var pageX=(event.pageX ? event.pageX : event.targetTouches[0].pageX);\r\n\r\n               if(pageX<=(positionTogglerLow+positionTogglerHigh)/2) {\r\n                   var percent = 100 * (pageX - positionLeftSlider) / widthSlider;\r\n                   setLeftValues (percent);\r\n               } else {\r\n                   var percent = 100 * (positionRightSlider - pageX) / widthSlider;\r\n                   setRightValues (percent);\r\n               }\r\n           }\r\n        }\r\n\r\n        eAxis.addEventListener(\"click\", handlerClickAxis);\r\n        eAxis.addEventListener(\"touchstart\", handlerClickAxis);\r\n    }\r\n};\n\n//# sourceURL=webpack://common/./blocks/common/range-slider/range-slider.js?");

/***/ }),

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n// Common JS\r\n\r\nlet menu = __webpack_require__(/*! ./../blocks/common/menu/menu */ \"./blocks/common/menu/menu.js\");\r\nlet rangeSlider = __webpack_require__(/*! ./../blocks/common/range-slider/range-slider */ \"./blocks/common/range-slider/range-slider.js\");\r\n\r\n\r\n\r\n//console.log(\"Common loaded...\");\r\n\r\nexports.menu = menu;\r\nexports.rangeSlider = rangeSlider;\n\n//# sourceURL=webpack://common/./js/common.js?");

/***/ })

/******/ });