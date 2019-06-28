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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/83a9a6f135533c2db0f7c411ec7d025d.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*Copyrights for code authored by Yahoo Inc. is licensed under the following terms:
MIT License
Copyright  2017 Yahoo Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function(window, document, navigator, undefined) {
"use strict";

/*
  utils.js
  ========
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

var utils = {
    URL: window.URL || window.webkitURL || window.mozURL || window.msURL,
    getUserMedia: function () {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        return getUserMedia ? getUserMedia.bind(navigator) : getUserMedia;
    }(),
    requestAnimFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
    requestTimeout: function requestTimeout(callback, delay) {
        callback = callback || utils.noop;
        delay = delay || 0;

        if (!utils.requestAnimFrame) {
            return setTimeout(callback, delay);
        }

        var start = new Date().getTime();
        var handle = new Object();
        var requestAnimFrame = utils.requestAnimFrame;

        var loop = function loop() {
            var current = new Date().getTime();
            var delta = current - start;

            delta >= delay ? callback.call() : handle.value = requestAnimFrame(loop);
        };

        handle.value = requestAnimFrame(loop);

        return handle;
    },
    Blob: window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
    btoa: function () {
        var btoa = window.btoa || function (input) {
            var output = '';
            var i = 0;
            var l = input.length;
            var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var chr1 = void 0;
            var chr2 = void 0;
            var chr3 = void 0;
            var enc1 = void 0;
            var enc2 = void 0;
            var enc3 = void 0;
            var enc4 = void 0;

            while (i < l) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
            }

            return output;
        };

        return btoa ? btoa.bind(window) : utils.noop;
    }(),
    isObject: function isObject(obj) {
        return obj && Object.prototype.toString.call(obj) === '[object Object]';
    },
    isEmptyObject: function isEmptyObject(obj) {
        return utils.isObject(obj) && !Object.keys(obj).length;
    },
    isArray: function isArray(arr) {
        return arr && Array.isArray(arr);
    },
    isFunction: function isFunction(func) {
        return func && typeof func === 'function';
    },
    isElement: function isElement(elem) {
        return elem && elem.nodeType === 1;
    },
    isString: function isString(value) {
        return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
    },
    isSupported: {
        canvas: function canvas() {
            var el = document.createElement('canvas');

            return el && el.getContext && el.getContext('2d');
        },
        webworkers: function webworkers() {
            return window.Worker;
        },
        blob: function blob() {
            return utils.Blob;
        },
        Uint8Array: function Uint8Array() {
            return window.Uint8Array;
        },
        Uint32Array: function Uint32Array() {
            return window.Uint32Array;
        },
        videoCodecs: function () {
            var testEl = document.createElement('video');
            var supportObj = {
                'mp4': false,
                'h264': false,
                'ogv': false,
                'ogg': false,
                'webm': false
            };

            try {
                if (testEl && testEl.canPlayType) {
                    // Check for MPEG-4 support
                    supportObj.mp4 = testEl.canPlayType('video/mp4; codecs="mp4v.20.8"') !== '';

                    // Check for h264 support
                    supportObj.h264 = (testEl.canPlayType('video/mp4; codecs="avc1.42E01E"') || testEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) !== '';

                    // Check for Ogv support
                    supportObj.ogv = testEl.canPlayType('video/ogg; codecs="theora"') !== '';

                    // Check for Ogg support
                    supportObj.ogg = testEl.canPlayType('video/ogg; codecs="theora"') !== '';

                    // Check for Webm support
                    supportObj.webm = testEl.canPlayType('video/webm; codecs="vp8, vorbis"') !== -1;
                }
            } catch (e) {}

            return supportObj;
        }()
    },
    noop: function noop() {},
    each: function each(collection, callback) {
        var x = void 0;
        var len = void 0;

        if (utils.isArray(collection)) {
            x = -1;
            len = collection.length;

            while (++x < len) {
                if (callback(x, collection[x]) === false) {
                    break;
                }
            }
        } else if (utils.isObject(collection)) {
            for (x in collection) {
                if (collection.hasOwnProperty(x)) {
                    if (callback(x, collection[x]) === false) {
                        break;
                    }
                }
            }
        }
    },
    mergeOptions: function mergeOptions(defaultOptions, userOptions) {
        if (!utils.isObject(defaultOptions) || !utils.isObject(userOptions) || !Object.keys) {
            return;
        }

        var newObj = {};

        utils.each(defaultOptions, function (key, val) {
            newObj[key] = defaultOptions[key];
        });

        utils.each(userOptions, function (key, val) {
            var currentUserOption = userOptions[key];

            if (!utils.isObject(currentUserOption)) {
                newObj[key] = currentUserOption;
            } else {
                if (!defaultOptions[key]) {
                    newObj[key] = currentUserOption;
                } else {
                    newObj[key] = utils.mergeOptions(defaultOptions[key], currentUserOption);
                }
            }
        });

        return newObj;
    },
    setCSSAttr: function setCSSAttr(elem, attr, val) {
        if (!utils.isElement(elem)) {
            return;
        }

        if (utils.isString(attr) && utils.isString(val)) {
            elem.style[attr] = val;
        } else if (utils.isObject(attr)) {
            utils.each(attr, function (key, val) {
                elem.style[key] = val;
            });
        }
    },
    removeElement: function removeElement(node) {
        if (!utils.isElement(node)) {
            return;
        }
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    },
    createWebWorker: function createWebWorker(content) {
        if (!utils.isString(content)) {
            return {};
        }

        try {
            var blob = new utils.Blob([content], {
                'type': 'text/javascript'
            });
            var objectUrl = utils.URL.createObjectURL(blob);
            var worker = new Worker(objectUrl);

            return {
                'objectUrl': objectUrl,
                'worker': worker
            };
        } catch (e) {
            return '' + e;
        }
    },
    getExtension: function getExtension(src) {
        return src.substr(src.lastIndexOf('.') + 1, src.length);
    },
    getFontSize: function getFontSize() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!document.body || options.resizeFont === false) {
            return options.fontSize;
        }

        var text = options.text;
        var containerWidth = options.gifWidth;
        var fontSize = parseInt(options.fontSize, 10);
        var minFontSize = parseInt(options.minFontSize, 10);
        var div = document.createElement('div');
        var span = document.createElement('span');

        div.setAttribute('width', containerWidth);
        div.appendChild(span);

        span.innerHTML = text;
        span.style.fontSize = fontSize + 'px';
        span.style.textIndent = '-9999px';
        span.style.visibility = 'hidden';

        document.body.appendChild(span);

        while (span.offsetWidth > containerWidth && fontSize >= minFontSize) {
            span.style.fontSize = --fontSize + 'px';
        }

        document.body.removeChild(span);

        return fontSize + 'px';
    },
    webWorkerError: false
};



var utils$2 = Object.freeze({
	default: utils
});

/*
  error.js
  ========
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
var error = {
    validate: function validate(skipObj) {
        skipObj = utils.isObject(skipObj) ? skipObj : {};

        var errorObj = {};

        utils.each(error.validators, function (indece, currentValidator) {
            var errorCode = currentValidator.errorCode;

            if (!skipObj[errorCode] && !currentValidator.condition) {
                errorObj = currentValidator;
                errorObj.error = true;

                return false;
            }
        });

        delete errorObj.condition;

        return errorObj;
    },
    isValid: function isValid(skipObj) {
        var errorObj = error.validate(skipObj);
        var isValid = errorObj.error !== true ? true : false;

        return isValid;
    },
    validators: [{
        condition: utils.isFunction(utils.getUserMedia),
        errorCode: 'getUserMedia',
        errorMsg: 'The getUserMedia API is not supported in your browser'
    }, {
        condition: utils.isSupported.canvas(),
        errorCode: 'canvas',
        errorMsg: 'Canvas elements are not supported in your browser'
    }, {
        condition: utils.isSupported.webworkers(),
        errorCode: 'webworkers',
        errorMsg: 'The Web Workers API is not supported in your browser'
    }, {
        condition: utils.isFunction(utils.URL),
        errorCode: 'window.URL',
        errorMsg: 'The window.URL API is not supported in your browser'
    }, {
        condition: utils.isSupported.blob(),
        errorCode: 'window.Blob',
        errorMsg: 'The window.Blob File API is not supported in your browser'
    }, {
        condition: utils.isSupported.Uint8Array(),
        errorCode: 'window.Uint8Array',
        errorMsg: 'The window.Uint8Array function constructor is not supported in your browser'
    }, {
        condition: utils.isSupported.Uint32Array(),
        errorCode: 'window.Uint32Array',
        errorMsg: 'The window.Uint32Array function constructor is not supported in your browser'
    }],
    messages: {
        videoCodecs: {
            errorCode: 'videocodec',
            errorMsg: 'The video codec you are trying to use is not supported in your browser'
        }
    }
};



var error$2 = Object.freeze({
	default: error
});

/*
  defaultOptions.js
  =================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Helpers
var noop = function noop() {};

var defaultOptions = {
    sampleInterval: 10,
    numWorkers: 2,
    filter: '',
    gifWidth: 200,
    gifHeight: 200,
    interval: 0.1,
    numFrames: 10,
    frameDuration: 1,
    keepCameraOn: false,
    images: [],
    video: null,
    webcamVideoElement: null,
    cameraStream: null,
    text: '',
    fontWeight: 'normal',
    fontSize: '16px',
    minFontSize: '10px',
    resizeFont: false,
    fontFamily: 'sans-serif',
    fontColor: '#ffffff',
    textAlign: 'center',
    textBaseline: 'bottom',
    textXCoordinate: null,
    textYCoordinate: null,
    progressCallback: noop,
    completeCallback: noop,
    saveRenderingContexts: false,
    savedRenderingContexts: [],
    crossOrigin: 'Anonymous'
};



var defaultOptions$2 = Object.freeze({
	default: defaultOptions
});

/*
  isSupported.js
  ==============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function isSupported() {
  return error.isValid();
}

/*
  isWebCamGIFSupported.js
  =======================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function isWebCamGIFSupported() {
  return error.isValid();
}

/*
  isSupported.js
  ==============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function isSupported$1() {
    var options = {
        getUserMedia: true
    };

    return error.isValid(options);
}

/*
  isExistingVideoGIFSupported.js
  ==============================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function isExistingVideoGIFSupported(codecs) {
    var hasValidCodec = false;

    if (utils.isArray(codecs) && codecs.length) {
        utils.each(codecs, function (indece, currentCodec) {
            if (utils.isSupported.videoCodecs[currentCodec]) {
                hasValidCodec = true;
            }
        });

        if (!hasValidCodec) {
            return false;
        }
    } else if (utils.isString(codecs) && codecs.length) {
        if (!utils.isSupported.videoCodecs[codecs]) {
            return false;
        }
    }

    return error.isValid({
        'getUserMedia': true
    });
}

/*
  NeuQuant.js
  ===========
*/

/*
 * NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See
 * "Kohonen neural networks for optimal colour quantization" in "Network:
 * Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of
 * the algorithm.
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal in
 * this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons who
 * receive copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 */

/*
 * This class handles Neural-Net quantization algorithm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @version 0.1 AS3 implementation
 * @version 0.2 JS->AS3 "translation" by antimatter15
 * @version 0.3 JS clean up + using modern JS idioms by sole - http://soledadpenades.com
 * Also implement fix in color conversion described at http://stackoverflow.com/questions/16371712/neuquant-js-javascript-color-quantization-hidden-bug-in-js-conversion
 */

function NeuQuant() {
  var netsize = 256; // number of colours used

  // four primes near 500 - assume no image has a length so large
  // that it is divisible by all four primes
  var prime1 = 499;
  var prime2 = 491;
  var prime3 = 487;
  var prime4 = 503;

  // minimum size for input image
  var minpicturebytes = 3 * prime4;

  // Network Definitions

  var maxnetpos = netsize - 1;
  var netbiasshift = 4; // bias for colour values
  var ncycles = 100; // no. of learning cycles

  // defs for freq and bias
  var intbiasshift = 16; // bias for fractions
  var intbias = 1 << intbiasshift;
  var gammashift = 10; // gamma = 1024
  var gamma = 1 << gammashift;
  var betashift = 10;
  var beta = intbias >> betashift; // beta = 1/1024
  var betagamma = intbias << gammashift - betashift;

  // defs for decreasing radius factor
  // For 256 colors, radius starts at 32.0 biased by 6 bits
  // and decreases by a factor of 1/30 each cycle
  var initrad = netsize >> 3;
  var radiusbiasshift = 6;
  var radiusbias = 1 << radiusbiasshift;
  var initradius = initrad * radiusbias;
  var radiusdec = 30;

  // defs for decreasing alpha factor
  // Alpha starts at 1.0 biased by 10 bits
  var alphabiasshift = 10;
  var initalpha = 1 << alphabiasshift;
  var alphadec;

  // radbias and alpharadbias used for radpower calculation
  var radbiasshift = 8;
  var radbias = 1 << radbiasshift;
  var alpharadbshift = alphabiasshift + radbiasshift;
  var alpharadbias = 1 << alpharadbshift;

  // Input image
  var thepicture;
  // Height * Width * 3
  var lengthcount;
  // Sampling factor 1..30
  var samplefac;

  // The network itself
  var network;
  var netindex = [];

  // for network lookup - really 256
  var bias = [];

  // bias and freq arrays for learning
  var freq = [];
  var radpower = [];

  function NeuQuantConstructor(thepic, len, sample) {

    var i;
    var p;

    thepicture = thepic;
    lengthcount = len;
    samplefac = sample;

    network = new Array(netsize);

    for (i = 0; i < netsize; i++) {
      network[i] = new Array(4);
      p = network[i];
      p[0] = p[1] = p[2] = (i << netbiasshift + 8) / netsize | 0;
      freq[i] = intbias / netsize | 0; // 1 / netsize
      bias[i] = 0;
    }
  }

  function colorMap() {
    var map = [];
    var index = new Array(netsize);
    for (var i = 0; i < netsize; i++) {
      index[network[i][3]] = i;
    }var k = 0;
    for (var l = 0; l < netsize; l++) {
      var j = index[l];
      map[k++] = network[j][0];
      map[k++] = network[j][1];
      map[k++] = network[j][2];
    }
    return map;
  }

  // Insertion sort of network and building of netindex[0..255]
  // (to do after unbias)
  function inxbuild() {
    var i;
    var j;
    var smallpos;
    var smallval;
    var p;
    var q;
    var previouscol;
    var startpos;

    previouscol = 0;
    startpos = 0;

    for (i = 0; i < netsize; i++) {

      p = network[i];
      smallpos = i;
      smallval = p[1]; // index on g
      // find smallest in i..netsize-1
      for (j = i + 1; j < netsize; j++) {

        q = network[j];

        if (q[1] < smallval) {
          // index on g
          smallpos = j;
          smallval = q[1]; // index on g
        }
      }

      q = network[smallpos];

      // swap p (i) and q (smallpos) entries
      if (i != smallpos) {
        j = q[0];
        q[0] = p[0];
        p[0] = j;
        j = q[1];
        q[1] = p[1];
        p[1] = j;
        j = q[2];
        q[2] = p[2];
        p[2] = j;
        j = q[3];
        q[3] = p[3];
        p[3] = j;
      }

      // smallval entry is now in position i
      if (smallval != previouscol) {

        netindex[previouscol] = startpos + i >> 1;

        for (j = previouscol + 1; j < smallval; j++) {
          netindex[j] = i;
        }

        previouscol = smallval;
        startpos = i;
      }
    }

    netindex[previouscol] = startpos + maxnetpos >> 1;
    for (j = previouscol + 1; j < 256; j++) {
      netindex[j] = maxnetpos; // really 256
    }
  }

  // Main Learning Loop

  function learn() {
    var i;
    var j;
    var b;
    var g;
    var r;
    var radius;
    var rad;
    var alpha;
    var step;
    var delta;
    var samplepixels;
    var p;
    var pix;
    var lim;

    if (lengthcount < minpicturebytes) {
      samplefac = 1;
    }

    alphadec = 30 + (samplefac - 1) / 3;
    p = thepicture;
    pix = 0;
    lim = lengthcount;
    samplepixels = lengthcount / (3 * samplefac);
    delta = samplepixels / ncycles | 0;
    alpha = initalpha;
    radius = initradius;

    rad = radius >> radiusbiasshift;
    if (rad <= 1) {
      rad = 0;
    }

    for (i = 0; i < rad; i++) {
      radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
    }

    if (lengthcount < minpicturebytes) {
      step = 3;
    } else if (lengthcount % prime1 !== 0) {
      step = 3 * prime1;
    } else {

      if (lengthcount % prime2 !== 0) {
        step = 3 * prime2;
      } else {
        if (lengthcount % prime3 !== 0) {
          step = 3 * prime3;
        } else {
          step = 3 * prime4;
        }
      }
    }

    i = 0;

    while (i < samplepixels) {

      b = (p[pix + 0] & 0xff) << netbiasshift;
      g = (p[pix + 1] & 0xff) << netbiasshift;
      r = (p[pix + 2] & 0xff) << netbiasshift;
      j = contest(b, g, r);

      altersingle(alpha, j, b, g, r);

      if (rad !== 0) {
        // Alter neighbours
        alterneigh(rad, j, b, g, r);
      }

      pix += step;

      if (pix >= lim) {
        pix -= lengthcount;
      }

      i++;

      if (delta === 0) {
        delta = 1;
      }

      if (i % delta === 0) {
        alpha -= alpha / alphadec;
        radius -= radius / radiusdec;
        rad = radius >> radiusbiasshift;

        if (rad <= 1) {
          rad = 0;
        }

        for (j = 0; j < rad; j++) {
          radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad));
        }
      }
    }
  }

  // Search for BGR values 0..255 (after net is unbiased) and return colour index
  function map(b, g, r) {
    var i;
    var j;
    var dist;
    var a;
    var bestd;
    var p;
    var best;

    // Biggest possible distance is 256 * 3
    bestd = 1000;
    best = -1;
    i = netindex[g]; // index on g
    j = i - 1; // start at netindex[g] and work outwards

    while (i < netsize || j >= 0) {

      if (i < netsize) {

        p = network[i];

        dist = p[1] - g; // inx key

        if (dist >= bestd) {
          i = netsize; // stop iter
        } else {

          i++;

          if (dist < 0) {
            dist = -dist;
          }

          a = p[0] - b;

          if (a < 0) {
            a = -a;
          }

          dist += a;

          if (dist < bestd) {
            a = p[2] - r;

            if (a < 0) {
              a = -a;
            }

            dist += a;

            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }

      if (j >= 0) {

        p = network[j];

        dist = g - p[1]; // inx key - reverse dif

        if (dist >= bestd) {
          j = -1; // stop iter
        } else {

          j--;
          if (dist < 0) {
            dist = -dist;
          }
          a = p[0] - b;
          if (a < 0) {
            a = -a;
          }
          dist += a;

          if (dist < bestd) {
            a = p[2] - r;
            if (a < 0) {
              a = -a;
            }
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
    }

    return best;
  }

  function process() {
    learn();
    unbiasnet();
    inxbuild();
    return colorMap();
  }

  // Unbias network to give byte values 0..255 and record position i
  // to prepare for sort
  function unbiasnet() {
    var i;
    var j;

    for (i = 0; i < netsize; i++) {
      network[i][0] >>= netbiasshift;
      network[i][1] >>= netbiasshift;
      network[i][2] >>= netbiasshift;
      network[i][3] = i; // record colour no
    }
  }

  // Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2))
  // in radpower[|i-j|]
  function alterneigh(rad, i, b, g, r) {

    var j;
    var k;
    var lo;
    var hi;
    var a;
    var m;

    var p;

    lo = i - rad;
    if (lo < -1) {
      lo = -1;
    }

    hi = i + rad;

    if (hi > netsize) {
      hi = netsize;
    }

    j = i + 1;
    k = i - 1;
    m = 1;

    while (j < hi || k > lo) {

      a = radpower[m++];

      if (j < hi) {

        p = network[j++];

        try {

          p[0] -= a * (p[0] - b) / alpharadbias | 0;
          p[1] -= a * (p[1] - g) / alpharadbias | 0;
          p[2] -= a * (p[2] - r) / alpharadbias | 0;
        } catch (e) {}
      }

      if (k > lo) {

        p = network[k--];

        try {

          p[0] -= a * (p[0] - b) / alpharadbias | 0;
          p[1] -= a * (p[1] - g) / alpharadbias | 0;
          p[2] -= a * (p[2] - r) / alpharadbias | 0;
        } catch (e) {}
      }
    }
  }

  // Move neuron i towards biased (b,g,r) by factor alpha
  function altersingle(alpha, i, b, g, r) {

    // alter hit neuron
    var n = network[i];
    var alphaMult = alpha / initalpha;
    n[0] -= alphaMult * (n[0] - b) | 0;
    n[1] -= alphaMult * (n[1] - g) | 0;
    n[2] -= alphaMult * (n[2] - r) | 0;
  }

  // Search for biased BGR values
  function contest(b, g, r) {

    // finds closest neuron (min dist) and updates freq
    // finds best neuron (min dist-bias) and returns position
    // for frequently chosen neurons, freq[i] is high and bias[i] is negative
    // bias[i] = gamma*((1/netsize)-freq[i])

    var i;
    var dist;
    var a;
    var biasdist;
    var betafreq;
    var bestpos;
    var bestbiaspos;
    var bestd;
    var bestbiasd;
    var n;

    bestd = ~(1 << 31);
    bestbiasd = bestd;
    bestpos = -1;
    bestbiaspos = bestpos;

    for (i = 0; i < netsize; i++) {

      n = network[i];
      dist = n[0] - b;

      if (dist < 0) {
        dist = -dist;
      }

      a = n[1] - g;

      if (a < 0) {
        a = -a;
      }

      dist += a;

      a = n[2] - r;

      if (a < 0) {
        a = -a;
      }

      dist += a;

      if (dist < bestd) {
        bestd = dist;
        bestpos = i;
      }

      biasdist = dist - (bias[i] >> intbiasshift - netbiasshift);

      if (biasdist < bestbiasd) {
        bestbiasd = biasdist;
        bestbiaspos = i;
      }

      betafreq = freq[i] >> betashift;
      freq[i] -= betafreq;
      bias[i] += betafreq << gammashift;
    }

    freq[bestpos] += beta;
    bias[bestpos] -= betagamma;
    return bestbiaspos;
  }

  NeuQuantConstructor.apply(this, arguments);

  var exports = {};
  exports.map = map;
  exports.process = process;

  return exports;
}

/*
  processFrameWorker.js
  =====================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function workerCode() {
    var self = this;

    try {
        self.onmessage = function (ev) {
            var data = ev.data || {};
            var response;

            if (data.gifshot) {
                response = workerMethods.run(data);
                postMessage(response);
            }
        };
    } catch (e) {}

    var workerMethods = {
        dataToRGB: function dataToRGB(data, width, height) {
            var length = width * height * 4;
            var i = 0;
            var rgb = [];

            while (i < length) {
                rgb.push(data[i++]);
                rgb.push(data[i++]);
                rgb.push(data[i++]);
                i++; // for the alpha channel which we don't care about
            }

            return rgb;
        },
        componentizedPaletteToArray: function componentizedPaletteToArray(paletteRGB) {
            paletteRGB = paletteRGB || [];

            var paletteArray = [];

            for (var i = 0; i < paletteRGB.length; i += 3) {
                var r = paletteRGB[i];
                var g = paletteRGB[i + 1];
                var b = paletteRGB[i + 2];

                paletteArray.push(r << 16 | g << 8 | b);
            }

            return paletteArray;
        },
        // This is the "traditional" Animated_GIF style of going from RGBA to indexed color frames
        'processFrameWithQuantizer': function processFrameWithQuantizer(imageData, width, height, sampleInterval) {
            var rgbComponents = this.dataToRGB(imageData, width, height);
            var nq = new NeuQuant(rgbComponents, rgbComponents.length, sampleInterval);
            var paletteRGB = nq.process();
            var paletteArray = new Uint32Array(this.componentizedPaletteToArray(paletteRGB));
            var numberPixels = width * height;
            var indexedPixels = new Uint8Array(numberPixels);
            var k = 0;

            for (var i = 0; i < numberPixels; i++) {
                var r = rgbComponents[k++];
                var g = rgbComponents[k++];
                var b = rgbComponents[k++];

                indexedPixels[i] = nq.map(r, g, b);
            }

            return {
                pixels: indexedPixels,
                palette: paletteArray
            };
        },
        'run': function run(frame) {
            frame = frame || {};

            var _frame = frame,
                height = _frame.height,
                palette = _frame.palette,
                sampleInterval = _frame.sampleInterval,
                width = _frame.width;

            var imageData = frame.data;

            return this.processFrameWithQuantizer(imageData, width, height, sampleInterval);
        }
    };

    return workerMethods;
}

/*
  gifWriter.js
  ============
*/

// (c) Dean McNamee <dean@gmail.com>, 2013.
//
// https://github.com/deanm/omggif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//
// omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
// including animation and compression.  It does not rely on any specific
// underlying system, so should run in the browser, Node, or Plask.

function gifWriter(buf, width, height, gopts) {
  var p = 0;

  gopts = gopts === undefined ? {} : gopts;
  var loop_count = gopts.loop === undefined ? null : gopts.loop;
  var global_palette = gopts.palette === undefined ? null : gopts.palette;

  if (width <= 0 || height <= 0 || width > 65535 || height > 65535) throw "Width/Height invalid.";

  function check_palette_and_num_colors(palette) {
    var num_colors = palette.length;

    if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1) throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
    return num_colors;
  }

  // - Header.
  buf[p++] = 0x47;
  buf[p++] = 0x49;
  buf[p++] = 0x46; // GIF
  buf[p++] = 0x38;
  buf[p++] = 0x39;
  buf[p++] = 0x61; // 89a

  // Handling of Global Color Table (palette) and background index.
  var gp_num_colors_pow2 = 0;
  var background = 0;

  // - Logical Screen Descriptor.
  // NOTE(deanm): w/h apparently ignored by implementations, but set anyway.
  buf[p++] = width & 0xff;
  buf[p++] = width >> 8 & 0xff;
  buf[p++] = height & 0xff;
  buf[p++] = height >> 8 & 0xff;
  // NOTE: Indicates 0-bpp original color resolution (unused?).
  buf[p++] = (global_palette !== null ? 0x80 : 0) | // Global Color Table Flag.
  gp_num_colors_pow2; // NOTE: No sort flag (unused?).
  buf[p++] = background; // Background Color Index.
  buf[p++] = 0; // Pixel aspect ratio (unused?).

  if (loop_count !== null) {
    // Netscape block for looping.
    if (loop_count < 0 || loop_count > 65535) throw "Loop count invalid.";

    // Extension code, label, and length.
    buf[p++] = 0x21;
    buf[p++] = 0xff;
    buf[p++] = 0x0b;
    // NETSCAPE2.0
    buf[p++] = 0x4e;
    buf[p++] = 0x45;
    buf[p++] = 0x54;
    buf[p++] = 0x53;
    buf[p++] = 0x43;
    buf[p++] = 0x41;
    buf[p++] = 0x50;
    buf[p++] = 0x45;
    buf[p++] = 0x32;
    buf[p++] = 0x2e;
    buf[p++] = 0x30;
    // Sub-block
    buf[p++] = 0x03;
    buf[p++] = 0x01;
    buf[p++] = loop_count & 0xff;
    buf[p++] = loop_count >> 8 & 0xff;
    buf[p++] = 0x00; // Terminator.
  }

  var ended = false;

  this.addFrame = function (x, y, w, h, indexed_pixels, opts) {
    if (ended === true) {
      --p;
      ended = false;
    } // Un-end.

    opts = opts === undefined ? {} : opts;

    // TODO(deanm): Bounds check x, y.  Do they need to be within the virtual
    // canvas width/height, I imagine?
    if (x < 0 || y < 0 || x > 65535 || y > 65535) throw "x/y invalid.";

    if (w <= 0 || h <= 0 || w > 65535 || h > 65535) throw "Width/Height invalid.";

    if (indexed_pixels.length < w * h) throw "Not enough pixels for the frame size.";

    var using_local_palette = true;
    var palette = opts.palette;
    if (palette === undefined || palette === null) {
      using_local_palette = false;
      palette = global_palette;
    }

    if (palette === undefined || palette === null) throw "Must supply either a local or global palette.";

    var num_colors = check_palette_and_num_colors(palette);

    // Compute the min_code_size (power of 2), destroying num_colors.
    var min_code_size = 0;
    while (num_colors >>= 1) {
      ++min_code_size;
    }num_colors = 1 << min_code_size; // Now we can easily get it back.

    var delay = opts.delay === undefined ? 0 : opts.delay;

    // From the spec:
    //     0 -   No disposal specified. The decoder is
    //           not required to take any action.
    //     1 -   Do not dispose. The graphic is to be left
    //           in place.
    //     2 -   Restore to background color. The area used by the
    //           graphic must be restored to the background color.
    //     3 -   Restore to previous. The decoder is required to
    //           restore the area overwritten by the graphic with
    //           what was there prior to rendering the graphic.
    //  4-7 -    To be defined.
    // NOTE(deanm): Dispose background doesn't really work, apparently most
    // browsers ignore the background palette index and clear to transparency.
    var disposal = opts.disposal === undefined ? 0 : opts.disposal;
    if (disposal < 0 || disposal > 3) // 4-7 is reserved.
      throw "Disposal out of range.";

    var use_transparency = false;
    var transparent_index = 0;
    if (opts.transparent !== undefined && opts.transparent !== null) {
      use_transparency = true;
      transparent_index = opts.transparent;
      if (transparent_index < 0 || transparent_index >= num_colors) throw "Transparent color index.";
    }

    if (disposal !== 0 || use_transparency || delay !== 0) {
      // - Graphics Control Extension
      buf[p++] = 0x21;
      buf[p++] = 0xf9; // Extension / Label.
      buf[p++] = 4; // Byte size.

      buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
      buf[p++] = delay & 0xff;
      buf[p++] = delay >> 8 & 0xff;
      buf[p++] = transparent_index; // Transparent color index.
      buf[p++] = 0; // Block Terminator.
    }

    // - Image Descriptor
    buf[p++] = 0x2c; // Image Seperator.
    buf[p++] = x & 0xff;
    buf[p++] = x >> 8 & 0xff; // Left.
    buf[p++] = y & 0xff;
    buf[p++] = y >> 8 & 0xff; // Top.
    buf[p++] = w & 0xff;
    buf[p++] = w >> 8 & 0xff;
    buf[p++] = h & 0xff;
    buf[p++] = h >> 8 & 0xff;
    // NOTE: No sort flag (unused?).
    // TODO(deanm): Support interlace.
    buf[p++] = using_local_palette === true ? 0x80 | min_code_size - 1 : 0;

    // - Local Color Table
    if (using_local_palette === true) {
      for (var i = 0, il = palette.length; i < il; ++i) {
        var rgb = palette[i];
        buf[p++] = rgb >> 16 & 0xff;
        buf[p++] = rgb >> 8 & 0xff;
        buf[p++] = rgb & 0xff;
      }
    }

    p = GifWriterOutputLZWCodeStream(buf, p, min_code_size < 2 ? 2 : min_code_size, indexed_pixels);
  };

  this.end = function () {
    if (ended === false) {
      buf[p++] = 0x3b; // Trailer.
      ended = true;
    }
    return p;
  };

  // Main compression routine, palette indexes -> LZW code stream.
  // |index_stream| must have at least one entry.
  function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
    buf[p++] = min_code_size;
    var cur_subblock = p++; // Pointing at the length field.

    var clear_code = 1 << min_code_size;
    var code_mask = clear_code - 1;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;

    var cur_code_size = min_code_size + 1; // Number of bits per code.
    var cur_shift = 0;
    // We have at most 12-bit codes, so we should have to hold a max of 19
    // bits here (and then we would write out).
    var cur = 0;

    function emit_bytes_to_buffer(bit_block_size) {
      while (cur_shift >= bit_block_size) {
        buf[p++] = cur & 0xff;
        cur >>= 8;
        cur_shift -= 8;
        if (p === cur_subblock + 256) {
          // Finished a subblock.
          buf[cur_subblock] = 255;
          cur_subblock = p++;
        }
      }
    }

    function emit_code(c) {
      cur |= c << cur_shift;
      cur_shift += cur_code_size;
      emit_bytes_to_buffer(8);
    }

    // I am not an expert on the topic, and I don't want to write a thesis.
    // However, it is good to outline here the basic algorithm and the few data
    // structures and optimizations here that make this implementation fast.
    // The basic idea behind LZW is to build a table of previously seen runs
    // addressed by a short id (herein called output code).  All data is
    // referenced by a code, which represents one or more values from the
    // original input stream.  All input bytes can be referenced as the same
    // value as an output code.  So if you didn't want any compression, you
    // could more or less just output the original bytes as codes (there are
    // some details to this, but it is the idea).  In order to achieve
    // compression, values greater then the input range (codes can be up to
    // 12-bit while input only 8-bit) represent a sequence of previously seen
    // inputs.  The decompressor is able to build the same mapping while
    // decoding, so there is always a shared common knowledge between the
    // encoding and decoder, which is also important for "timing" aspects like
    // how to handle variable bit width code encoding.
    //
    // One obvious but very important consequence of the table system is there
    // is always a unique id (at most 12-bits) to map the runs.  'A' might be
    // 4, then 'AA' might be 10, 'AAA' 11, 'AAAA' 12, etc.  This relationship
    // can be used for an effecient lookup strategy for the code mapping.  We
    // need to know if a run has been seen before, and be able to map that run
    // to the output code.  Since we start with known unique ids (input bytes),
    // and then from those build more unique ids (table entries), we can
    // continue this chain (almost like a linked list) to always have small
    // integer values that represent the current byte chains in the encoder.
    // This means instead of tracking the input bytes (AAAABCD) to know our
    // current state, we can track the table entry for AAAABC (it is guaranteed
    // to exist by the nature of the algorithm) and the next character D.
    // Therefor the tuple of (table_entry, byte) is guaranteed to also be
    // unique.  This allows us to create a simple lookup key for mapping input
    // sequences to codes (table indices) without having to store or search
    // any of the code sequences.  So if 'AAAA' has a table entry of 12, the
    // tuple of ('AAAA', K) for any input byte K will be unique, and can be our
    // key.  This leads to a integer value at most 20-bits, which can always
    // fit in an SMI value and be used as a fast sparse array / object key.

    // Output code for the current contents of the index buffer.
    var ib_code = index_stream[0] & code_mask; // Load first input index.
    var code_table = {}; // Key'd on our 20-bit "tuple".

    emit_code(clear_code); // Spec says first code should be a clear code.

    // First index already loaded, process the rest of the stream.
    for (var i = 1, il = index_stream.length; i < il; ++i) {
      var k = index_stream[i] & code_mask;
      var cur_key = ib_code << 8 | k; // (prev, k) unique tuple.
      var cur_code = code_table[cur_key]; // buffer + k.

      // Check if we have to create a new code table entry.
      if (cur_code === undefined) {
        // We don't have buffer + k.
        // Emit index buffer (without k).
        // This is an inline version of emit_code, because this is the core
        // writing routine of the compressor (and V8 cannot inline emit_code
        // because it is a closure here in a different context).  Additionally
        // we can call emit_byte_to_buffer less often, because we can have
        // 30-bits (from our 31-bit signed SMI), and we know our codes will only
        // be 12-bits, so can safely have 18-bits there without overflow.
        // emit_code(ib_code);
        cur |= ib_code << cur_shift;
        cur_shift += cur_code_size;
        while (cur_shift >= 8) {
          buf[p++] = cur & 0xff;
          cur >>= 8;
          cur_shift -= 8;
          if (p === cur_subblock + 256) {
            // Finished a subblock.
            buf[cur_subblock] = 255;
            cur_subblock = p++;
          }
        }

        if (next_code === 4096) {
          // Table full, need a clear.
          emit_code(clear_code);
          next_code = eoi_code + 1;
          cur_code_size = min_code_size + 1;
          code_table = {};
        } else {
          // Table not full, insert a new entry.
          // Increase our variable bit code sizes if necessary.  This is a bit
          // tricky as it is based on "timing" between the encoding and
          // decoder.  From the encoders perspective this should happen after
          // we've already emitted the index buffer and are about to create the
          // first table entry that would overflow our current code bit size.
          if (next_code >= 1 << cur_code_size) ++cur_code_size;
          code_table[cur_key] = next_code++; // Insert into code table.
        }

        ib_code = k; // Index buffer to single input k.
      } else {
        ib_code = cur_code; // Index buffer to sequence in code table.
      }
    }

    emit_code(ib_code); // There will still be something in the index buffer.
    emit_code(eoi_code); // End Of Information.

    // Flush / finalize the sub-blocks stream to the buffer.
    emit_bytes_to_buffer(1);

    // Finish the sub-blocks, writing out any unfinished lengths and
    // terminating with a sub-block of length 0.  If we have already started
    // but not yet used a sub-block it can just become the terminator.
    if (cur_subblock + 1 === p) {
      // Started but unused.
      buf[cur_subblock] = 0;
    } else {
      // Started and used, write length and additional terminator block.
      buf[cur_subblock] = p - cur_subblock - 1;
      buf[p++] = 0;
    }
    return p;
  }
}

/*
  animatedGIF.js
  ==============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
// Helpers
var noop$2 = function noop() {};

var AnimatedGIF = function AnimatedGIF(options) {
    this.canvas = null;
    this.ctx = null;
    this.repeat = 0;
    this.frames = [];
    this.numRenderedFrames = 0;
    this.onRenderCompleteCallback = noop$2;
    this.onRenderProgressCallback = noop$2;
    this.workers = [];
    this.availableWorkers = [];
    this.generatingGIF = false;
    this.options = options;

    // Constructs and initializes the the web workers appropriately
    this.initializeWebWorkers(options);
};

AnimatedGIF.prototype = {
    'workerMethods': workerCode(),
    'initializeWebWorkers': function initializeWebWorkers(options) {
        var self = this;
        var processFrameWorkerCode = NeuQuant.toString() + '(' + workerCode.toString() + '());';
        var webWorkerObj = void 0;
        var objectUrl = void 0;
        var webWorker = void 0;
        var numWorkers = void 0;
        var x = -1;
        var workerError = '';

        numWorkers = options.numWorkers;

        while (++x < numWorkers) {
            webWorkerObj = utils.createWebWorker(processFrameWorkerCode);

            if (utils.isObject(webWorkerObj)) {
                objectUrl = webWorkerObj.objectUrl;
                webWorker = webWorkerObj.worker;

                self.workers.push({
                    worker: webWorker,
                    objectUrl: objectUrl
                });

                self.availableWorkers.push(webWorker);
            } else {
                workerError = webWorkerObj;
                utils.webWorkerError = !!webWorkerObj;
            }
        }

        this.workerError = workerError;
        this.canvas = document.createElement('canvas');
        this.canvas.width = options.gifWidth;
        this.canvas.height = options.gifHeight;
        this.ctx = this.canvas.getContext('2d');
        this.frames = [];
    },
    // Return a worker for processing a frame
    getWorker: function getWorker() {
        return this.availableWorkers.pop();
    },
    // Restores a worker to the pool
    freeWorker: function freeWorker(worker) {
        this.availableWorkers.push(worker);
    },
    byteMap: function () {
        var byteMap = [];

        for (var i = 0; i < 256; i++) {
            byteMap[i] = String.fromCharCode(i);
        }

        return byteMap;
    }(),
    bufferToString: function bufferToString(buffer) {
        var numberValues = buffer.length;
        var str = '';
        var x = -1;

        while (++x < numberValues) {
            str += this.byteMap[buffer[x]];
        }

        return str;
    },
    onFrameFinished: function onFrameFinished(progressCallback) {
        // The GIF is not written until we're done with all the frames
        // because they might not be processed in the same order
        var self = this;
        var frames = self.frames;
        var options = self.options;
        var hasExistingImages = !!(options.images || []).length;
        var allDone = frames.every(function (frame) {
            return !frame.beingProcessed && frame.done;
        });

        self.numRenderedFrames++;

        if (hasExistingImages) {
            progressCallback(self.numRenderedFrames / frames.length);
        }

        self.onRenderProgressCallback(self.numRenderedFrames * 0.75 / frames.length);

        if (allDone) {
            if (!self.generatingGIF) {
                self.generateGIF(frames, self.onRenderCompleteCallback);
            }
        } else {
            utils.requestTimeout(function () {
                self.processNextFrame();
            }, 1);
        }
    },
    processFrame: function processFrame(position) {
        var AnimatedGifContext = this;
        var options = this.options;
        var _options = this.options,
            progressCallback = _options.progressCallback,
            sampleInterval = _options.sampleInterval;

        var frames = this.frames;
        var frame = void 0;
        var worker = void 0;
        var done = function done() {
            var ev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var data = ev.data;

            // Delete original data, and free memory
            delete frame.data;

            frame.pixels = Array.prototype.slice.call(data.pixels);
            frame.palette = Array.prototype.slice.call(data.palette);
            frame.done = true;
            frame.beingProcessed = false;

            AnimatedGifContext.freeWorker(worker);

            AnimatedGifContext.onFrameFinished(progressCallback);
        };

        frame = frames[position];

        if (frame.beingProcessed || frame.done) {
            this.onFrameFinished();

            return;
        }

        frame.sampleInterval = sampleInterval;
        frame.beingProcessed = true;
        frame.gifshot = true;

        worker = this.getWorker();

        if (worker) {
            // Process the frame in a web worker
            worker.onmessage = done;
            worker.postMessage(frame);
        } else {
            // Process the frame in the current thread
            done({
                'data': AnimatedGifContext.workerMethods.run(frame)
            });
        }
    },
    startRendering: function startRendering(completeCallback) {
        this.onRenderCompleteCallback = completeCallback;

        for (var i = 0; i < this.options.numWorkers && i < this.frames.length; i++) {
            this.processFrame(i);
        }
    },
    processNextFrame: function processNextFrame() {
        var position = -1;

        for (var i = 0; i < this.frames.length; i++) {
            var frame = this.frames[i];

            if (!frame.done && !frame.beingProcessed) {
                position = i;
                break;
            }
        }

        if (position >= 0) {
            this.processFrame(position);
        }
    },
    // Takes the already processed data in frames and feeds it to a new
    // GifWriter instance in order to get the binary GIF file
    generateGIF: function generateGIF(frames, callback) {
        // TODO: Weird: using a simple JS array instead of a typed array,
        // the files are WAY smaller o_o. Patches/explanations welcome!
        var buffer = []; // new Uint8Array(width * height * frames.length * 5);
        var gifOptions = {
            loop: this.repeat
        };
        var options = this.options;
        var interval = options.interval;

        var frameDuration = options.frameDuration;
        var existingImages = options.images;
        var hasExistingImages = !!existingImages.length;
        var height = options.gifHeight;
        var width = options.gifWidth;
        var gifWriter$$1 = new gifWriter(buffer, width, height, gifOptions);
        var onRenderProgressCallback = this.onRenderProgressCallback;
        var delay = hasExistingImages ? interval * 100 : 0;
        var bufferToString = void 0;
        var gif = void 0;

        this.generatingGIF = true;

        utils.each(frames, function (iterator, frame) {
            var framePalette = frame.palette;

            onRenderProgressCallback(0.75 + 0.25 * frame.position * 1.0 / frames.length);

            for (var i = 0; i < frameDuration; i++) {
                gifWriter$$1.addFrame(0, 0, width, height, frame.pixels, {
                    palette: framePalette,
                    delay: delay
                });
            }
        });

        gifWriter$$1.end();

        onRenderProgressCallback(1.0);

        this.frames = [];

        this.generatingGIF = false;

        if (utils.isFunction(callback)) {
            bufferToString = this.bufferToString(buffer);
            gif = 'data:image/gif;base64,' + utils.btoa(bufferToString);

            callback(gif);
        }
    },
    // From GIF: 0 = loop forever, null = not looping, n > 0 = loop n times and stop
    setRepeat: function setRepeat(r) {
        this.repeat = r;
    },
    addFrame: function addFrame(element, gifshotOptions) {
        gifshotOptions = utils.isObject(gifshotOptions) ? gifshotOptions : {};

        var self = this;
        var ctx = self.ctx;
        var options = self.options;
        var width = options.gifWidth;
        var height = options.gifHeight;
        var fontSize = utils.getFontSize(gifshotOptions);
        var _gifshotOptions = gifshotOptions,
            filter = _gifshotOptions.filter,
            fontColor = _gifshotOptions.fontColor,
            fontFamily = _gifshotOptions.fontFamily,
            fontWeight = _gifshotOptions.fontWeight,
            gifHeight = _gifshotOptions.gifHeight,
            gifWidth = _gifshotOptions.gifWidth,
            text = _gifshotOptions.text,
            textAlign = _gifshotOptions.textAlign,
            textBaseline = _gifshotOptions.textBaseline;

        var textXCoordinate = gifshotOptions.textXCoordinate ? gifshotOptions.textXCoordinate : textAlign === 'left' ? 1 : textAlign === 'right' ? width : width / 2;
        var textYCoordinate = gifshotOptions.textYCoordinate ? gifshotOptions.textYCoordinate : textBaseline === 'top' ? 1 : textBaseline === 'center' ? height / 2 : height;
        var font = fontWeight + ' ' + fontSize + ' ' + fontFamily;
        var imageData = void 0;

        try {
            ctx.filter = filter;

            ctx.drawImage(element, 0, 0, width, height);

            if (text) {
                ctx.font = font;
                ctx.fillStyle = fontColor;
                ctx.textAlign = textAlign;
                ctx.textBaseline = textBaseline;
                ctx.fillText(text, textXCoordinate, textYCoordinate);
            }

            imageData = ctx.getImageData(0, 0, width, height);

            self.addFrameImageData(imageData);
        } catch (e) {
            return '' + e;
        }
    },
    addFrameImageData: function addFrameImageData() {
        var imageData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var frames = this.frames;
        var imageDataArray = imageData.data;

        this.frames.push({
            'data': imageDataArray,
            'width': imageData.width,
            'height': imageData.height,
            'palette': null,
            'dithering': null,
            'done': false,
            'beingProcessed': false,
            'position': frames.length
        });
    },
    onRenderProgress: function onRenderProgress(callback) {
        this.onRenderProgressCallback = callback;
    },
    isRendering: function isRendering() {
        return this.generatingGIF;
    },
    getBase64GIF: function getBase64GIF(completeCallback) {
        var self = this;
        var onRenderComplete = function onRenderComplete(gif) {
            self.destroyWorkers();

            utils.requestTimeout(function () {
                completeCallback(gif);
            }, 0);
        };

        self.startRendering(onRenderComplete);
    },
    destroyWorkers: function destroyWorkers() {
        if (this.workerError) {
            return;
        }

        var workers = this.workers;

        // Explicitly ask web workers to die so they are explicitly GC'ed
        utils.each(workers, function (iterator, workerObj) {
            var worker = workerObj.worker;
            var objectUrl = workerObj.objectUrl;

            worker.terminate();
            utils.URL.revokeObjectURL(objectUrl);
        });
    }
};

/*
  getBase64GIF.js
  ===============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function getBase64GIF(animatedGifInstance, callback) {
    // This is asynchronous, rendered with WebWorkers
    animatedGifInstance.getBase64GIF(function (image) {
        callback({
            error: false,
            errorCode: '',
            errorMsg: '',
            image: image
        });
    });
}

/*
  existingImages.js
  =================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function existingImages() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var self = this;
    var callback = obj.callback,
        images = obj.images,
        options = obj.options;

    var imagesLength = obj.imagesLength;
    var skipObj = {
        'getUserMedia': true,
        'window.URL': true
    };
    var errorObj = error.validate(skipObj);
    var loadedImages = [];
    var loadedImagesLength = 0;
    var tempImage = void 0;
    var ag = void 0;

    if (errorObj.error) {
        return callback(errorObj);
    }

    // change workerPath to point to where Animated_GIF.worker.js is
    ag = new AnimatedGIF(options);

    utils.each(images, function (index, image) {
        var currentImage = image;

        if (image.src) {
            currentImage = currentImage.src;
        }
        if (utils.isElement(currentImage)) {
            if (options.crossOrigin) {
                currentImage.crossOrigin = options.crossOrigin;
            }

            loadedImages[index] = currentImage;
            loadedImagesLength += 1;

            if (loadedImagesLength === imagesLength) {
                addLoadedImagesToGif();
            }
        } else if (utils.isString(currentImage)) {
            tempImage = new Image();

            if (options.crossOrigin) {
                tempImage.crossOrigin = options.crossOrigin;
            }

            (function (tempImage) {
                if (image.text) {
                    tempImage.text = image.text;
                }

                tempImage.onerror = function (e) {
                    var obj = void 0;

                    --imagesLength; // skips over images that error out

                    if (imagesLength === 0) {
                        obj = {};
                        obj.error = 'None of the requested images was capable of being retrieved';

                        return callback(obj);
                    }
                };

                tempImage.onload = function (e) {
                    if (image.text) {
                        loadedImages[index] = {
                            img: tempImage,
                            text: tempImage.text
                        };
                    } else {
                        loadedImages[index] = tempImage;
                    }

                    loadedImagesLength += 1;

                    if (loadedImagesLength === imagesLength) {
                        addLoadedImagesToGif();
                    }

                    utils.removeElement(tempImage);
                };

                tempImage.src = currentImage;
            })(tempImage);

            utils.setCSSAttr(tempImage, {
                position: 'fixed',
                opacity: '0'
            });

            document.body.appendChild(tempImage);
        }
    });

    function addLoadedImagesToGif() {
        utils.each(loadedImages, function (index, loadedImage) {
            if (loadedImage) {
                if (loadedImage.text) {
                    ag.addFrame(loadedImage.img, options, loadedImage.text);
                } else {
                    ag.addFrame(loadedImage, options);
                }
            }
        });

        getBase64GIF(ag, callback);
    }
}

/*
  screenShot.js
  =============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
// Helpers
var noop$3 = function noop() {};

var screenShot = {
    getGIF: function getGIF() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments[1];

        callback = utils.isFunction(callback) ? callback : noop$3;

        var canvas = document.createElement('canvas');
        var context = void 0;
        var existingImages = options.images;
        var hasExistingImages = !!existingImages.length;
        var cameraStream = options.cameraStream,
            crop = options.crop,
            filter = options.filter,
            fontColor = options.fontColor,
            fontFamily = options.fontFamily,
            fontWeight = options.fontWeight,
            keepCameraOn = options.keepCameraOn,
            numWorkers = options.numWorkers,
            progressCallback = options.progressCallback,
            saveRenderingContexts = options.saveRenderingContexts,
            savedRenderingContexts = options.savedRenderingContexts,
            text = options.text,
            textAlign = options.textAlign,
            textBaseline = options.textBaseline,
            videoElement = options.videoElement,
            videoHeight = options.videoHeight,
            videoWidth = options.videoWidth,
            webcamVideoElement = options.webcamVideoElement;

        var gifWidth = Number(options.gifWidth);
        var gifHeight = Number(options.gifHeight);
        var interval = Number(options.interval);
        var sampleInterval = Number(options.sampleInterval);
        var waitBetweenFrames = hasExistingImages ? 0 : interval * 1000;
        var renderingContextsToSave = [];
        var numFrames = savedRenderingContexts.length ? savedRenderingContexts.length : options.numFrames;
        var pendingFrames = numFrames;
        var ag = new AnimatedGIF(options);
        var fontSize = utils.getFontSize(options);
        var textXCoordinate = options.textXCoordinate ? options.textXCoordinate : textAlign === 'left' ? 1 : textAlign === 'right' ? gifWidth : gifWidth / 2;
        var textYCoordinate = options.textYCoordinate ? options.textYCoordinate : textBaseline === 'top' ? 1 : textBaseline === 'center' ? gifHeight / 2 : gifHeight;
        var font = fontWeight + ' ' + fontSize + ' ' + fontFamily;
        var sourceX = crop ? Math.floor(crop.scaledWidth / 2) : 0;
        var sourceWidth = crop ? videoWidth - crop.scaledWidth : 0;
        var sourceY = crop ? Math.floor(crop.scaledHeight / 2) : 0;
        var sourceHeight = crop ? videoHeight - crop.scaledHeight : 0;
        var captureFrames = function captureSingleFrame() {
            var framesLeft = pendingFrames - 1;

            if (savedRenderingContexts.length) {
                context.putImageData(savedRenderingContexts[numFrames - pendingFrames], 0, 0);

                finishCapture();
            } else {
                drawVideo();
            }

            function drawVideo() {
                try {
                    // Makes sure the canvas video heights/widths are in bounds
                    if (sourceWidth > videoWidth) {
                        sourceWidth = videoWidth;
                    }

                    if (sourceHeight > videoHeight) {
                        sourceHeight = videoHeight;
                    }

                    if (sourceX < 0) {
                        sourceX = 0;
                    }

                    if (sourceY < 0) {
                        sourceY = 0;
                    }

                    context.filter = filter;

                    context.drawImage(videoElement, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, gifWidth, gifHeight);

                    finishCapture();
                } catch (e) {
                    // There is a Firefox bug that sometimes throws NS_ERROR_NOT_AVAILABLE and
                    // and IndexSizeError errors when drawing a video element to the canvas
                    if (e.name === 'NS_ERROR_NOT_AVAILABLE') {
                        // Wait 100ms before trying again
                        utils.requestTimeout(drawVideo, 100);
                    } else {
                        throw e;
                    }
                }
            }

            function finishCapture() {
                var imageData = void 0;

                if (saveRenderingContexts) {
                    renderingContextsToSave.push(context.getImageData(0, 0, gifWidth, gifHeight));
                }

                // If there is text to display, make sure to display it on the canvas after the image is drawn
                if (text) {
                    context.font = font;
                    context.fillStyle = fontColor;
                    context.textAlign = textAlign;
                    context.textBaseline = textBaseline;
                    context.fillText(text, textXCoordinate, textYCoordinate);
                }

                imageData = context.getImageData(0, 0, gifWidth, gifHeight);

                ag.addFrameImageData(imageData);

                pendingFrames = framesLeft;

                // Call back with an r value indicating how far along we are in capture
                progressCallback((numFrames - pendingFrames) / numFrames);

                if (framesLeft > 0) {
                    // test
                    utils.requestTimeout(captureSingleFrame, waitBetweenFrames);
                }

                if (!pendingFrames) {
                    ag.getBase64GIF(function (image) {
                        callback({
                            'error': false,
                            'errorCode': '',
                            'errorMsg': '',
                            'image': image,
                            'cameraStream': cameraStream,
                            'videoElement': videoElement,
                            'webcamVideoElement': webcamVideoElement,
                            'savedRenderingContexts': renderingContextsToSave,
                            'keepCameraOn': keepCameraOn
                        });
                    });
                }
            }
        };

        numFrames = numFrames !== undefined ? numFrames : 10;
        interval = interval !== undefined ? interval : 0.1; // In seconds

        canvas.width = gifWidth;
        canvas.height = gifHeight;
        context = canvas.getContext('2d');

        (function capture() {
            if (!savedRenderingContexts.length && videoElement.currentTime === 0) {
                utils.requestTimeout(capture, 100);

                return;
            }

            captureFrames();
        })();
    },
    getCropDimensions: function getCropDimensions() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var width = obj.videoWidth;
        var height = obj.videoHeight;
        var gifWidth = obj.gifWidth;
        var gifHeight = obj.gifHeight;
        var result = {
            width: 0,
            height: 0,
            scaledWidth: 0,
            scaledHeight: 0
        };

        if (width > height) {
            result.width = Math.round(width * (gifHeight / height)) - gifWidth;
            result.scaledWidth = Math.round(result.width * (height / gifHeight));
        } else {
            result.height = Math.round(height * (gifWidth / width)) - gifHeight;
            result.scaledHeight = Math.round(result.height * (width / gifWidth));
        }

        return result;
    }
};

/*
  videoStream.js
  ==============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
var videoStream = {
    loadedData: false,
    defaultVideoDimensions: {
        width: 640,
        height: 480
    },
    findVideoSize: function findVideoSizeMethod(obj) {
        findVideoSizeMethod.attempts = findVideoSizeMethod.attempts || 0;

        var cameraStream = obj.cameraStream,
            completedCallback = obj.completedCallback,
            videoElement = obj.videoElement;


        if (!videoElement) {
            return;
        }

        if (videoElement.videoWidth > 0 && videoElement.videoHeight > 0) {
            videoElement.removeEventListener('loadeddata', videoStream.findVideoSize);

            completedCallback({
                videoElement: videoElement,
                cameraStream: cameraStream,
                videoWidth: videoElement.videoWidth,
                videoHeight: videoElement.videoHeight
            });
        } else {
            if (findVideoSizeMethod.attempts < 10) {
                findVideoSizeMethod.attempts += 1;

                utils.requestTimeout(function () {
                    videoStream.findVideoSize(obj);
                }, 400);
            } else {
                completedCallback({
                    videoElement: videoElement,
                    cameraStream: cameraStream,
                    videoWidth: videoStream.defaultVideoDimensions.width,
                    videoHeight: videoStream.defaultVideoDimensions.height
                });
            }
        }
    },
    onStreamingTimeout: function onStreamingTimeout(callback) {
        if (utils.isFunction(callback)) {
            callback({
                error: true,
                errorCode: 'getUserMedia',
                errorMsg: 'There was an issue with the getUserMedia API - Timed out while trying to start streaming',
                image: null,
                cameraStream: {}
            });
        }
    },
    stream: function stream(obj) {
        var existingVideo = utils.isArray(obj.existingVideo) ? obj.existingVideo[0] : obj.existingVideo;
        var cameraStream = obj.cameraStream,
            completedCallback = obj.completedCallback,
            streamedCallback = obj.streamedCallback,
            videoElement = obj.videoElement;


        if (utils.isFunction(streamedCallback)) {
            streamedCallback();
        }

        if (existingVideo) {
            if (utils.isString(existingVideo)) {
                videoElement.src = existingVideo;
                videoElement.innerHTML = '<source src="' + existingVideo + '" type="video/' + utils.getExtension(existingVideo) + '" />';
            } else if (existingVideo instanceof Blob) {
                try {
                    videoElement.src = utils.URL.createObjectURL(existingVideo);
                } catch (e) {}

                videoElement.innerHTML = '<source src="' + existingVideo + '" type="' + existingVideo.type + '" />';
            }
        } else if (videoElement.mozSrcObject) {
            videoElement.mozSrcObject = cameraStream;
        } else if (utils.URL) {
            try {
                videoElement.srcObject = cameraStream;
                videoElement.src = utils.URL.createObjectURL(cameraStream);
            } catch (e) {
                videoElement.srcObject = cameraStream;
            }
        }

        videoElement.play();

        utils.requestTimeout(function checkLoadedData() {
            checkLoadedData.count = checkLoadedData.count || 0;

            if (videoStream.loadedData === true) {
                videoStream.findVideoSize({
                    videoElement: videoElement,
                    cameraStream: cameraStream,
                    completedCallback: completedCallback
                });

                videoStream.loadedData = false;
            } else {
                checkLoadedData.count += 1;

                if (checkLoadedData.count > 10) {
                    videoStream.findVideoSize({
                        videoElement: videoElement,
                        cameraStream: cameraStream,
                        completedCallback: completedCallback
                    });
                } else {
                    checkLoadedData();
                }
            }
        }, 0);
    },
    startStreaming: function startStreaming(obj) {
        var errorCallback = utils.isFunction(obj.error) ? obj.error : utils.noop;
        var streamedCallback = utils.isFunction(obj.streamed) ? obj.streamed : utils.noop;
        var completedCallback = utils.isFunction(obj.completed) ? obj.completed : utils.noop;
        var crossOrigin = obj.crossOrigin,
            existingVideo = obj.existingVideo,
            lastCameraStream = obj.lastCameraStream,
            options = obj.options,
            webcamVideoElement = obj.webcamVideoElement;

        var videoElement = utils.isElement(existingVideo) ? existingVideo : webcamVideoElement ? webcamVideoElement : document.createElement('video');
        var cameraStream = void 0;

        if (crossOrigin) {
            videoElement.crossOrigin = options.crossOrigin;
        }

        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.addEventListener('loadeddata', function (event) {
            videoStream.loadedData = true;
            if (options.offset) {
                videoElement.currentTime = options.offset;
            }
        });

        if (existingVideo) {
            videoStream.stream({
                videoElement: videoElement,
                existingVideo: existingVideo,
                completedCallback: completedCallback
            });
        } else if (lastCameraStream) {
            videoStream.stream({
                videoElement: videoElement,
                cameraStream: lastCameraStream,
                streamedCallback: streamedCallback,
                completedCallback: completedCallback
            });
        } else {
            utils.getUserMedia({
                video: true
            }, function (stream) {
                videoStream.stream({
                    videoElement: videoElement,
                    cameraStream: stream,
                    streamedCallback: streamedCallback,
                    completedCallback: completedCallback
                });
            }, errorCallback);
        }
    },
    startVideoStreaming: function startVideoStreaming(callback) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var timeoutLength = options.timeout !== undefined ? options.timeout : 0;
        var originalCallback = options.callback;
        var webcamVideoElement = options.webcamVideoElement;
        var noGetUserMediaSupportTimeout = void 0;

        // Some browsers apparently have support for video streaming because of the
        // presence of the getUserMedia function, but then do not answer our
        // calls for streaming.
        // So we'll set up this timeout and if nothing happens after a while, we'll
        // conclude that there's no actual getUserMedia support.
        if (timeoutLength > 0) {
            noGetUserMediaSupportTimeout = utils.requestTimeout(function () {
                videoStream.onStreamingTimeout(originalCallback);
            }, 10000);
        }

        videoStream.startStreaming({
            error: function error() {
                originalCallback({
                    error: true,
                    errorCode: 'getUserMedia',
                    errorMsg: 'There was an issue with the getUserMedia API - the user probably denied permission',
                    image: null,
                    cameraStream: {}
                });
            },
            streamed: function streamed() {
                // The streaming started somehow, so we can assume there is getUserMedia support
                clearTimeout(noGetUserMediaSupportTimeout);
            },
            completed: function completed() {
                var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var cameraStream = obj.cameraStream,
                    videoElement = obj.videoElement,
                    videoHeight = obj.videoHeight,
                    videoWidth = obj.videoWidth;


                callback({
                    cameraStream: cameraStream,
                    videoElement: videoElement,
                    videoHeight: videoHeight,
                    videoWidth: videoWidth
                });
            },
            lastCameraStream: options.lastCameraStream,
            webcamVideoElement: webcamVideoElement,
            crossOrigin: options.crossOrigin,
            options: options
        });
    },
    stopVideoStreaming: function stopVideoStreaming(obj) {
        obj = utils.isObject(obj) ? obj : {};

        var _obj = obj,
            keepCameraOn = _obj.keepCameraOn,
            videoElement = _obj.videoElement,
            webcamVideoElement = _obj.webcamVideoElement;

        var cameraStream = obj.cameraStream || {};
        var cameraStreamTracks = cameraStream.getTracks ? cameraStream.getTracks() || [] : [];
        var hasCameraStreamTracks = !!cameraStreamTracks.length;
        var firstCameraStreamTrack = cameraStreamTracks[0];

        if (!keepCameraOn && hasCameraStreamTracks) {
            if (utils.isFunction(firstCameraStreamTrack.stop)) {
                // Stops the camera stream
                firstCameraStreamTrack.stop();
            }
        }

        if (utils.isElement(videoElement) && !webcamVideoElement) {
            // Pauses the video, revokes the object URL (freeing up memory), and remove the video element
            videoElement.pause();

            // Destroys the object url
            if (utils.isFunction(utils.URL.revokeObjectURL) && !utils.webWorkerError) {
                if (videoElement.src) {
                    utils.URL.revokeObjectURL(videoElement.src);
                }
            }

            // Removes the video element from the DOM
            utils.removeElement(videoElement);
        }
    }
};

/*
  stopVideoStreaming.js
  =====================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function stopVideoStreaming(options) {
  options = utils.isObject(options) ? options : {};

  videoStream.stopVideoStreaming(options);
}

/*
  createAndGetGIF.js
  ==================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function createAndGetGIF(obj, callback) {
    var options = obj.options || {};

    var images = options.images,
        video = options.video;

    var gifWidth = Number(options.gifWidth);
    var gifHeight = Number(options.gifHeight);
    var numFrames = Number(options.numFrames);
    var cameraStream = obj.cameraStream,
        videoElement = obj.videoElement,
        videoWidth = obj.videoWidth,
        videoHeight = obj.videoHeight;

    var cropDimensions = screenShot.getCropDimensions({
        videoWidth: videoWidth,
        videoHeight: videoHeight,
        gifHeight: gifHeight,
        gifWidth: gifWidth
    });
    var completeCallback = callback;

    options.crop = cropDimensions;
    options.videoElement = videoElement;
    options.videoWidth = videoWidth;
    options.videoHeight = videoHeight;
    options.cameraStream = cameraStream;

    if (!utils.isElement(videoElement)) {
        return;
    }

    videoElement.width = gifWidth + cropDimensions.width;
    videoElement.height = gifHeight + cropDimensions.height;

    if (!options.webcamVideoElement) {
        utils.setCSSAttr(videoElement, {
            position: 'fixed',
            opacity: '0'
        });

        document.body.appendChild(videoElement);
    }

    // Firefox doesn't seem to obey autoplay if the element is not in the DOM when the content
    // is loaded, so we must manually trigger play after adding it, or the video will be frozen
    videoElement.play();

    screenShot.getGIF(options, function (obj) {
        if ((!images || !images.length) && (!video || !video.length)) {
            stopVideoStreaming(obj);
        }

        completeCallback(obj);
    });
}

/*
  existingVideo.js
  ================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function existingVideo() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = obj.callback,
        existingVideo = obj.existingVideo,
        options = obj.options;

    var skipObj = {
        getUserMedia: true,
        'window.URL': true
    };
    var errorObj = error.validate(skipObj);
    var loadedImages = 0;
    var videoType = void 0;
    var videoSrc = void 0;
    var tempImage = void 0;
    var ag = void 0;

    if (errorObj.error) {
        return callback(errorObj);
    }

    if (utils.isElement(existingVideo) && existingVideo.src) {
        videoSrc = existingVideo.src;
        videoType = utils.getExtension(videoSrc);

        if (!utils.isSupported.videoCodecs[videoType]) {
            return callback(error.messages.videoCodecs);
        }
    } else if (utils.isArray(existingVideo)) {
        utils.each(existingVideo, function (iterator, videoSrc) {
            if (videoSrc instanceof Blob) {
                videoType = videoSrc.type.substr(videoSrc.type.lastIndexOf('/') + 1, videoSrc.length);
            } else {
                videoType = videoSrc.substr(videoSrc.lastIndexOf('.') + 1, videoSrc.length);
            }

            if (utils.isSupported.videoCodecs[videoType]) {
                existingVideo = videoSrc;

                return false;
            }
        });
    }

    videoStream.startStreaming({
        completed: function completed(obj) {
            obj.options = options || {};

            createAndGetGIF(obj, callback);
        },
        existingVideo: existingVideo,
        crossOrigin: options.crossOrigin,
        options: options
    });
}

/*
  existingWebcam.js
  =================
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function existingWebcam() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = obj.callback,
        lastCameraStream = obj.lastCameraStream,
        options = obj.options,
        webcamVideoElement = obj.webcamVideoElement;


    if (!isWebCamGIFSupported()) {
        return callback(error.validate());
    }

    if (options.savedRenderingContexts.length) {
        screenShot.getGIF(options, function (obj) {
            callback(obj);
        });

        return;
    }

    videoStream.startVideoStreaming(function () {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        obj.options = options || {};

        createAndGetGIF(obj, callback);
    }, {
        lastCameraStream: lastCameraStream,
        callback: callback,
        webcamVideoElement: webcamVideoElement,
        crossOrigin: options.crossOrigin
    });
}

/*
  createGIF.js
  ============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
function createGIF(userOptions, callback) {
  callback = utils.isFunction(userOptions) ? userOptions : callback;
  userOptions = utils.isObject(userOptions) ? userOptions : {};

  if (!utils.isFunction(callback)) {
    return;
  }

  var options = utils.mergeOptions(defaultOptions, userOptions) || {};
  var lastCameraStream = userOptions.cameraStream;
  var images = options.images;
  var imagesLength = images ? images.length : 0;
  var video = options.video;
  var webcamVideoElement = options.webcamVideoElement;

  options = utils.mergeOptions(options, {
    'gifWidth': Math.floor(options.gifWidth),
    'gifHeight': Math.floor(options.gifHeight)
  });

  // If the user would like to create a GIF from an existing image(s)
  if (imagesLength) {
    existingImages({
      'images': images,
      'imagesLength': imagesLength,
      'callback': callback,
      'options': options
    });
  } else if (video) {
    // If the user would like to create a GIF from an existing HTML5 video
    existingVideo({
      'existingVideo': video,
      callback: callback,
      options: options
    });
  } else {
    // If the user would like to create a GIF from a webcam stream
    existingWebcam({
      lastCameraStream: lastCameraStream,
      callback: callback,
      webcamVideoElement: webcamVideoElement,
      options: options
    });
  }
}

/*
  takeSnapShot.js
  ===============
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

function takeSnapShot(userOptions, callback) {
    callback = utils.isFunction(userOptions) ? userOptions : callback;
    userOptions = utils.isObject(userOptions) ? userOptions : {};

    if (!utils.isFunction(callback)) {
        return;
    }

    var mergedOptions = utils.mergeOptions(defaultOptions, userOptions);
    var options = utils.mergeOptions(mergedOptions, {
        'interval': .1,
        'numFrames': 1,
        'gifWidth': Math.floor(mergedOptions.gifWidth),
        'gifHeight': Math.floor(mergedOptions.gifHeight)
    });

    createGIF(options, callback);
}

/*
  API.js
  ======
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
*/

// Dependencies
var API = {
  'utils': utils$2,
  'error': error$2,
  'defaultOptions': defaultOptions$2,
  'createGIF': createGIF,
  'takeSnapShot': takeSnapShot,
  'stopVideoStreaming': stopVideoStreaming,
  'isSupported': isSupported,
  'isWebCamGIFSupported': isWebCamGIFSupported,
  'isExistingVideoGIFSupported': isExistingVideoGIFSupported,
  'isExistingImagesGIFSupported': isSupported$1,
  'VERSION': '0.4.5'
};

/*
  index.js
  ========
*/

/* Copyright  2017 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

// Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, and plain browser loading
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return API;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}
}(typeof window !== "undefined" ? window : {}, typeof document !== "undefined" ? document : { createElement: function() {} }, typeof window !== "undefined" ? window.navigator : {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(39)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
exports.i(__webpack_require__(8), "");
exports.i(__webpack_require__(11), "");
exports.i(__webpack_require__(19), "");
exports.i(__webpack_require__(20), "");
exports.i(__webpack_require__(21), "");
exports.i(__webpack_require__(22), "");
exports.i(__webpack_require__(23), "");
exports.i(__webpack_require__(24), "");
exports.i(__webpack_require__(25), "");
exports.i(__webpack_require__(26), "");
exports.i(__webpack_require__(27), "");
exports.i(__webpack_require__(28), "");
exports.i(__webpack_require__(29), "");
exports.i(__webpack_require__(30), "");
exports.i(__webpack_require__(31), "");
exports.i(__webpack_require__(32), "");
exports.i(__webpack_require__(33), "");
exports.i(__webpack_require__(34), "");
exports.i(__webpack_require__(35), "");
exports.i(__webpack_require__(36), "");
exports.i(__webpack_require__(37), "");
exports.i(__webpack_require__(38), "");

// Module
exports.push([module.i, ".content-wrapper {\n    display: flex;\n    justify-content: space-between;\n    background-color: #1d1d1d;\n    overflow: hidden;\n    height: 100vh;\n    max-height: 100vh;\n}\n.column {\n    position: relative;\n    width: 8%;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    margin-top: 30px;\n}\n.column_fixed_right {\n    position: fixed;\n    top: 450px;\n    right: 0;\n    height: 200px;\n    width: 50px;\n    margin-top: 0;\n}\n.column_frame {\n    margin-top: 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n.column__row {\n    height: 115px;\n    width: 100%;\n}\n.instruments-container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 113px;\n}\n::-webkit-scrollbar {\n    height: 10px;\n    width: 8px;\n    background: transparent;\n}\n \n::-webkit-scrollbar-thumb {\n    background: #616161;\n    -webkit-border-radius: 1ex;\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\n}\n \n::-webkit-scrollbar-corner {\n    background: #fff;\n}\n", ""]);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(9));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10));

// Module
exports.push([module.i, "@font-face {\n    font-family: 'icomoon';\n    src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL___1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n", ""]);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAAiAAA0AAAAAEwgAAAgrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCXhEICpkwkjALMAABNgIkAz4EIAWDGweBbxtxDsiOlC6+gGTff1O/PoPSHWE0moms+EkGDkiWbE6iIAsCbDsAOErY2mVzwN5aBYD98IvBXiBUDf3/372fOnPOv9taFSyNFnABZ+a9frfWdjytggSodk230oFDAQ0GNKoRC8fEnOasKK2LrLLiED6Hvz3nC4AG8FG6yDQLfnd01VlC5bCAarE5EAgaCiIlwNPf6DsQl9FUWgFggrmCv8GDI1jkRw7Mi4B+7qT+DHdTP/x5UIF+UcxPcRBcgblIA1cB9c/GYAIHDgT/z52Z/w0AEws6Mz/NEtV7WB44MY6UAOKLuJKsX/zNECDAS0OgTNiBOuhQUmoj+ByF74JQROpp4CCCP1IOZaEtBXR+cW3ZsmDOyAUjPWM8paW8l0JQRKf4Urb4GCaanAWyHAxqkhgj780TCUYMLFYfi8YTI6KIJWhlsabCU2YYMFrdrStyiXS6dqgtpMWSTsaQuqC33+WU91R3FrV1aW2PC9vO2+I2PCLZrre3U+HgZBuMVsSmATuxHg0Mqfc3Qgcl27SI1SE/30FVWw0YHTA6Y+KmBq1AT5a4Vd9XQxnJFTtMnF2iuzGwtKDr0m64qLbM1NIXnVslU9B8Xmub0JXVddZLEV/gSVH7hQz2t5E+3B2jIK1otGNNJs3sUgg6lpKnCsjO3D5fsp0WNH9Y/fDdwdfeq3n0kZL6pO7JB8Ouv1/7+GMWawZmef6EJenOu6z5fmbMyyu39it6Zbue4E1hXCu59EhJPSm7ciNTE7XWVnfU6Gg3VhI15X/GBSV1zt3aiQXNr+WnHxbHocTbrxRdeKCkPiq59BGM0wM7LqrDr9zwnvohJT8e8fxjRsYPPJ3XSka2Xc7qOkvJT8qufKKk7hWcu+SOKhS9/Ljw/Bus+cP6px+CtxNHtpWCYlHEmHWBJUEMDGXWEmKMkYKVlua02tIBWCnZrotZPIflKV7WnHeMVr+uTKVqxTh3MopZXuR2z2t11xe0L5nL4goURpu+aAOLxoMbwE7xpXbYaGVf70swHkYoYr0eUbKNWZpbsJIdKUNs+DNUIF4LCJq4IKpwCq+4TmQcWxlva8ujEWUJwq9NcKfI9nbiY1KfKE6IogQrjsiflMIWc/HJPq5sE6VjMmBZB3kGpTGaWBlvbIiWJkoakkmKJzbiYXmbFlKouCyPxkl0cylrNu5WTuWxKLGJjdqix25EffFJeSK2EZUo5clGa9uLxV0zLw4eXGpEjKV/mRI6NOz96Zzi0LBQKmRklvyXGZjQfVT+iZe/wJtEqT4Ubhs1+42Gxl8f+1/+vLlzyoaystqWueOvNjbqr9za2tPjN2vmSM/NQ6+80nY3PXXnrn9GIp6J8HScvmruSksNs9PBUWPIKQjMpwr5sKbwZ0GxSmJtVdW3J4x/e8Vv+yoKSjSVN/EeQa125a8Jh9vnNLw2c9ZNSZN/tGnzX7ce+kfTtqfjwwsK3cNF0StJQ6oW9u/Ykd0evRIbt69y0Sp5SK9gM5nJbM6TpDpVqOG1iEvNkqRBhfqiiooTs0Yfqj9+/IOaEpJNwwsL1xa45obzJrq0iInBZLIKNUf1Dwr6TmRLXrh59qg3og3/2fHfAVUTAmV2pyQPrnXvi63w3ks/+uDVwyavYPrulF3enq4WO1X8E1Hxv4F7BZvZNICZ8nXJzPOSUBhyqcPMZqemj9SLpuWH9/x8zdpzpcXFFmt+YeHiSleRi9d5fZzJTLLJJiJzsHSqJgiTXa7JgjBVKxW/YH/0fqDjpLBmjXCyI3D/06/++hfB6RT+8tevPn30WyHHoZYKIpO8w8nxgdf7gYOGeyUmCqWqIwf7dbYp3iQzJjfFN7HJd4DMC69n9eoUJk/u7Z0w4c2fSlJCLR6X3dmZPa5YO57ccvC33cF/PbxwL7uiaGFu7sKiCvRm37vw8F/B7t8e3JI8rhVrmI5pn7JYTUjST9+cMKG3d/JkpFav9ngrFhaxTdHCpX709vcCvr79XZb4Ir4lRmZJxIj0LM1w+9Ief2TZhW93+/PT5DAc2XuuOb5lx5btGmmIh8vLJ4rm0aKel7tF7BG35Obpl/rEe89xWESiOyCnQ+FayeOT5o8N3ZX/KN8NjZ2Pq9eGQ2n5E1/A3hfpX7piftnMgGUX/XjRN3PjYszMkQf98Jv6Fy9gx/t8RsTY9G0zbxMcS+UTcr9VzTD+4Lt5U251fBVk+jJ70IseBt/VcF/r7h5zV5LujiGb8JSqKWHRt2p1SJ4czE3LcnpMeLIcmsqP5NdnHhMvhnkLN/qcb17qetMpD3K754czGzdmnJs162X52xt93/62r6ho48Z1/7hHfX1P/Db8eywC2kXwk04il6d84sS87wYdDuejEIcj+N28yHKPi2jHtMLYE37oqHHWFUvs9X8zKRw+MusZ9PdxRD+iFhM4B/ExNwbARTIJB6SSkwn2l6F+Hi+Ui2AChwJ+RNASQeTTe1zodBwyMuDQaMN1hStAxY4z5aCY8hChAsyNFKFglyFNoKWfIQvvO7iSYKY22VAOBlIeAlSAiZEiNCw1JANHrs4QxmmsRgM2Yv2aBxM2AKsbNn4BfjQwG01Yie1Yh2XYAvzB6lGg3eKj9HE0YQu2YvVyP4IYigDwo+wpBocG3HC8XLwNfqxEEzbEYixDfRMaUb8cu7c4yQ2mNQwFfn9e951dw6SGjf/q5WUAHBafVgeIA0c8eBJIJIlkMpGZGClkISvZyE4OctIAcpFKbmnlut2bVgXl7RtWBwKBfeC4ykAAglAOIQhDBVRCFVRDDYyC0TAGxsI4y3jHYMAMAg=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAArMAA0AAAAAEwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAKsAAAABoAAAAcdiiWRUdERUYAAAqUAAAAHAAAAB4AJwAdT1MvMgAAAZgAAAA9AAAAYAgj/L1jbWFwAAAB/AAAAFUAAAFeGlfT8Wdhc3AAAAqMAAAACAAAAAgAAAAQZ2x5ZgAAAoQAAAa2AAAMsLETxM5oZWFkAAABMAAAAC0AAAA2AaKv+WhoZWEAAAFgAAAAHgAAACQD4gIpaG10eAAAAdgAAAAjAAAAPghJAMdsb2NhAAACVAAAADAAAAAwJGwoRm1heHAAAAGAAAAAGAAAACAAHwGJbmFtZQAACTwAAADcAAABm/pYTdhwb3N0AAAKGAAAAHIAAADvOSGrgnjaY2BkAINAVwW7eH6brwzcTGD+BSfzeTD6////95kYGR8CuRwMYGkAFXoLOwAAAHjaY2BkYGB88P8BAwOTw///QJKRASiCAjgAiGIFDgAAeNpjYGRgYBBnbGdgZwABJgY0AAAQuACqeNpjYGb8yjiBgZWBgdGHMY2BgcEdSn9lkGRoYUAFjAJoAgwODIzPBBkf/AdCxgcMCiA1SLIKDIwANRsL3AAAAHjaY2CAglUQihGImUDYgcGdiQEJKDA4IPEcQLz//wFE1AQXAHjaY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArPBP///f8frErhGQOE/f+JFCtYBxcDDDCCzGNkA2JmqAATkGBiQAVAO1gYhjcAADPxDS0AAAAAAAAAAAgACAAQABgAPAJ0AyQDZgOoA7gDygPsBHoEogS+BPAFAgUUBWAFqgXoBlh42pVWu28jxxmfb3ee++Lucpcrinrs3kqiTjbOkqjVJjnYJmD4fAfH8BU2YDgwwtauWKRIZRAw4MqFejdsXQS4LkAq/gMGArhxZ7pP4SKNYYDKN7OUtKIfSZaD4Ty++X2P+R5DgNx8FiG/t8h/m2N/vcTlBeEkJuSwLqsyLTORiWE9FCk7rIDMJuPJvw8+++abzw6+AERYzGazPx6cvvvu6cHFbDKZaTRG3iI5/Ahz8iH5G/kXvAWfEwICIbJ6B9Kkl+3BvdbjIoB2K9Pzy/o1aLfh2SMYbrQLTXQ2FKdHCJpugO7BBugv42KrLo42kTvQS9KEb8ia3gqa3Yq1KdIRtlcgq7NUDLWy/OdSbKCO0geb/OuzXxHyrN4HRDVW/EXIfbjBqC7uq4rTi8sKnvahAwNKqcO4L0RHhV3OuW2DTR3OXCFi39ty3a5Sqev1fX/bc1MpQ8YsZjmOW2y7keAuZQwsAMsCO+qHAIinGPNFJ6C2jau4BRa1bIF8uPA597joIIxUoZAeo9y2KNLYlONq7HCXM0m5ANsHsBHOAgrIEJEs2+IIzplKlEJ0hEYWQq/aSMBAfxd9K4ABqoB0PhehDGPKkBYZWJKL2HN3Ar8vb1RyvbZKD7adW5UMx/CBtC2Di4gWCmBpVZhNZUcI1zYfxxVLK9kIMO9JOki2bIlGpUxoxdGWQeqoxOsM0IRK+IxJozX0NDDqgAaTqh9FJ33HSMWEUQlZMuageCx42aZuwLmrLSc6wg85dwRLFF4eU8gBISnVN9HTklBbovqCeYIH2uI8kH4kRCAZjn0R9GUALJAqVioRwkMmVESIghckJJ5QVtf2pUwcJ5YqQAqOl0oVEiknUjJgf7jVUqCWrm0JRj3hd6WMvDBGGJej9T2OwJTeaemp39byoUcDhV4gUynwpGAioSxUKhaoNrI9dDPX67mq7/kpeqygqLSksocUUnYYsTHnjDFvzcgW+RP5C+aaBybqmuhqIt6ERLmOuXZGaMfebay0Yqo5v04ReFaYiG6ONSE2Otd0KZCTd4qiiuOqKN45aY8/9RJH4UWgGRMv2AvDIoqKMNwL2uuAbqadO4niR4PBozhKtP302qfowZGjfVTejWCWpenjg4PHaZrdjd7XWKnrphpXBQx9mrJAtVfRWdBvMOAMD8NNR5+rvWhrg4kZkaZOmLrw8Na2w3TUmGutfZPnslaqKoEMzrPsYfT24qm/H0VHyfGT7e09peRW5yTJPdc7LsuPKlg4jrNjiPBy5d729pPj3nHczf3T+KS/dblbfVSWx/dlqJpsV7fyXCNGJkaVaK7aiJkilzw56WxJpQxychRF+/7TxdvRwyw7Hxjsxe7lVv8kPvXzboystZBSiNRQ7aBwRsx1lTQyLLFjhERFFVWFRVYE8sUqXzT1E5Y3+xCNilHU7MFy1Ry3Sb6msUlAuoRkRbc41HU2rYusesmqRukExvlqhrV2nsMsn+fjcQ6TyXg8yXNshAgyRgzEJCFJyYg8J+9jpf0zciyM1rtQrK9gmJX1qF7bQhirPYbGoYcNxVnWnMm6JjTWu3X30uza5XCUjsqq6QRcrZZr7zOu8Z74XPyVzjAVUeZYNuaFOeY423KYLgcfrP4pXEwEsA1c54kfhEcZxxmuueLb03CMOj0/HYcwN2hhaLDz8/McM7xib2By06mWShwq/J8znVRXS+E2ju0KyM14tWw+Y98bP1Fo3x6+YkoxLEVaVENWYA/mSVOXsHg+nT7HrDFejZsrHE+vrqbL6XSW57NFnkM+m11dGb+bI16OtiYRpoRRcX75KlwclWg3zOqwFEqJVS4UhBM9NJ2JGfOWWpIDnJR4Hy9h5Oxqv9yFpPdYZxdt7Fd1gjF48MMLc/qFBmgNId9caYZtHpwQBaMIf0CuyXwxh+U1DmCDhkEZ4U+/25Am1//XRNOMsVugzU7xvwmeDrQS4OsQtXNhdC8twt/nur54bG4uxQw/Nrdj7ubjZkXvQWZI5ncrn6y+bl3m6JM7BLIpV30jym1+0UJGN0Pt4NHdEMV99r+K9dXPpILRnVSrr+9JZd/aMyUDgsEIrfzXgWFTQEYgahjCIT6cM3gR7bqOj48ITvNpjuUWa/Fqml/B8XT1LTxZ7ix3YOk77m6kH0ouQyLKkXx1dZUbmn9oEm2P6+vr7/Bh8j15D/36d/jyrbFDhpf44nxkChrOxRA7zIFH5g51UsR5pndwn/f2Yc+UOJzXekc/v41VdX2Dn7780jzr6DPbwQpt4RQnjv2M6ked9du7b/5f1Bu7hPwHVIVqWgAAeNp1zrFqwlAYxfF/NFq0IJ1K6XRHp6DgA3QqdXDpIB0b4yUE9F6IEXTvI3TsM/RhfCJPwrcmcMPvOzfnI8CMfxLaJ+GBJ/NAnpuH8ps5lb/MIx65mMfKf81TXrmplaQTJbNuQ+uB/GIeygtzKn+YRzzzbR4r/zFPWfFHRUHkqBMJUBXxGKPwiafkzIGcWqMvz4dc6Pu+L99qT81J923uWJLpL9n6+lTF4JbZor/73s2NWqW2hG5TrtmzV7bjqve6626sm6kUQ+NKH3ydN37vdle3LuJG+zLu5ds+Q3jafc3LDsFQFIXh/Z/SUnclfY19XIqhS70KTURMDLy9hGVqTb6s0W/B/q80I1ggsYQWbVIyOnTJ6dFnwJARYyZMKZgxTy+31+Mas+e9cfePdeUuf38hl3Il17KSG7mVO7mXB3mUJ1nL89eofoxvrSQtaQAAAAEAAf//AA942mNgZGBg4AFiMSBmYmAEQjEgZgHzGAAEkABFeNpjYGBgZACCq0vUOUD0BSfzeTAaADmnBXgAAA=="

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(13));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(14));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(15));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(16));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(18));

// Module
exports.push([module.i, "html, \nbody {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    min-width: 1600px;\n}\n\n.header {\n    height: 95px;\n    background-color: #171717;\n    display: flex;\n    justify-content: center;\n    align-items: center; \n}\n.container {\n    width: 100%;\n    max-width: 1350px;\n    box-sizing: border-box;\n    margin: 0 auto;\n}\n.logo {\n    width: 175px;\n    height: 50px;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat 50% 50%;\n    background-size: cover;\n}\n.project-description__container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.project-description__link {\n    display: inline-block;\n    line-height: 44px;\n    padding: 0 25px;\n    border-style: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 20px;\n    font-weight: bold;\n    font-family: sans-serif;\n    text-align: center;\n    text-decoration: none;\n    color: #000000;\n    background-color: #ffd700;\n    transition: 0.3s;\n}\n.project-description__link:hover {\n    background-color: #ffffff;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #505050;\n}\n.project-description {\n    width: 70%;\n    height: 590px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.project-description__screenshot {\n    background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat 50% 50%;\n    background-size: cover;\n    width: 820px;\n    height: 395px;\n    border: 8px solid #2d2d2d;\n    box-shadow: 0 20px 18px 9px #404040;\n    position: relative;\n}\n.project-description__gif-creenshot {\n    width: 119px;\n    height: 119px;\n    position: absolute;\n    top: 3px;\n    right: 4px;\n    background: transparent url(" + ___CSS_LOADER_URL___2___ + ") no-repeat 50% 50%;\n    background-size: cover;\n}\n.project-description__container-text {\n    width: 450px;\n}\n.project-description__title {\n    font-size: 36px;\n    line-height: 41px;\n    font-family: sans-serif;\n    color: #ffffff;\n}\n.project-description__text {\n    letter-spacing: 1.7px;\n    font-family: sans-serif;\n    color: #dfdfdf;\n    font-size: 18px;\n    text-decoration: underline;\n}\n.sprites-example {\n    width: 100%;\n    background: #2d2d2d;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 25px;\n    padding-bottom: 85px;\n}\n.sprites-example__title {\n    font-family: sans-serif;\n    font-size: 27px;\n    color: #ffffff;\n    margin: 50px 0;\n}\n.sprites-example__container {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n}\n.sprites-example__sprite {\n    width: 120px;\n    height: 120px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-size: contain;\n}\n.sprites-example__sprite_bg_1 {\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n.sprites-example__sprite_bg_2 {\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n.sprites-example__sprite_bg_3 {\n    background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n}\n.sprites-example__sprite_bg_4 {\n    background-image: url(" + ___CSS_LOADER_URL___5___ + ");\n}\n.sprites-example__sprite_bg_5 {\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n.sprites-example__sprite_bg_6 {\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n.functional {\n    width: 100%;\n    background-color: #171717;\n}\n.functional__container {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding-bottom: 70px;\n}\n.functional__row {\n    max-width: 570px;\n    width: 100%;\n    padding-bottom: 55px;\n}\n.functional__text {\n    margin: 0;\n    font-family: sans-serif;\n    font-size: 23px;\n    color: #ffffff;\n    line-height: 30px;\n}\n.functional__title {\n    width: 100%;\n    font-family: sans-serif;\n    text-align: center;\n    color: #ffd700;\n    font-size: 27px;\n    margin-top: 70px;\n    margin-bottom: 50px;\n}\n.text-color_gold {\n    color: #ffd700;\n}\n.footer {\n    display: flex;\n    justify-content: center;\n    background-color: #000000;\n    padding: 50px 0;\n}\n.footer__link {\n    transition: 0.3s;\n    color: #ffffff;\n    line-height: 30px;\n    position: relative;\n    padding-left: 40px;\n    font-family: sans-serif;\n    letter-spacing: 1.7px;\n    font-size: 13px;\n}\n.footer__link::before {\n    content: '';\n    transition: 0.3s;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30px;\n    height: 30px;\n    background: #000000 url(" + ___CSS_LOADER_URL___6___ + ") no-repeat 50% 50%;\n    background-size: cover;\n    border-radius: 3px;\n}\n.footer__link:hover {\n    color: #ffd700;\n}\n.footer__link:hover::before {\n    background-color: #181818;\n}\n", ""]);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bf188ca022984af310619d20cebf1531.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4bdd5a2dc638c1f63efb9594e1472e47.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2441faa3304cbc5f71c2a7a37c94d94d.gif";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/43d1d1e40aadff12b4ad0c6621667061.gif";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/93efb3df96a3f9720c6b4b7e5299d4c3.gif";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4c8af6a1327caa7f9a88ec560b2eee04.gif";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/aad5cbc8ed1894c62dd734e896a7cb85.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".color-palette-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n.color-palette-container__input {\n    transition: 0.3s;\n    z-index: 0;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n    background-color: #3a3a3a;\n    outline: none;\n    border: none;\n    padding: 0 2px;\n}\n.color-palette-container__input:hover {\n    background-color: #444444;\n}\n.color-palette-container__input_primary {\n    top: 45%;\n    left: 45%;\n}\n.color-palette-container__input_secondary {\n    top: 60%;\n    left: 60%;\n}\n.color-palette-container__input_active {\n    z-index: 1;\n}\n", ""]);



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(2));

// Module
exports.push([module.i, ".resize-canvas {\n    z-index: 1;\n    cursor: pointer;\n    transition: right 0.3s;\n    position: relative;\n    top: 0;\n    right: 0;\n    width: 46px;\n    height: 46px;\n    border-radius: 3px;\n    background: #3a3a3a url(" + ___CSS_LOADER_URL___0___ + ") no-repeat -138px -182px;\n}\n.resize-canvas:hover {\n    background-color: #444444;\n}\n.resize-canvas_open {\n    z-index: 5;\n    right: 200px;\n}\n.resize-canvas_open:hover {\n    background-color: #444444;\n}\n.resize-canvas__content {\n    position: absolute;\n    left: 50px;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    background-color: #3a3a3a;\n    width: 200px;\n    height: 110px;\n    border-radius: 3px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    border: 3px solid #444444;\n}\n.resize-canvas__row {\n    font-family: sans-serif;\n    padding: 10px;\n    display: flex;\n    justify-content: flex-start;\n}\n.resize-canvas__input {\n    outline: none;\n    border: none;\n    border-radius: 3px;\n    background-color: #444444;\n    color: #ffffff;\n    line-height: 25px;\n    text-align: center;\n    padding: 0 3px;\n    margin: 0 10px;\n    height: 25px;\n    width: 50px;\n}\n.resize-canvas__text {\n    color: #ffffff;\n    line-height: 25px;\n}\n", ""]);



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".resize-tool {\n    min-width: 153px;\n    padding-bottom: 8px;\n    font-family: sans-serif;\n    text-align: center;\n}\n.resize-tool__button-container {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n.resize-tool__button-size {\n    transition: 0.3s;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n    background-color: #1d1d1d;\n    border: 3px solid #444444;\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.resize-tool__button-size::after {\n    content: '';\n    display: block;\n    background-color: #ffffff;\n}\n.resize-tool__button-size_size_1::after {\n    width: 30%;\n    height: 30%;\n}\n.resize-tool__button-size_size_2::after {\n    width: 40%;\n    height: 40%;\n}\n.resize-tool__button-size_size_3::after {\n    width: 50%;\n    height: 50%;\n}\n.resize-tool__button-size_size_4::after {\n    width: 60%;\n    height: 60%;\n}\n.resize-tool__button-size:hover {\n    background-color: #444444;\n}\n.resize-tool__button-size_active {\n    border-color:#ffd700;\n}\n", ""]);



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(2));

// Module
exports.push([module.i, ".instrument-item {\n    height: 46px;\n    width: 46px;\n    margin: 0 auto;\n    padding-top: 10px;\n    z-index: 1;\n}\n.instrument-item:hover {\n    z-index: 5;\n}\n.instrument-item__img {\n    transition: background-color 0.3s;\n    cursor: pointer;\n    position: relative;\n    width: 46px ;\n    height: 46px;\n    background-color: #3a3a3a;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-repeat: no-repeat;\n    border: 3px solid #3a3a3a;\n    border-radius: 3px;\n}\n.instrument-item__img:hover {\n    background-color: #444444;\n}\n.instrument-item__img_active {\n    border-color: #ffbf35;\n}\n.instrument-item__shortcut-button {\n    color: #ffbf35;\n}\n\n", ""]);



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_pen {\r\n    background-position: -182px -92px;\r\n}\r\n", ""]);



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_eraser {\r\n    background-position: -46px -228px;\r\n}\r\n", ""]);



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_pipette {\r\n    background-position: -274px 0px;\r\n}\r\n", ""]);



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_bucket {\r\n    background-position: -228px -92px;\r\n}\r\n", ""]);



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_paint-all-pixels {\n    background-position: -228px -138px;\n}\n", ""]);



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_stroke {\n    background-position: -46px -136px;\n}\n", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_rectangle {\n    background-position: -182px 0px;\n}\n", ""]);



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_move {\n    background-position: -184px -228px;\n}\n", ""]);



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_lighten {\n    background-position: -138px -228px;\n}\n", ""]);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".instrument-item__img_dithering {\n    background-position: 0px -228px;\n}\n", ""]);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(2));

// Module
exports.push([module.i, ".frame {\n    z-index: 1;\n    cursor: pointer;\n    width: 130px;\n    min-height: 130px;\n    border: 3px solid #3a3a3a;\n    border-radius: 3px;\n    margin: 0 auto;\n    margin-top: 10px;\n    position: relative;\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\n}\n.frame_move {\n    z-index: 5;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n.frame_sample {\n    display: none;\n}\n.frame_active {\n    border-color: #ffd700;\n}\n.frame:hover {\n    border-color: #444444;\n}\n.frame:hover .frame__text {\n    background-color: #444444;\n}\n.frame:hover .frame__button {\n    display: block;\n}\n.frame_active:hover {\n    border-color: #ffd700;\n}\n.frame_active:hover .frame__text {\n    background-color: #ffd700;\n}\n.frame__text {\n    user-select: none;\n    z-index: 1;\n    position: relative;\n    cursor: default;\n    font-family: sans-serif;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    line-height: 30px;\n    background-color: #3a3a3a;\n    color: #ffffff;\n}\n.frame_active .frame__text {\n    background-color: #ffd700;\n    color: #000000;\n}\n.frame__button {\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    display: none;\n    width: 30px;\n    height: 30px;\n    background-color: #64646499;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    position: absolute;\n    right: 0;\n}\n.frame__button:hover {\n    background-color: #535353;\n}\n.frame__button_pos_top {\n    top: 0;\n    background-position: -274px -106px;\n}\n.frame__button_pos_bottom {\n    bottom: 0; \n    background-position: -274px -76px;\n}\n.frame__canvas {\n    z-index: 0;\n    width: 130px;\n    height: 130px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.button-create-frame {\n    transition: 0.3s;\n    cursor: pointer;\n    font-family: sans-serif;\n    text-align: center;\n    line-height: 25px;\n    padding: 0 10px;\n    margin: 20px auto;\n    width: 100px;\n    border: 3px solid #3a3a3a;\n    border-radius: 3px;\n    background-color: #1d1d1d;\n    color: #ffffff;\n}\n.button-create-frame:hover {\n    background-color: #444444;\n}\n.pseudo-frame {\n    position: relative;\n    z-index: 1;\n    border: 3px dotted #ffd700;\n    background-color: #64646499;\n    width: 130px;\n    min-height: 130px;\n    margin: 0 auto;\n    margin-top: 10px;\n}\n.pseudo-frame_sample {\n    display: none;\n}\n", ""]);



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".layer {\n    width: 10%;\n    background-color: #1d1d1d; \n    border: 3px solid #444444;\n    border-radius: 3px;\n    box-sizing: border-box;\n    max-height: 400px;\n    font-family: sans-serif;\n    margin-top: 30px;\n}\n.layer__text {\n    display: block;\n    text-align: center;\n    line-height: 25px;\n    height: 25px;\n    color: #ffffff;\n}\n.layer__button-list {\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n    padding-bottom: 5px;\n    border-bottom: 3px solid #444444;\n    margin: 0;\n}\n.layer__button {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: transparent;\n    width: 25px;\n    height: 25px;\n    border: none;\n    padding: 0;\n    overflow: hidden;\n    color: #ffffff;\n    font-size: 11px;\n    text-align: center;\n    line-height: 24px;\n    outline: none;\n    background-color: #3a3a3a;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.layer__button::after {\n    content: '';\n    font-family: 'icomoon';\n    line-height: 18px;\n    text-align: center;\n    width: 18px;\n    height: 18px;\n    display: block;\n}\n.layer__button_bg_1::after {\n    content: '\\e60b';\n}\n.layer__button_bg_2::after {\n    content: '\\e611';\n}\n.layer__button_bg_3::after {\n    content: '\\e609';\n}\n.layer__button_bg_4::after {\n    content: '\\e60c';\n}\n.layer__button_bg_5::after {\n    content: '\\e60d';\n}\n.layer__button:hover {\n    background-color: #444444;\n}\n.layer__button:hover::after {\n    color: #ffd700;\n}\n.layer__container-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20%;\n}\n.layer__container {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    padding-bottom: 10px;\n    max-height: 321px; \n    box-sizing: border-box;\n    overflow-y: scroll;\n}\n.layer__instance { \n    margin-bottom: 10px;\n    cursor: pointer;\n    transition: 0.3s;\n    width: 100%;\n    height: 20px;\n    border: 3px solid #444444;\n    background-color: #3a3a3a;\n    border-radius: 3px;\n}\n.layer__instance-title {\n    transition: 0.3s;\n    line-height: 20px;\n    font-size: 13px;\n    padding-left: 5px;\n    color: #ffffff;\n}\n.layer__instance:hover { \n    background-color: #444444;\n}\n.layer__instance:hover .layer__instance-title { \n    color: #ffffff;\n}\n.layer__instance_sample {\n    display: none;\n}\n.layer__instance_active {\n    border-color: #ffd700;\n}\n\n", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".preview {\n    width: 14%;\n    min-width: 283px;\n    box-sizing: border-box;\n    margin: 0 10px;\n    padding-top: 30px;\n    height: 400px;\n}\n.preview_full-screen {\n    z-index: 10;\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    background-color: #1d1d1d;\n    top: 0;\n    left: 0;\n    padding: 0;\n    margin: 0;\n}\n.preview_full-screen .preview__animation-player {\n    width: 100vh;\n    height: 100vh;\n    overflow: hidden;\n}\n.preview_full-screen .preview__animation-player-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 100vh;\n    height: 100vh;\n}\n.preview_full-screen .preview__fps-list {\n    display: none;\n}\n.preview_full-screen .preview__full-screen {\n    display: none;\n}\n.preview__animation-player {\n    height: 280px;\n    display: block;\n    background-color: transparent;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.preview__fps-list {\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n    padding: 0;\n    margin: 0;\n}\n.preview__fps-button {\n    cursor: pointer;\n    transition: 0.3s;\n    background-color: #3a3a3a;\n    border: 3px solid #3a3a3a;\n    border-radius: 3px;\n    color: #ffffff;\n    font-family: sans-serif;\n    line-height: 21px;\n    padding: 0 7px;\n    display: block;\n    outline: none;\n}\n.preview__fps-button:hover {\n    background-color: #444444;\n}\n.preview__fps-button_active {\n    border-color: #ffd700;\n}\n.preview__full-screen {\n    transition: 0.3s;\n    cursor: pointer;\n    width: 120px;\n    line-height: 30px;\n    color: #ffffff;\n    font-family: sans-serif;\n    background-color: #3a3a3a;\n    display: block;\n    text-align: center;\n    font-size: 18px;\n    margin: 0 auto;\n    margin-top: 20px;\n    border: none;\n    outline: none;\n    border-radius: 3px;\n}\n.preview__full-screen:hover {\n    background-color: #444444;\n}\n.preview__title-fps {\n    margin: 0 auto;\n    color: #ffffff;\n    font-family: sans-serif;\n    font-weight: 700;\n    text-align: center;\n    font-size: 15px;\n    line-height: 25px;\n    display: block;\n}\n.preview__animation-player-container {\n    width: 100%;\n    margin: 0 auto;\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\n}\n", ""]);



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".main-canvas-container {\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.main-canvas {\n    display: block;\n    max-width: 100vh;\n    max-height: 100vh;\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEVMTExVVVUnhsEkAAAAHUlEQVR4AWOAAUYoQOePEAUj3v9oYDQ9gMBoegAAJFwCAbLaTIMAAAAASUVORK5CYII=') repeat;\n}\n", ""]);



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(2));

// Module
exports.push([module.i, ".export {\n\tz-index: 1;\n    font-family: sans-serif;\n    cursor: pointer;\n    transition: right 0.3s;\n    position: absolute;\n\tright: 2px;\n    top: 60px;\n    width: 46px;\n\theight: 46px;\n\tborder-radius: 3px;\n    background: #3a3a3a url(" + ___CSS_LOADER_URL___0___ + ") no-repeat 0px -182px;\n}\n.export:hover {\n    background-color: #444444;\n}\n.export_open {\n\tz-index: 5;\n    right: 202px;\n}\n.export_open:hover {\n    background-color: #3a3a3a;\n}\n.export__container {\n    transition: width 0.3s;\n    position: absolute;\n    left: 50px;\n    top: 50%;\n    transform: translateY(-50%);\n    box-sizing: border-box;\n    background-color: #3a3a3a;\n    width: 200px;\n    display: flex;\n\tflex-direction: column;\n\tborder-radius: 3px;\n\tborder: 3px solid #444444;\n}\n.export__text {\n    display: block;\n    margin: 0 auto;\n    padding: 20px 0;\n    color: #ffffff;\n    font-size: 16px;\n    text-decoration: none;\n}\n.export__link { \n    display: block;\n    margin: 0 auto;\n    margin-bottom: 20px;\n    color: #969696;\n    font-family: sans-serif;\n    font-size: 20px;\n}\n.export__link:hover {\n    color: #ffd700;\n}\n.export__input-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n}\n.export__input-description {\n    display: block;\n    text-align: center;\n    color: #ffffff;\n}\n.export__input {\n\toutline: none;\n\tborder: none;\n\tborder-radius: 3px;\n    background-color: #444444;\n    color: #ffffff;\n    line-height: 25px;\n    text-align: center;\n    padding: 0 3px;\n    margin: 10px auto;\n    display: block;\n    height: 25px;\n    width: 150px;\n}\n\n\n/* loading */\n\n.export__loading-container {\n    display: none;\n    position: absolute; \n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 200px;\n    min-height: 296px;\n    background-color: #000000;\n}\n.export__loading-container_open {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.export__loading {\n\theight: 49px;\n\twidth: 49px;\n\ttransform: translateZ(0);\n\t\t-o-transform: translateZ(0);\n\t\t-ms-transform: translateZ(0);\n\t\t-webkit-transform: translateZ(0);\n\t\t-moz-transform: translateZ(0);\n}\n.export__loading-circle {\n\tbackground-color: #ffffff;\n\tborder-radius: 50%;\n\theight: 8px;\n\tposition: absolute;\n\twidth: 8px;\n\tanimation: 2634.65ms export__loading infinite;\n\t\t-o-animation: 2634.65ms export__loading infinite;\n\t\t-ms-animation: 2634.65ms export__loading infinite;\n\t\t-webkit-animation: 2634.65ms export__loading infinite;\n\t\t-moz-animation: 2634.65ms export__loading infinite;\n\ttransform: scale(0);\n\t\t-o-transform: scale(0);\n\t\t-ms-transform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t\t-moz-transform: scale(0);\n}\n.export__loading-circle:nth-child(1) {\n\tanimation-delay: 48.3ms;\n\t\t-o-animation-delay: 48.3ms;\n\t\t-ms-animation-delay: 48.3ms;\n\t\t-webkit-animation-delay: 48.3ms;\n\t\t-moz-animation-delay: 48.3ms;\n}\n.export__loading-circle:nth-child(2) {\n\tanimation-delay: 96.6ms;\n\t\t-o-animation-delay: 96.6ms;\n\t\t-ms-animation-delay: 96.6ms;\n\t\t-webkit-animation-delay: 96.6ms;\n\t\t-moz-animation-delay: 96.6ms;\n}\n.export__loading-circle:nth-child(3) {\n\tanimation-delay: 144.9ms;\n\t\t-o-animation-delay: 144.9ms;\n\t\t-ms-animation-delay: 144.9ms;\n\t\t-webkit-animation-delay: 144.9ms;\n\t\t-moz-animation-delay: 144.9ms;\n}\n.export__loading-circle:nth-child(4) {\n\tanimation-delay: 193.2ms;\n\t\t-o-animation-delay: 193.2ms;\n\t\t-ms-animation-delay: 193.2ms;\n\t\t-webkit-animation-delay: 193.2ms;\n\t\t-moz-animation-delay: 193.2ms;\n}\n.export__loading-circle:nth-child(5) {\n\tanimation-delay: 241.5ms;\n\t\t-o-animation-delay: 241.5ms;\n\t\t-ms-animation-delay: 241.5ms;\n\t\t-webkit-animation-delay: 241.5ms;\n\t\t-moz-animation-delay: 241.5ms;\n}\n.export__loading-circle:nth-child(6) {\n\tanimation-delay: 289.8ms;\n\t\t-o-animation-delay: 289.8ms;\n\t\t-ms-animation-delay: 289.8ms;\n\t\t-webkit-animation-delay: 289.8ms;\n\t\t-moz-animation-delay: 289.8ms;\n}\n.export__loading-circle:nth-child(7) {\n\tanimation-delay: 338.1ms;\n\t\t-o-animation-delay: 338.1ms;\n\t\t-ms-animation-delay: 338.1ms;\n\t\t-webkit-animation-delay: 338.1ms;\n\t\t-moz-animation-delay: 338.1ms;\n}\n.export__loading-circle:nth-child(8) {\n\tanimation-delay: 386.4ms;\n\t\t-o-animation-delay: 386.4ms;\n\t\t-ms-animation-delay: 386.4ms;\n\t\t-webkit-animation-delay: 386.4ms;\n\t\t-moz-animation-delay: 386.4ms;\n}\n.export__loading-circle:nth-child(9) {\n\tanimation-delay: 434.7ms;\n\t\t-o-animation-delay: 434.7ms;\n\t\t-ms-animation-delay: 434.7ms;\n\t\t-webkit-animation-delay: 434.7ms;\n\t\t-moz-animation-delay: 434.7ms;\n}\n.export__loading-circle:nth-child(10) {\n\tanimation-delay: 483ms;\n\t\t-o-animation-delay: 483ms;\n\t\t-ms-animation-delay: 483ms;\n\t\t-webkit-animation-delay: 483ms;\n\t\t-moz-animation-delay: 483ms;\n}\n.export__loading-circle:nth-child(11) {\n\tanimation-delay: 531.3ms;\n\t\t-o-animation-delay: 531.3ms;\n\t\t-ms-animation-delay: 531.3ms;\n\t\t-webkit-animation-delay: 531.3ms;\n\t\t-moz-animation-delay: 531.3ms;\n}\n.export__loading-circle:nth-child(12) {\n\tanimation-delay: 579.6ms;\n\t\t-o-animation-delay: 579.6ms;\n\t\t-ms-animation-delay: 579.6ms;\n\t\t-webkit-animation-delay: 579.6ms;\n\t\t-moz-animation-delay: 579.6ms;\n}\n.export__loading-circle:nth-child(13) {\n\tanimation-delay: 627.9ms;\n\t\t-o-animation-delay: 627.9ms;\n\t\t-ms-animation-delay: 627.9ms;\n\t\t-webkit-animation-delay: 627.9ms;\n\t\t-moz-animation-delay: 627.9ms;\n}\n.export__loading-row1 {\n\ttop: 0.3px;\n}\n.export__loading-row2 {\n\ttop: 10.95px;\n}\n.export__loading-row3 {\n\ttop: 20.55px;\n}\n.export__loading-row4 {\n\ttop: 31.2px;\n}\n.export__loading-row5 {\n\ttop: 40.85px;\n}\n.export__loading-col1 {\n\tleft: 0.25px;\n}\n.export__loading-col2 {\n\tleft: 10.85px;\n}\n.export__loading-col3 {\n\tleft: 20.5px;\n}\n.export__loading-col4 {\n\tleft: 31.15px;\n}\n.export__loading-col5 {\n\tleft: 40.8px;\n}\n\n\n@keyframes export__loading {\n\t0% {\n\t\ttransform: scale(0);\n\t}\n\t27.28% {\n\t\ttransform: scale(1);\n\t}\n\t36.36% {\n\t\ttransform: scale(0.857);\n\t}\n\t54.55% {\n\t\ttransform: scale(0.857);\n\t}\n\t63.64% {\n\t\ttransform: scale(0);\n\t}\n\t100% {\n\t\ttransform: scale(0);\n\t}\n}\n\n@-o-keyframes export__loading {\n\t0% {\n\t\t-o-transform: scale(0);\n\t}\n\t27.28% {\n\t\t-o-transform: scale(1);\n\t}\n\t36.36% {\n\t\t-o-transform: scale(0.857);\n\t}\n\t54.55% {\n\t\t-o-transform: scale(0.857);\n\t}\n\t63.64% {\n\t\t-o-transform: scale(0);\n\t}\n\t100% {\n\t\t-o-transform: scale(0);\n\t}\n}\n\n@-ms-keyframes export__loading {\n\t0% {\n\t\t-ms-transform: scale(0);\n\t}\n\t27.28% {\n\t\t-ms-transform: scale(1);\n\t}\n\t36.36% {\n\t\t-ms-transform: scale(0.857);\n\t}\n\t54.55% {\n\t\t-ms-transform: scale(0.857);\n\t}\n\t63.64% {\n\t\t-ms-transform: scale(0);\n\t}\n\t100% {\n\t\t-ms-transform: scale(0);\n\t}\n}\n\n@-webkit-keyframes export__loading {\n\t0% {\n\t\t-webkit-transform: scale(0);\n\t}\n\t27.28% {\n\t\t-webkit-transform: scale(1);\n\t}\n\t36.36% {\n\t\t-webkit-transform: scale(0.857);\n\t}\n\t54.55% {\n\t\t-webkit-transform: scale(0.857);\n\t}\n\t63.64% {\n\t\t-webkit-transform: scale(0);\n\t}\n\t100% {\n\t\t-webkit-transform: scale(0);\n\t}\n}\n\n@-moz-keyframes export__loading {\n\t0% {\n\t\t-moz-transform: scale(0);\n\t}\n\t27.28% {\n\t\t-moz-transform: scale(1);\n\t}\n\t36.36% {\n\t\t-moz-transform: scale(0.857);\n\t}\n\t54.55% {\n\t\t-moz-transform: scale(0.857);\n\t}\n\t63.64% {\n\t\t-moz-transform: scale(0);\n\t}\n\t100% {\n\t\t-moz-transform: scale(0);\n\t}\n}\n", ""]);



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var urlEscape = __webpack_require__(1);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(2));

// Module
exports.push([module.i, ".hotkeys {\n    width: 36px;\n    height: 21px;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat -274px -136px;\n    z-index: 10;\n    position: fixed;\n    bottom: 50px;\n    left: 50px;\n    opacity: 1;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.hotkeys:hover {\n    box-shadow: 0 0 20px -2px #ffd700;\n}\n.hotkeys__main-title {\n    font-family: sans-serif;\n    font-size: 30px;\n    color: #000000;\n    background-color: #ffd700;\n    margin: 0;\n    line-height: 60px;\n    padding-left: 20px;\n}\n.hotkeys__title {\n    font-family: sans-serif;\n    font-size: 20px;\n    color: #ffd700;\n    border-bottom: 3px solid #ffd700;\n    margin: 0;\n    line-height: 60px;\n    margin-left: 20px;\n    margin-right: 20px;\n    width: 100%;\n}\n.hotkeys__close {\n    transition: 0.3s;\n    position: absolute;\n    right: 20px;\n    top: 0;\n    font-family: sans-serif;\n    font-weight: 700;\n    color: #000000;\n    font-size: 30px;\n    text-transform: uppercase;\n    line-height: 60px;\n}\n.hotkeys__close:hover {\n    transform: rotate(180deg);\n}\n.hotkeys__container {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 1200px;\n    height: 600px;\n    border: 3px solid #ffd700;\n    border-radius: 3px;\n    background-color: #000000;\n}\n.hotkeys__container_open {\n    display: block;\n}\n.hotkeys__container-keys {\n    max-height: 540px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n}\n.hotkeys__container-keys_overflow_v {\n    overflow: visible;\n    width: 100%;\n}\n.hotkeys__input-wrapper {\n    width: 25%;\n    height: 100px;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    padding-left: 30px;\n    align-items: center;\n}\n.hotkeys__description {\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 14px;\n    margin-left: 10px;\n    line-height: 30px;\n}\n.hotkeys__input {\n    box-sizing: border-box;\n    display: inline-block;\n    text-transform: uppercase;\n    outline: none;\n    height: 30px;\n    width: 50px;\n    padding: 0 10px;\n    border: 2px solid white;\n    border-radius: 2px;\n    text-align: center;\n    font-family: monospace;\n    font-weight: bold;\n    font-size: 18px;\n    color:#ffd700;\n    border: 3px solid #ffd700;\n    background-color: transparent;\n    border-radius: 3px;\n}\n.hotkeys__input_active {\n    border-color: red;\n}\n.hotkeys__input_err {\n    border-color: red;\n    color: red;\n}\n.hotkeys__input_active {\n    animation-name: blinker;\n    animation-iteration-count: infinite;\n    animation-duration: 0.7s;\n}\n@keyframes blinker {\n    0% { \n        opacity: 1.0; \n    }\n    50% {\n        opacity: 0.3; \n    }\n    100% { \n        opacity: 1.0; \n    }\n}\n.hotkeys__icon {\n    height: 46px;\n    width: 46px;\n    margin: 0 10px 0 0;\n    background-color: #3a3a3a;\n    border-radius: 3px;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-repeat: no-repeat;\n}\n.hotkeys__icon_bg_1 {\n    background-position: -182px -92px;\n}\n.hotkeys__icon_bg_2 {\n    background-position: -46px -136px;\n}\n.hotkeys__icon_bg_3 {\n    background-position: -46px -228px;\n}\n.hotkeys__icon_bg_4 {\n    background-position: -182px 0px;\n}\n.hotkeys__icon_bg_5 {\n    background-position: -184px -228px;\n}\n.hotkeys__icon_bg_6 {\n    background-position: -274px 0px;\n}\n.hotkeys__icon_bg_7 {\n    background-position: -228px -92px;\n}\n.hotkeys__icon_bg_8 {\n    background-position: -228px -138px;\n}\n.hotkeys__icon_bg_9 {\n    background-position: -138px -228px;\n}\n.hotkeys__icon_bg_10 {\n    background-position: 0px -228px;\n}\n\n\n", ""]);



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(40);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/screens/main-canvas/index.js
class MainCanvas {
  constructor(x, y, FrameClass) {
    this.canvas = document.querySelector('.main-canvas');
    this.canvas.width = window.innerHeight;
    this.canvas.height = window.innerHeight;
    this.quantitySectorsX = x;
    this.quantitySectorsY = y;
    this.totalQuantitySectors = 0;
    this.defaultColor = '#ffffff00';
    this.listSectors = [];
    this.listFrames = [];
    this.activeFrame = null;
    this.buttonCreateFrame = null;
    this.FrameClass = FrameClass;
    this.hotKey = null;
    this.createHotKey();
    this.lastClickCoordinates = null;
    this.createFrame = this.createFrame.bind(this);
    this.pendingForHotkey = this.pendingForHotkey.bind(this);
    Promise.resolve().then(() => {
      this.createFrame();
      this.findActiveFrame();
      this.buttonCreateFrame = this.listFrames[0].buttonCreateFrame;
      this.buttonCreateFrame.addEventListener('click', this.createFrame);
    });
    document.addEventListener('keypress', this.pendingForHotkey);
  }

  createHotKey() {
    this.hotKey = {
      createframe: {
        key: null,
        arguments: true,
        action: 'createFrame'
      },
      cloneframe: {
        key: null,
        arguments: null,
        action: 'cloneActiveFrame'
      },
      selectpreviousframe: {
        key: null,
        arguments: -1,
        action: 'selectNewFrame'
      },
      selectnextframe: {
        key: null,
        arguments: 1,
        action: 'selectNewFrame'
      }
    };
  }

  cloneActiveFrame() {
    this.activeFrame.cloneFrame();
  }

  selectNewFrame(number) {
    let indexActiveFrame = this.listFrames.findIndex(frame => this.activeFrame === frame);
    indexActiveFrame += number;

    if (indexActiveFrame < 0) {
      indexActiveFrame = 0;
    }

    if (indexActiveFrame > this.listFrames.length - 1) {
      indexActiveFrame = this.listFrames.length - 1;
    }

    this.listFrames[indexActiveFrame].changeActiveState();
  }

  pendingForHotkey(event) {
    const newKey = String.fromCharCode(event.keyCode).toLowerCase();
    const objKeys = Object.keys(this.hotKey);
    objKeys.forEach(key => {
      const hotKey = this.hotKey[key].key.toLowerCase();

      if (hotKey === newKey) {
        const arg = this.hotKey[key].arguments;
        const {
          action
        } = this.hotKey[key];
        this[action](arg);
      }
    });
  }

  frameSequenceRecalculation() {
    this.listFrames.forEach((item, index) => {
      const frame = item;
      frame.frameNumber = index + 1;
      frame.frameNumberText.innerHTML = index + 1;
    });
  }

  createFrame(activity = true) {
    if (activity) {
      this.findActiveFrame();

      if (this.activeFrame) {
        this.activeFrame.changeState('not active');
      }
    }

    this.clearLayers();
    const frame = new this.FrameClass(this.listFrames.length + 1, this);
    frame.listSectors = JSON.parse(JSON.stringify(this.listSectors));
    this.listFrames.push(frame);

    if (activity) {
      frame.changeState('active');
    }

    frame.framesContainer.scrollTop = frame.framesContainer.scrollHeight;
    this.drawingAllElementsColor(this.defaultColor);
  }

  clearLayers() {
    this.listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.layers = null;
      });
    });
  }

  drawingAllElementsColor(color) {
    this.listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.color = color;
        this.drawingElements(sector, true);
      });
    });
    if (!this.activeFrame) return;
    this.activeFrame.drawingElements();
  }

  drawingAllElements() {
    this.listSectors.forEach(row => {
      row.forEach(column => {
        this.drawingElements(column, true);
      });
    });
    if (!this.activeFrame) return;
    this.activeFrame.drawingElements();
  }

  setExactSizeCanvas() {
    const increaseRatioX = Math.floor(this.canvas.width / this.quantitySectorsX);
    const increaseRatioY = Math.floor(this.canvas.height / this.quantitySectorsY);
    this.canvas.width = Math.floor(this.quantitySectorsX * increaseRatioX);
    this.canvas.style.width = `${this.canvas.width}px`;
    this.canvas.height = Math.floor(this.quantitySectorsY * increaseRatioY);
    this.canvas.style.height = `${this.canvas.height}px`;
  }

  plots() {
    this.listSectors = [[]];
    this.totalQuantitySectors = this.quantitySectorsX * this.quantitySectorsY;
    let sizeX = 0;
    let sizeY = 0;
    const increaseRatioX = Math.floor(this.canvas.width / this.quantitySectorsX);
    const increaseRatioY = Math.floor(this.canvas.height / this.quantitySectorsY);
    this.setExactSizeCanvas();

    for (let i = 0; i < this.quantitySectorsX * this.quantitySectorsY; i += 1) {
      this.listSectors[Math.floor(sizeY / increaseRatioY)].push({
        x: sizeX,
        y: sizeY,
        w: increaseRatioX,
        h: increaseRatioY,
        color: this.defaultColor,
        indexRow: Math.floor(sizeY / increaseRatioY),
        indexColumn: Math.floor(sizeX / increaseRatioX)
      });
      sizeX += increaseRatioX;

      if (sizeX >= this.canvas.width) {
        sizeX = 0;
        sizeY += increaseRatioY;
        this.listSectors.push([]);
      }
    }

    this.listSectors.pop();
    this.drawingAllElements();

    if (this.activeFrame) {
      this.activeFrame.listSectors = this.listSectors;
    }
  }

  changeNumberSections() {
    const listModifiedSections = [];
    this.listSectors.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        if (column.color !== this.defaultColor) {
          listModifiedSections.push({
            color: column.color,
            indexRow,
            indexColumn
          });
        }
      });
    });
    this.plots();
    listModifiedSections.forEach(item => {
      if (this.listSectors.length > item.indexRow) {
        if (this.listSectors[item.indexRow].length > item.indexColumn) {
          const sector = this.listSectors[item.indexRow][item.indexColumn];
          sector.color = item.color;
        }
      }
    });
    this.drawingAllElements();
  }

  findActiveFrame() {
    this.listFrames.forEach(frame => {
      if (frame.state === 'active') {
        this.activeFrame = frame;
      }
    });
  }

  drawingElements(item, allElements, changeLayersColor = true) {
    const sector = item;
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(sector.x, sector.y, sector.w, sector.h);
    const {
      color
    } = sector;

    if (sector.layers && changeLayersColor) {
      const index = this.activeFrame.activeLayer;

      if (index !== undefined) {
        sector.layers[index].color = color;
      }
    }

    ctx.fillStyle = color;
    ctx.rect(sector.x, sector.y, sector.w, sector.h);
    ctx.fill();
    this.findActiveFrame();
    if (!this.activeFrame || allElements) return;
    this.activeFrame.drawingElements();
  }

}
// CONCATENATED MODULE: ./src/screens/frame/index.js
class Frame {
  constructor(frameNumber, mainCanvas) {
    this.mainCanvas = mainCanvas;
    this.listSectors = [];
    this.pseudoFrameSample = document.querySelector('.pseudo-frame_sample');
    this.pseudoFrame = this.pseudoFrameSample.cloneNode(true);
    this.pseudoFrame.classList.remove('pseudo-frame_sample');
    this.frameSample = document.querySelector('.frame_sample');
    this.framesContainer = this.frameSample.parentNode;
    this.scrollTopContainer = this.framesContainer.scrollTop;
    this.buttonCreateFrame = document.querySelector('.button-create-frame');
    this.frameContent = this.frameSample.cloneNode(true);
    this.frameContent.classList.remove('frame_sample');
    this.frameCanvas = this.frameContent.querySelector('.frame__canvas');
    this.frameCanvas.width = window.innerHeight;
    this.frameCanvas.height = window.innerHeight;
    this.frameNumber = frameNumber;
    this.frameNumberText = this.frameContent.querySelector('.frame__text');
    this.frameNumberText.innerHTML = this.frameNumber;
    this.framesContainer.insertBefore(this.frameContent, this.buttonCreateFrame);
    this.frameInteraction = this.frameInteraction.bind(this);
    this.subscribeEventsToMove = this.subscribeEventsToMove.bind(this);
    this.unsubscribeEventsToMove = this.unsubscribeEventsToMove.bind(this);
    this.followingMouse = this.followingMouse.bind(this);
    this.shiftY = null;
    this.frameContent.addEventListener('click', this.frameInteraction);
    this.frameContent.addEventListener('mousedown', this.subscribeEventsToMove);

    this.framesContainer.onwheel = () => false;

    this.state = 'not active';
  }

  frameCheckMouseOver(mouseX, mouseY) {
    let result = null;
    const x = mouseX;
    const y = mouseY;
    this.mainCanvas.listFrames.forEach(item => {
      const frame = item;
      const {
        frameContent
      } = frame;

      if (frameContent !== this.frameContent) {
        const frameX = frameContent.getBoundingClientRect().left;
        const frameY = frameContent.getBoundingClientRect().top;
        const frameWidth = frameContent.offsetWidth;
        const frameHeight = frameContent.offsetHeight;

        if (x > frameX && x < frameX + frameWidth) {
          if (y > frameY && y < frameY + frameHeight) {
            result = frame;
          }
        }
      }
    });
    return result;
  }

  calcShiftY(event) {
    const framesContainerTop = this.framesContainer.getBoundingClientRect().top;
    const frameContentTop = this.frameContent.getBoundingClientRect().top;
    const y = event.pageY - framesContainerTop;
    this.shiftY = y - (frameContentTop - framesContainerTop);
  }

  cancelScroll() {
    this.framesContainer.scrollTop = this.scrollTopContainer;
  }

  calcScrollTopContainer() {
    this.scrollTopContainer = this.framesContainer.scrollTop;
  }

  subscribeEventsToMove(event) {
    this.changeActiveState();
    this.calcShiftY(event);
    document.addEventListener('mousemove', this.followingMouse);
    document.addEventListener('mouseup', this.unsubscribeEventsToMove);
  }

  unsubscribeEventsToMove() {
    this.frameContent.classList.remove('frame_move');
    this.frameContent.style.top = '0';

    if (this.framesContainer.contains(this.pseudoFrame)) {
      this.framesContainer.removeChild(this.pseudoFrame);
    }

    document.removeEventListener('mousemove', this.followingMouse);
    document.removeEventListener('mouseup', this.unsubscribeEventsToMove);
  }

  swapFrames(event) {
    const frameMouseOver = this.frameCheckMouseOver(event.pageX, event.pageY);

    if (frameMouseOver) {
      let indexNewPlace = this.frameNumber;

      if (frameMouseOver.frameNumber > indexNewPlace) {
        indexNewPlace -= 1;
      }

      this.moveAroundDOM(indexNewPlace, this.framesContainer, frameMouseOver.frameContent);
      frameMouseOver.isSwap = true;
      this.mainCanvas.listFrames[this.frameNumber - 1] = frameMouseOver;
      this.mainCanvas.listFrames[frameMouseOver.frameNumber - 1] = this;
      this.mainCanvas.frameSequenceRecalculation();
    }
  }

  followingMouse(event) {
    this.calcScrollTopContainer();

    if (!this.framesContainer.contains(this.pseudoFrame)) {
      this.moveAroundDOM(this.frameNumber, this.framesContainer, this.pseudoFrame);
    }

    const framesContainerTop = this.framesContainer.getBoundingClientRect().top;
    const y = event.pageY - framesContainerTop - this.shiftY + this.scrollTopContainer;

    if (!this.frameContent.classList.contains('frame_move')) {
      this.frameContent.classList.add('frame_move');
    }

    this.frameContent.style.top = `${y}px`;
    this.swapFrames(event);
  }

  deleteFrame() {
    if (this.mainCanvas.listFrames.length < 2) return;

    if (this.state === 'active') {
      if (this.frameNumber > 1) {
        this.mainCanvas.listFrames[this.frameNumber - 2].changeActiveState();
      } else {
        this.mainCanvas.listFrames[1].changeActiveState();
      }
    }

    this.mainCanvas.listFrames.splice(this.frameNumber - 1, 1);
    this.framesContainer.removeChild(this.frameContent);
    this.mainCanvas.frameSequenceRecalculation();
  }

  moveAroundDOM(index, parentElement, element) {
    if (index < this.mainCanvas.listFrames.length) {
      const nextFrameHTML = this.mainCanvas.listFrames[index].frameContent;
      parentElement.insertBefore(element, nextFrameHTML);
    } else {
      parentElement.insertBefore(element, this.buttonCreateFrame);
    }
  }

  cloneFrame() {
    this.changeActiveState();
    const frame = new Frame(this.frameNumber + 1, this.mainCanvas);
    frame.listSectors = JSON.parse(JSON.stringify(this.listSectors));
    this.moveAroundDOM(this.frameNumber, frame.framesContainer, frame.frameContent);
    this.mainCanvas.listFrames.splice(this.frameNumber, 0, frame);
    this.changeState('not active');
    frame.changeActiveState();
    this.mainCanvas.frameSequenceRecalculation();
    this.mainCanvas.findActiveFrame();
    this.framesContainer.scrollTop = this.framesContainer.scrollHeight;
  }

  changeActiveState() {
    this.mainCanvas.activeFrame.changeState('not active');
    this.changeState('active');
  }

  frameInteraction(event) {
    const el = event.target;

    if (el === this.frameCanvas) {
      this.changeActiveState();
    }

    if (el.classList.contains('frame__button')) {
      this[`${el.dataset.action}Frame`]();
    }
  }

  makeChangesSectors() {
    this.mainCanvas.listSectors = this.listSectors;
    this.mainCanvas.drawingAllElements();
    this.drawingElements();
  }

  savingStateSectors() {
    this.listSectors = JSON.parse(JSON.stringify(this.mainCanvas.listSectors));
  }

  changeState(state) {
    this.state = state;

    if (this.state === 'active') {
      this.mainCanvas.findActiveFrame();
      this.makeChangesSectors();
      this.frameContent.classList.add('frame_active');
    } else {
      this.savingStateSectors();
      this.drawingElements();
      this.frameContent.classList.remove('frame_active');
    }
  }

  drawingElements() {
    const image = this.mainCanvas.canvas.toDataURL('png');
    this.frameCanvas.style.backgroundImage = `url(${image})`;
  }

}
// CONCATENATED MODULE: ./src/components/loading-saved-data.js
class LoadingSavedData {
  constructor(mainCanvas, resizeCanvas) {
    this.mainCanvas = mainCanvas;
    this.saveData = this.saveData.bind(this);
    this.resizeCanvas = resizeCanvas;
    window.addEventListener('beforeunload', this.saveData);

    if (localStorage.listFrames) {
      this.loadData();
      localStorage.clear();
    }
  }

  static JSONFramesConversion(list) {
    const result = [];
    list.forEach(item => {
      const frame = item;

      if (frame.state === 'active') {
        frame.savingStateSectors();
      }

      const data = {
        listSectors: frame.listSectors,
        quantityLayer: frame.quantityLayer
      };
      result.push(JSON.stringify(data));
    });
    return JSON.stringify(result);
  }

  saveSizeCanvas() {
    const sizeCanvas = {
      width: this.mainCanvas.quantitySectorsX,
      heihgt: this.mainCanvas.quantitySectorsY
    };
    localStorage.setItem('sizeCanvas', JSON.stringify(sizeCanvas));
  }

  saveData() {
    const JSONListFrames = LoadingSavedData.JSONFramesConversion(this.mainCanvas.listFrames);
    this.saveSizeCanvas();
    localStorage.setItem('listFrames', JSONListFrames);
  }

  loadData() {
    const listFrames = JSON.parse(localStorage.listFrames); // In previous versions, a different sector storage structure was used.

    if (JSON.parse(listFrames[0]).listSectors.length > 128) return;
    const initFrame = this.mainCanvas.listFrames[0];
    initFrame.framesContainer.removeChild(initFrame.frameContent);
    this.mainCanvas.listFrames.splice(0, 1);
    listFrames.forEach((item, index) => {
      const data = JSON.parse(item);
      const {
        listSectors
      } = data;
      const {
        quantityLayer
      } = data;
      this.mainCanvas.createFrame(false);
      const frame = this.mainCanvas.listFrames[index];
      frame.listSectors = listSectors;
      frame.quantityLayer = quantityLayer;
    });

    if (localStorage.sizeCanvas) {
      const sizeCanvas = JSON.parse(localStorage.sizeCanvas);
      this.resizeCanvas.inputSizeX.value = +sizeCanvas.width;
      this.resizeCanvas.inputSizeY.value = +sizeCanvas.heihgt;
      this.resizeCanvas.changeSizeCanvas();
    }
  }

}
// CONCATENATED MODULE: ./src/screens/resize-canvas/index.js
class ResizeCanvas {
  constructor(mainCanvas, LoadingSavedData, layer) {
    this.mainCanvas = mainCanvas;
    this.layer = layer;
    this.resizeButton = document.querySelector('.resize-canvas');
    this.resizeContent = this.resizeButton.querySelector('.resize-canvas__content');
    this.changeViewContent = this.changeViewContent.bind(this);
    this.changeValueInputs = this.changeValueInputs.bind(this);
    this.inputsSize = this.resizeContent.querySelectorAll('.resize-canvas__input');
    this.inputSizeX = null;
    this.inputSizeY = null;
    this.loadingSavedData = null;
    [...this.inputsSize].forEach(item => {
      if (item.classList.contains('resize-canvas__input_x')) {
        this.inputSizeX = item;
      } else {
        this.inputSizeY = item;
      }

      item.addEventListener('keyup', this.changeValueInputs);
    });
    this.mainCanvas.quantitySectorsX = this.inputSizeX.value;
    this.mainCanvas.quantitySectorsY = this.inputSizeY.value;
    this.mainCanvas.plots();
    this.resizeButton.addEventListener('click', this.changeViewContent);
    Promise.resolve().then(() => {
      this.loadingSavedData = new LoadingSavedData(this.mainCanvas, this);
    });
  }

  changeViewContent(event) {
    const el = event.target;
    if (!el.classList.contains('resize-canvas')) return;
    this.resizeButton.classList.toggle('resize-canvas_open');
    this.resizeContent.classList.toggle('resize-canvas__content_open');
  }

  changeSizeCanvas(removeLayers = false) {
    this.mainCanvas.quantitySectorsX = this.inputSizeX.value;
    this.mainCanvas.quantitySectorsY = this.inputSizeY.value;
    this.mainCanvas.changeNumberSections();
    this.mainCanvas.setExactSizeCanvas();
    this.mainCanvas.listFrames.forEach(item => {
      const frame = item;
      frame.frameCanvas.backgroundImage = 'none';
      frame.frameCanvas.backgroundColor = this.mainCanvas.defaultColor;

      if (removeLayers) {
        this.layer.layerContainer.innerHTML = '';
        this.layer.listLayers = [];
        frame.quantityLayer = 0;
      }

      frame.changeActiveState();
      if (!frame.quantityLayer) return;
      this.layer.changeActiveFrame();
      this.layer.changeActiveLayer(frame.activeLayer);
    });
  }

  changeValueInputs(event) {
    const input = event.target;
    input.value = input.value.replace(/\D+/gi, '');

    if (+input.value < input.dataset.min) {
      input.value = input.dataset.min;
    }

    if (+input.value > input.dataset.max) {
      input.value = input.dataset.max;
    }

    this.changeSizeCanvas(true);
  }

}
// CONCATENATED MODULE: ./src/screens/preview/index.js
class Preview {
  constructor(mainCanvas) {
    this.mainCanvas = mainCanvas;
    this.listFrames = this.mainCanvas.listFrames;
    this.previewContainer = document.querySelector('.preview');
    this.animationPlayer = this.previewContainer.querySelector('.preview__animation-player');
    this.fullScreenButton = this.previewContainer.querySelector('.preview__full-screen');
    this.activeFPSButton = this.previewContainer.querySelector('.preview__fps-button_active');
    this.fps = 1000 / this.activeFPSButton.dataset.fps;
    this.activeFrameIndex = 0;
    this.changeFps = this.changeFps.bind(this);
    this.drawingPreviews = this.drawingPreviews.bind(this);
    this.changeScreenMode = this.changeScreenMode.bind(this);
    document.addEventListener('click', this.changeFps);
    this.fullScreenButton.addEventListener('click', () => {
      document.documentElement.requestFullscreen();
    });
    document.addEventListener('fullscreenchange', this.changeScreenMode);
    this.drawingPreviews();
  }

  changeScreenMode() {
    this.previewContainer.classList.toggle('preview_full-screen');
  }

  changeFps(event) {
    const el = event.target;

    if (el.classList.contains('preview__fps-button')) {
      this.activeFPSButton.classList.remove('preview__fps-button_active');
      el.classList.add('preview__fps-button_active');
      this.activeFPSButton = el;
      this.fps = 1000 / this.activeFPSButton.dataset.fps;
    }
  }

  drawingPreviews() {
    const frame = this.listFrames[this.activeFrameIndex];

    if (frame) {
      const img = getComputedStyle(frame.frameCanvas).backgroundImage;
      this.animationPlayer.style.backgroundImage = img;
    }

    if (this.activeFrameIndex + 1 < this.listFrames.length) {
      this.activeFrameIndex += 1;
    } else {
      this.activeFrameIndex = 0;
    }

    setTimeout(() => {
      requestAnimationFrame(this.drawingPreviews);
    }, this.fps);
  }

}
// CONCATENATED MODULE: ./src/screens/layer/index.js
class Layer {
  constructor(mainCanvas) {
    this.mainCanvas = mainCanvas;
    this.layerContainer = document.querySelector('.layer__container');
    this.layerSample = this.layerContainer.querySelector('.layer__instance_sample');
    this.listLayers = [];
    this.activeLayer = null;
    this.layerInteraction = this.layerInteraction.bind(this);
    document.addEventListener('click', this.layerInteraction);
  }

  layerInteraction(event) {
    const el = event.target;

    if (el.classList.contains('layer__button')) {
      const {
        action
      } = el.dataset;

      if (action === 'move') {
        const typeAction = el.dataset.move;
        this[`${action}Layer`](typeAction);
      } else {
        this[`${action}Layer`]();
      }
    }

    if (el.classList.contains('layer__instance') || el.parentNode.classList.contains('layer__instance')) {
      const indexActiveLayer = el.dataset.indexLayer || el.parentNode.dataset.indexLayer;
      this.changeActiveLayer(indexActiveLayer);
    }

    if (el.classList.contains('frame__canvas') || el.classList.contains('button-create-frame') || el.classList.contains('frame__button')) {
      this.changeActiveFrame();
    }
  }

  changeActiveLayer(index) {
    if (this.activeLayer) {
      this.activeLayer.classList.remove('layer__instance_active');
    }

    this.activeLayer = this.listLayers[index];
    this.activeLayer.classList.add('layer__instance_active');
    this.mainCanvas.activeFrame.activeLayer = index;
    this.makeChangesSectors();
  }

  makeChangesSectors() {
    const index = this.mainCanvas.activeFrame.activeLayer;
    this.mainCanvas.listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.color = sector.layers[index].color;
        this.mainCanvas.drawingElements(sector, true, false);
      });
    });
    this.mainCanvas.activeFrame.drawingElements();
  }

  changeActiveFrame() {
    const {
      activeFrame
    } = this.mainCanvas;
    this.listLayers = [];
    this.layerContainer.innerHTML = '';

    for (let i = 0; i < activeFrame.quantityLayer; i += 1) {
      this.addLayer(true);
    }
  }

  modificationListSectors(action) {
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach(row => {
      row.forEach(item => {
        const column = item;
        let layer;

        if (!column.layers) {
          column.layers = [];
        }

        if (action === 'push') {
          layer = {
            color: column.color
          };
        }

        column.layers[action](layer);
      });
    });
  }

  layerSequenceRecalculation() {
    this.listLayers.forEach((item, index) => {
      const layer = item;
      const layerTitle = layer.querySelector('.layer__instance-title');
      layer.dataset.indexLayer = index;
      layerTitle.innerHTML = `${layerTitle.dataset.textTitle} - ${index + 1}`;
    });
  }

  swapLayers(firstLayer, secondLayer) {
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        const layer = sector.layers[firstLayer];
        sector.layers.splice(firstLayer, 1);
        sector.layers.splice(secondLayer, 0, layer);
      });
    });
  }

  moveLayer(direction) {
    const indexActiveLayer = +this.activeLayer.dataset.indexLayer;
    let nextLayer = null;
    let newIndexActiveLayer = indexActiveLayer;

    if (direction === 'up') {
      newIndexActiveLayer -= 1;
      nextLayer = this.listLayers[newIndexActiveLayer];
      nextLayer.before(this.activeLayer);
    } else {
      newIndexActiveLayer += 1;
      nextLayer = this.listLayers[newIndexActiveLayer];
      nextLayer.after(this.activeLayer);
    }

    nextLayer.dataset.indexLayer = indexActiveLayer;
    this.activeLayer.dataset.indexLayer = newIndexActiveLayer;
    this.listLayers = [...this.layerContainer.querySelectorAll('.layer__instance')];
    this.swapLayers(indexActiveLayer, newIndexActiveLayer);
  }

  mergeLayer() {
    const indexActiveLayer = +this.activeLayer.dataset.indexLayer;
    if (this.listLayers.length === 0) return;
    if (indexActiveLayer === this.listLayers.length - 1) return;
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        const firstColor = sector.layers[indexActiveLayer].color;
        const secondColor = sector.layers[indexActiveLayer + 1].color;

        if (firstColor === this.mainCanvas.defaultColor) {
          sector.layers[indexActiveLayer].color = secondColor;
        }
      });
    });
    this.deleteLayer(indexActiveLayer + 1);
  }

  deleteLayer(deleteLayerIndex = this.activeLayer.dataset.indexLayer) {
    let indexLayer = deleteLayerIndex;
    this.activeLayer = this.listLayers[indexLayer];
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.layers.splice(indexLayer, 1);

        if (sector.layers.length === 0) {
          sector.layers = undefined;
        }
      });
    });
    this.layerContainer.removeChild(this.activeLayer);
    this.listLayers.splice(indexLayer, 1);

    if (!this.listLayers.length) {
      this.mainCanvas.activeFrame.savingStateSectors();
      return;
    }

    this.layerSequenceRecalculation();
    indexLayer -= 1;
    if (indexLayer < 0) indexLayer = 0;
    this.mainCanvas.activeFrame.quantityLayer = this.listLayers.length;
    this.changeActiveLayer(indexLayer);
    this.mainCanvas.activeFrame.savingStateSectors();
  }

  addLayer(repeatBuild = false) {
    const copyLayerContent = this.layerSample.cloneNode(true);
    copyLayerContent.classList.remove('layer__instance_sample');
    copyLayerContent.dataset.indexLayer = this.listLayers.length;
    const layerTitle = copyLayerContent.querySelector('.layer__instance-title');
    layerTitle.innerHTML = `${layerTitle.dataset.textTitle} - ${this.listLayers.length + 1}`;
    this.layerContainer.appendChild(copyLayerContent);
    this.listLayers.push(copyLayerContent);

    if (this.activeLayer) {
      this.activeLayer.classList.remove('layer__instance_active');
    }

    this.mainCanvas.activeFrame.activeLayer = this.listLayers.length - 1;

    if (!repeatBuild) {
      this.mainCanvas.activeFrame.quantityLayer = this.listLayers.length;
      this.modificationListSectors('push');
    }

    const indexActiveLayer = this.mainCanvas.activeFrame.activeLayer;
    this.activeLayer = this.listLayers[indexActiveLayer];
    this.activeLayer.classList.add('layer__instance_active');
  }

}
// CONCATENATED MODULE: ./src/screens/resize-tool/index.js
class ResizeTool {
  constructor() {
    this.containerButtons = document.querySelector('.resize-tool');
    this.activeButton = this.containerButtons.querySelector('.resize-tool__button-size_active');
    this.listButtonSize = this.containerButtons.querySelectorAll('.resize-tool__button-size');
    this.size = this.activeButton.dataset.size;
    this.hotKey = null;
    this.createHotKey();
    this.changeStateButton = this.changeStateButton.bind(this);
    this.pendingForHotkey = this.pendingForHotkey.bind(this);
    document.addEventListener('click', this.changeStateButton);
    document.addEventListener('keypress', this.pendingForHotkey);
  }

  pendingForHotkey(event) {
    const newKey = String.fromCharCode(event.keyCode).toLowerCase();
    const objKeys = Object.keys(this.hotKey);
    objKeys.forEach(key => {
      const hotKey = this.hotKey[key].key.toLowerCase();

      if (hotKey === newKey) {
        const arg = this.hotKey[key].arguments;
        const {
          action
        } = this.hotKey[key];
        this[action](arg);
      }
    });
  }

  createHotKey() {
    this.hotKey = {
      size1: {
        key: null,
        arguments: 1,
        action: 'changeStateButton'
      },
      size2: {
        key: null,
        arguments: 2,
        action: 'changeStateButton'
      },
      size3: {
        key: null,
        arguments: 3,
        action: 'changeStateButton'
      },
      size4: {
        key: null,
        arguments: 4,
        action: 'changeStateButton'
      }
    };
  }

  changeStateButton(event) {
    let el;

    if (typeof event === 'number') {
      el = this.listButtonSize[event - 1];
    } else {
      el = event.target;
    }

    if (this.containerButtons.contains(el)) {
      this.activeButton.classList.remove('resize-tool__button-size_active');
      el.classList.add('resize-tool__button-size_active');
      this.activeButton = el;
      this.size = this.activeButton.dataset.size;
    }
  }

}
// CONCATENATED MODULE: ./src/screens/color-palette/index.js
class ColorPallete {
  constructor() {
    this.colorPrimary = document.querySelector('.color-palette-container__input_primary');
    this.colorPrimaryColor = this.colorPrimary.value;
    this.colorSecondary = document.querySelector('.color-palette-container__input_secondary');
    this.changeColor = this.changeColor.bind(this);
    this.colorPrimary.addEventListener('change', event => {
      const inputEl = event.target;
      Promise.resolve().then(() => {
        this.changeColor(inputEl.value);
      });
    });
  }

  changeColor(color) {
    this.colorSecondary.value = this.colorPrimaryColor;
    this.colorPrimary.value = color;
    this.colorPrimaryColor = this.colorPrimary.value;
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/basic-tool/index.js
class BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool) {
    this.mainCanvas = mainCanvas;
    this.state = false;
    this.mouseButtonNumber = 0;
    this.resizeTool = resizeTool;
    this.sizeTool = this.resizeTool.size;
    this.permissionUseArea = true;
    this.event = null;
    this.lastMouseSector = null;
    this.colorPallete = colorPallete;
    this.colorPrimary = colorPallete.colorPrimary;
    this.colorSecondary = colorPallete.colorSecondary;
    this.toolCSSClass = toolCSSClass;
    this.toolButton = document.querySelector(`.${this.toolCSSClass}`);
    this.hotKey = null;
    this.lastClickCoordinates = null;
    this.stateChange = this.stateChange.bind(this);
    this.subscribeEvents = this.subscribeEvents.bind(this);
    this.unsubscribeEvents = this.unsubscribeEvents.bind(this);
    this.useActiveTool = this.useActiveTool.bind(this);
    this.pendingForHotkey = this.pendingForHotkey.bind(this);
    this.mainCanvas.canvas.addEventListener('mousedown', this.subscribeEvents);
    this.mainCanvas.canvas.addEventListener('mouseout', () => {
      this.lastClickCoordinates = null;
    });
    this.mainCanvas.canvas.addEventListener('contextmenu', event => {
      event.preventDefault();
    });
    document.addEventListener('click', this.stateChange);
    document.addEventListener('keypress', this.pendingForHotkey);
  }

  pendingForHotkey(event) {
    const key = String.fromCharCode(event.keyCode).toLowerCase();

    if (key === this.hotKey) {
      this.state = true;
      this.toolButton.classList.add('instrument-item__img_active');
    } else if (BasicTool.checkHotkeyForTools(key)) {
      this.state = false;
      this.toolButton.classList.remove('instrument-item__img_active');
    }
  }

  static checkHotkeyForTools(key) {
    let result = false;
    window.listTools.forEach(item => {
      const toolHotKey = item.hotKey;

      if (toolHotKey === key) {
        result = true;
      }
    });
    return result;
  }

  findAllPointsLine(startX, startY, endX, endY) {
    const sector = this.mainCanvas.listSectors[0][0];
    const widthSector = sector.w;
    const heightSector = sector.h;
    const result = new Set();
    const resultInArr = [];
    const time = Math.max(Math.abs(startX - endX), Math.abs(startY - endY)) / 4.5;

    for (let i = 0; i < time; i += 1) {
      const delta = i / time;
      let x = delta * (endX - startX) + startX;
      x -= x % widthSector;
      let y = delta * (endY - startY) + startY;
      y -= y % heightSector;
      result.add(JSON.stringify({
        x,
        y
      }));
    }

    result.forEach(item => {
      resultInArr.push(JSON.parse(item));
    });
    return resultInArr;
  }

  crossingSectorCheck(x, y) {
    const sector = this.mainCanvas.listSectors[0][0];
    const widthSector = sector.w;
    const heightSector = sector.h;
    const coordSectorX = Math.floor(x / widthSector);
    let coordSectorY = Math.floor(y / heightSector);

    if (coordSectorY > this.mainCanvas.listSectors.length - 1) {
      coordSectorY = this.mainCanvas.listSectors.length - 1;
    }

    return this.mainCanvas.listSectors[coordSectorY][coordSectorX];
  }

  applicationToolAreaSector(sector) {
    const startRow = sector.indexRow - Math.floor(this.sizeTool / 2);
    const endRow = sector.indexRow + Math.ceil(this.sizeTool / 2);
    const startColumn = sector.indexColumn - Math.floor(this.sizeTool / 2);
    const endColumn = sector.indexColumn + Math.ceil(this.sizeTool / 2);
    const {
      listSectors
    } = this.mainCanvas;
    const result = [];

    for (let row = startRow; row < endRow; row += 1) {
      for (let column = startColumn; column < endColumn; column += 1) {
        const conditionRow = row < listSectors.length && row >= 0;
        const conditionColumn = column < listSectors[0].length && column >= 0;

        if (conditionRow && conditionColumn) {
          result.push(listSectors[row][column]);
        }
      }
    }

    return result;
  }

  applicationToolSector(x, y) {
    this.sizeTool = this.resizeTool.size;
    let sectors = [this.crossingSectorCheck(x, y)];
    if (!sectors[0]) return;

    if (this.sizeTool > 1 && this.permissionUseArea) {
      sectors = this.applicationToolAreaSector(...sectors);
    }

    if (this.use) {
      this.colorPrimary = this.colorPallete.colorPrimary;
      this.colorSecondary = this.colorPallete.colorSecondary;
      sectors.forEach(sector => {
        this.use(sector);
      });
    }
  }

  applicationByArea(listSector) {
    const allCrossedAreaSector = new Set();
    listSector.forEach(item => {
      const areaSector = this.applicationToolAreaSector(item);
      areaSector.forEach(sector => {
        allCrossedAreaSector.add(sector);
      });
    });
    allCrossedAreaSector.forEach(item => {
      listSector.add(item);
    });
  }

  applyColorBeforeChange(listSector) {
    listSector.forEach(item => {
      const sector = item;
      sector.color = sector.previousColor;
      this.mainCanvas.drawingElements(sector, true);
    });
  }

  static rememberColorBeforeChanging(listSector) {
    listSector.forEach(item => {
      const sector = item;
      sector.previousColor = sector.color;
    });
  }

  useActiveTool(event) {
    this.typeEvent = event.type;
    const x = event.pageX - this.mainCanvas.canvas.getBoundingClientRect().left;
    const y = event.pageY - this.mainCanvas.canvas.getBoundingClientRect().top;

    if (this.lastClickCoordinates) {
      const lastCordX = this.lastClickCoordinates.x;
      const lastCordY = this.lastClickCoordinates.y;
      const allPointsLine = this.findAllPointsLine(lastCordX, lastCordY, x, y);
      allPointsLine.forEach(item => {
        this.applicationToolSector(item.x, item.y);
      });
    } else {
      this.applicationToolSector(x, y);
    }

    this.lastClickCoordinates = {
      x,
      y
    };
  }

  unsubscribeEvents(event) {
    this.lastMouseSector = null;
    this.lastClickCoordinates = null;
    this.useActiveTool(event);
    this.mainCanvas.canvas.removeEventListener('mousemove', this.useActiveTool);
    document.removeEventListener('mouseup', this.unsubscribeEvents);
    this.lastClickCoordinates = null;
    this.mainCanvas.activeFrame.drawingElements();
  }

  subscribeEvents(event) {
    this.mouseButtonNumber = event.button;
    if (!this.state) return;
    this.useActiveTool(event);
    this.mainCanvas.canvas.addEventListener('mousemove', this.useActiveTool);
    document.addEventListener('mouseup', this.unsubscribeEvents);
  }

  stateChange(event) {
    const el = event.target;

    if (el.classList.contains('instrument-item__img')) {
      if (el.classList.contains(this.toolCSSClass)) {
        this.state = true;
        this.toolButton.classList.add('instrument-item__img_active');
      } else {
        this.state = false;
        this.toolButton.classList.remove('instrument-item__img_active');
      }
    }
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/pen/index.js

class pen_Pen extends BasicTool {
  use(item) {
    const sector = item;
    let color = this.colorPrimary.value;

    if (this.mouseButtonNumber > 0) {
      color = this.colorSecondary.value;
    }

    sector.color = color;
    this.mainCanvas.drawingElements(sector, true);
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/stroke/index.js

class stroke_Stroke extends BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool, pen) {
    super(toolCSSClass, mainCanvas, colorPallete, resizeTool);
    this.startingPoint = null;
    this.endPoint = null;
    this.allPointsLine = null;
    this.allCrossedSectors = null;
    this.startSector = null;
    this.hoverSector = null;
    this.pen = pen;
  }

  use(item) {
    if (this.typeEvent === 'mousedown') {
      this.startingPoint = {
        x: item.x,
        y: item.y
      };
      this.startSector = item;
    }

    if (this.typeEvent === 'mouseup') {
      this.allCrossedSectors = null;
    }

    if (this.typeEvent === 'mousemove') {
      this.hoverSector = item;

      if (this.allCrossedSectors) {
        this.applyColorBeforeChange(this.allCrossedSectors);
      }

      this.endPoint = {
        x: item.x,
        y: item.y
      };
      const allPointsLine = this.findAllPointsLine(this.startingPoint.x, this.startingPoint.y, this.endPoint.x, this.endPoint.y);
      this.allCrossedSectors = [];
      allPointsLine.forEach(point => {
        this.allCrossedSectors.push(this.crossingSectorCheck(point.x, point.y));
      });

      if (this.sizeTool > 1) {
        this.applicationByArea(this.allCrossedSectors);
      }

      this.allCrossedSectors.push(this.startSector, this.hoverSector);
      BasicTool.rememberColorBeforeChanging(this.allCrossedSectors);
      this.paintLine(this.allCrossedSectors);
    }
  }

  paintLine(allCrossedSectors) {
    allCrossedSectors.forEach(item => {
      this.pen.use(item);
      this.mainCanvas.drawingElements(item, true);
    });
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/rectangle/index.js

class rectangle_Rectangle extends BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool, pen) {
    super(toolCSSClass, mainCanvas, colorPallete, resizeTool);
    this.pen = pen;
    this.startingPoint = null;
    this.endPoint = null;
    this.startSector = null;
    this.hoverSector = null;
    this.rectangleSectors = null;
  }

  use(item) {
    if (this.typeEvent === 'mousedown') {
      this.startingPoint = {
        x: item.x,
        y: item.y
      };
      this.startSector = item;
    }

    if (this.typeEvent === 'mouseup') {
      this.rectangleSectors = null;
    }

    if (this.typeEvent === 'mousemove') {
      this.hoverSector = item;

      if (this.rectangleSectors) {
        this.applyColorBeforeChange(this.rectangleSectors);
      }

      this.endPoint = {
        x: item.x,
        y: item.y
      };
      this.createBorder();
      BasicTool.rememberColorBeforeChanging(this.rectangleSectors);
      this.paintLine(this.rectangleSectors);
    }
  }

  findSectorOnLine(x1, y1, x2, y2) {
    const startPoint = this.crossingSectorCheck(x1, y1);
    const endPoint = this.crossingSectorCheck(x2, y2);
    let crossedSectors = [];
    const indexRow1 = Math.min(startPoint.indexRow, endPoint.indexRow);
    let indexRow2 = Math.max(startPoint.indexRow, endPoint.indexRow);
    const indexColumn1 = Math.min(startPoint.indexColumn, endPoint.indexColumn);
    let indexColumn2 = Math.max(startPoint.indexColumn, endPoint.indexColumn);

    if (startPoint.indexColumn > endPoint.indexColumn) {
      indexColumn2 += 1;
    }

    if (startPoint.indexRow > endPoint.indexRow) {
      indexRow2 += 1;
    }

    if (y1 === y2) {
      crossedSectors = this.mainCanvas.listSectors[indexRow1].slice(indexColumn1, indexColumn2);
    } else {
      for (let i = indexRow1; i < indexRow2; i += 1) {
        crossedSectors.push(this.mainCanvas.listSectors[i][indexColumn1]);
      }
    }

    crossedSectors.push(this.startSector, this.hoverSector);
    return crossedSectors;
  }

  paintLine(allCrossedSectors) {
    allCrossedSectors.forEach(item => {
      this.pen.use(item);
      this.mainCanvas.drawingElements(item, true);
    });
  }

  createBorder() {
    const topBorder = this.findSectorOnLine(this.startingPoint.x, this.startingPoint.y, this.endPoint.x, this.startingPoint.y);
    const bottomBorder = this.findSectorOnLine(this.startingPoint.x, this.endPoint.y, this.endPoint.x, this.endPoint.y);
    const leftBorder = this.findSectorOnLine(this.startingPoint.x, this.startingPoint.y, this.startingPoint.x, this.endPoint.y);

    if (this.endPoint.y > this.startingPoint.y) {
      const {
        height
      } = this.mainCanvas.canvas;
      const {
        quantitySectorsY
      } = this.mainCanvas;
      const sectorHeight = height / quantitySectorsY;
      this.endPoint.y += sectorHeight;
    }

    const rightBorder = this.findSectorOnLine(this.endPoint.x, this.startingPoint.y, this.endPoint.x, this.endPoint.y);
    this.rectangleSectors = new Set([...topBorder, ...bottomBorder, ...leftBorder, ...rightBorder]);

    if (this.sizeTool > 1) {
      this.applicationByArea(this.rectangleSectors);
    }
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/move/index.js

class move_Move extends BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool) {
    super(toolCSSClass, mainCanvas, colorPallete, resizeTool);
    this.startingPoint = null;
    this.endPoint = null;
    this.imageCanvas = null;
    this.mainCanvasCtx = this.mainCanvas.canvas.getContext('2d');
    this.shiftCanvasX = null;
    this.shiftCanvasY = null;
  }

  use(item) {
    if (this.typeEvent === 'mousedown') {
      this.startingPoint = item;
      this.imageCanvas = this.mainCanvasCtx.getImageData(0, 0, this.mainCanvas.canvas.width, this.mainCanvas.canvas.height);
      this.shiftCanvasX = this.startingPoint.x;
      this.shiftCanvasY = this.startingPoint.y;
    }

    if (this.typeEvent === 'mousemove') {
      if (this.endPoint === item) return;
      this.mainCanvasCtx.clearRect(0, 0, this.mainCanvas.canvas.width, this.mainCanvas.canvas.height);
      this.endPoint = item;
      const x = this.endPoint.x - this.shiftCanvasX;
      const y = this.endPoint.y - this.shiftCanvasY;
      this.mainCanvasCtx.putImageData(this.imageCanvas, x, y);
    }

    if (this.typeEvent === 'mouseup') {
      if (!this.endPoint) return;
      this.calculateNewColorSectors();
      this.endPoint = null;
    }
  }

  calculateNewColorSectors() {
    const shiftRow = this.endPoint.indexRow - this.startingPoint.indexRow;
    const shiftColumn = this.endPoint.indexColumn - this.startingPoint.indexColumn;
    const newListSectors = JSON.parse(JSON.stringify(this.mainCanvas.listSectors));
    newListSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.color = this.mainCanvas.defaultColor;
      });
    });
    this.mainCanvas.listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        const newRow = sector.indexRow + shiftRow;
        const newColumn = sector.indexColumn + shiftColumn;
        sector.indexRow = newRow;
        sector.indexColumn = newColumn;
        sector.x = newColumn * sector.w;
        sector.y = newRow * sector.h;
        if (newRow >= newListSectors.length || newRow < 0) return;
        if (newColumn >= newListSectors[newRow].length || newColumn < 0) return;
        newListSectors[newRow][newColumn] = JSON.parse(JSON.stringify(sector));
      });
    });
    this.mainCanvas.listSectors = newListSectors;
    this.mainCanvas.drawingAllElements();
  }

}
// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(3);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./src/screens/instruments/lighten/index.js


class lighten_Lighten extends BasicTool {
  use(item) {
    if (this.lastMouseSector === item) return;
    if (this.typeEvent === 'mouseup') return;
    const sector = item;
    let {
      color
    } = sector;
    let stepChangeColor = 3;
    if (color === this.mainCanvas.defaultColor) return;

    if (this.sizeTool > 1) {
      stepChangeColor = 0.3;
    }

    if (this.mouseButtonNumber > 0) {
      color = tinycolor_default()(color).lighten(stepChangeColor);
    } else {
      color = tinycolor_default()(color).darken(stepChangeColor);
    }

    color = color.toHexString();
    sector.color = color;
    this.mainCanvas.drawingElements(sector, true);
    this.lastMouseSector = sector;
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/dithering/index.js

class dithering_Dithering extends BasicTool {
  use(item) {
    const sector = item;
    let color = this.colorPrimary.value;
    const conditionRow = sector.indexRow % 2 === 0;
    const conditionColumn = sector.indexColumn % 2 === 0;
    const conditionMouseButton = this.mouseButtonNumber > 0;

    if (!conditionRow && !conditionColumn || conditionRow && conditionColumn) {
      color = this.colorPrimary.value;

      if (conditionMouseButton) {
        color = this.colorSecondary.value;
      }
    }

    if (!conditionRow && conditionColumn || conditionRow && !conditionColumn) {
      color = this.colorSecondary.value;

      if (conditionMouseButton) {
        color = this.colorPrimary.value;
      }
    }

    sector.color = color;
    this.mainCanvas.drawingElements(sector, true);
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/eraser/index.js

class eraser_Eraser extends BasicTool {
  use(item) {
    const sector = item;
    sector.color = this.mainCanvas.defaultColor;
    this.mainCanvas.drawingElements(sector, true);
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/pipette-color/index.js

class pipette_color_PipetteColor extends BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool) {
    super(toolCSSClass, mainCanvas, colorPallete, resizeTool);
    this.permissionUseArea = false;
  }

  use(item) {
    if (this.typeEvent === 'mouseup') {
      const sector = item;
      const {
        color
      } = sector;
      this.colorPallete.changeColor(color);
    }
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/paint-bucket/index.js

class paint_bucket_PaintBucket extends BasicTool {
  constructor(toolCSSClass, mainCanvas, colorPallete, resizeTool) {
    super(toolCSSClass, mainCanvas, colorPallete, resizeTool);
    this.permissionUseArea = false;
    this.listNeighbors = [];
    this.checkedSectors = 0;
    this.startingSector = null;
    this.sectorColor = null;
    this.color = null;
  }

  use(item) {
    if (this.typeEvent === 'mouseup') {
      this.chengSectorColor = this.chengSectorColor.bind(this);
      this.listNeighbors = [];
      this.checkedSectors = 0;
      this.startingSector = item;
      this.sectorColor = this.startingSector.color;
      this.color = this.colorPrimary.value;

      if (this.mouseButtonNumber > 0) {
        this.color = this.colorSecondary.value;
      }

      this.identifyingNeighbors();
      this.findingNeighborsWithSameColor(this.startingSector);
      this.deleteNeighbors();
    }
  }

  identifyingNeighbors() {
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        let previousSectorX = null;
        let previousSectorY = null;
        let nextSectorX = null;
        let nextSectorY = null;

        if (indexRow > 0) {
          previousSectorY = listSectors[indexRow - 1][indexColumn];
        }

        if (indexColumn > 0) {
          previousSectorX = listSectors[indexRow][indexColumn - 1];
        }

        if (indexColumn + 1 < row.length) {
          nextSectorX = listSectors[indexRow][indexColumn + 1];
        }

        if (indexRow + 1 < listSectors.length) {
          nextSectorY = listSectors[indexRow + 1][indexColumn];
        }

        const sector = column;
        sector.neighbors = [previousSectorX, nextSectorX, previousSectorY, nextSectorY];
        sector.neighbors = sector.neighbors.filter(neighbor => {
          if (neighbor) return neighbor;
          return false;
        });
      });
    });
  }

  deleteNeighbors() {
    const {
      listSectors
    } = this.mainCanvas;
    listSectors.forEach(row => {
      row.forEach(column => {
        const sector = column;
        delete sector.neighbors;
      });
    });
  }

  chengSectorColor(item) {
    const neighbor = item;

    if (neighbor.color === this.sectorColor) {
      neighbor.color = this.color;
      this.mainCanvas.drawingElements(neighbor, true);
      this.listNeighbors.push(neighbor);
    }
  }

  findingNeighborsWithSameColor(startingSector) {
    this.listNeighbors.push(...startingSector.neighbors);
    this.listNeighbors = this.listNeighbors.filter(item => item.color === this.sectorColor);

    while (this.listNeighbors.length > 0) {
      if (this.checkedSectors > this.mainCanvas.totalQuantitySectors + 1) {
        this.listNeighbors = [];
        break;
      }

      this.checkedSectors += 1;
      const tempNode = this.listNeighbors.shift();
      tempNode.neighbors.forEach(this.chengSectorColor);
    }

    this.startingSector.color = this.color;
    this.mainCanvas.drawingElements(startingSector, true);
  }

}
// CONCATENATED MODULE: ./src/screens/instruments/paint-all-pixels/index.js

class paint_all_pixels_PaintAllPixels extends BasicTool {
  use() {
    let color = this.colorPrimary.value;

    if (this.mouseButtonNumber > 0) {
      color = this.colorSecondary.value;
    }

    this.mainCanvas.listSectors.forEach(row => {
      row.forEach(item => {
        const sector = item;
        sector.color = color;
      });
    });
    this.mainCanvas.drawingAllElements();
  }

}
// CONCATENATED MODULE: ./src/screens/hotkeys/index.js
class HotKeys {
  constructor(listComponents) {
    this.listComponents = listComponents;
    this.hotkeysButton = document.querySelector('.hotkeys');
    this.hotKeysContainer = this.hotkeysButton.querySelector('.hotkeys__container');
    this.hotkeysButtonClose = this.hotKeysContainer.querySelector('.hotkeys__close');
    this.hotkeysInputWrappers = this.hotkeysButton.querySelectorAll('.hotkeys__input-wrapper');
    this.activeInput = null;
    this.listHotKeys = new Set();
    this.pendingPressed = false;
    this.changeHotkey = this.changeHotkey.bind(this);
    this.pendingNewKey = this.pendingNewKey.bind(this);
    this.openHotKeysContainer = this.openHotKeysContainer.bind(this);
    this.hotkeysButton.addEventListener('click', this.openHotKeysContainer);
    this.addDefaultKey();
  }

  addDefaultKey() {
    [...this.hotkeysInputWrappers].forEach(item => {
      const inputHotKey = item.querySelector('.hotkeys__input');
      const key = inputHotKey.dataset.defaultKey;
      this.activeInput = inputHotKey;
      this.makeChangesHotkeys(key);
      item.addEventListener('click', this.changeHotkey);
    });
  }

  static preventPopUpKeypress(event) {
    event.stopPropagation();
  }

  openHotKeysContainer(event) {
    const {
      target
    } = event;

    if (target === this.hotkeysButton || target === this.hotkeysButtonClose) {
      this.hotKeysContainer.classList.toggle('hotkeys__container_open');

      if (this.pendingPressed) {
        this.removeActiveInput();
      }

      if (this.hotKeysContainer.classList.contains('hotkeys__container_open')) {
        document.body.addEventListener('keypress', HotKeys.preventPopUpKeypress);
      } else {
        document.body.removeEventListener('keypress', HotKeys.preventPopUpKeypress);
      }
    }
  }

  changeHotkey(event) {
    this.removeActiveInput();
    const wrapper = event.currentTarget;
    const inputHotKey = wrapper.querySelector('.hotkeys__input');
    inputHotKey.classList.add('hotkeys__input_active');

    if (inputHotKey.classList.contains('hotkeys__input_err')) {
      inputHotKey.classList.remove('hotkeys__input_err');
    }

    this.activeInput = inputHotKey;
    this.pendingPressed = true;
    document.addEventListener('keyup', this.pendingNewKey);
  }

  findComponent(str) {
    console.log(this.listComponents);
    const name = str.toLowerCase();
    let result = null;
    this.listComponents.forEach(item => {
      const componentName = item.name.toLowerCase();

      if (name === componentName) {
        result = item.component;
      }
    });
    return result;
  }

  changeHotKeyComponent(input, nameComponent, newKey) {
    const component = this.findComponent(nameComponent);
    let {
      actionName
    } = input.dataset;

    if (actionName) {
      actionName = actionName.toLowerCase();
      component.hotKey[actionName].key = newKey;
    } else {
      component.hotKey = newKey;
    }
  }

  makeChangesHotkeys(newKey) {
    const previousHotKey = this.activeInput.innerHTML.toLowerCase();
    this.activeInput.innerHTML = newKey;
    const {
      nameComponent
    } = this.activeInput.dataset;
    this.changeHotKeyComponent(this.activeInput, nameComponent, newKey);
    const previousInput = this.listHotKeys[newKey];

    if (previousInput) {
      if (previousInput !== this.activeInput) {
        const previousNameComponent = previousInput.dataset.nameComponent;
        this.changeHotKeyComponent(previousInput, previousNameComponent, null);
        previousInput.classList.add('hotkeys__input_err');
        previousInput.innerHTML = '???';
        this.listHotKeys[newKey] = this.activeInput;
        this.listHotKeys[previousHotKey] = null;
      }
    } else {
      this.listHotKeys[previousHotKey] = null;
      this.listHotKeys.add(newKey);
      this.listHotKeys[newKey] = this.activeInput;
    }
  }

  pendingNewKey(event) {
    if (!this.activeInput) return;
    const newKey = String.fromCharCode(event.keyCode).toLowerCase();
    this.makeChangesHotkeys(newKey);
    this.removeActiveInput();
  }

  removeActiveInput() {
    if (!this.activeInput) return;
    this.activeInput.classList.remove('hotkeys__input_active');
    this.activeInput = null;
    this.pendingPressed = false;
    document.removeEventListener('keyup', this.learnNewKey);
  }

}
// EXTERNAL MODULE: ./node_modules/gifshot/dist/gifshot.js
var gifshot = __webpack_require__(4);
var gifshot_default = /*#__PURE__*/__webpack_require__.n(gifshot);

// CONCATENATED MODULE: ./src/screens/download-file/index.js

class download_file_ExportFile {
  constructor(mainCanvas, preview) {
    this.mainCanvas = mainCanvas;
    this.preview = preview;
    this.listPicturesFrames = null;
    this.exportContainer = document.querySelector('.export');
    this.exportLink = this.exportContainer.querySelector('.export__link');
    this.exportInput = this.exportContainer.querySelectorAll('.export__input');
    this.exportLoadingContainer = this.exportContainer.querySelector('.export__loading-container');
    this.gifWidth = null;
    this.gifHeight = null;
    this.gifName = null;
    this.exportInteraction = this.exportInteraction.bind(this);
    this.changeValueInputs = this.changeValueInputs.bind(this);
    [...this.exportInput].forEach(item => {
      item.addEventListener('keyup', this.changeValueInputs);

      if (item.dataset.dataType === 'number') {
        this[`gif${item.dataset.size}`] = +item.value;
      } else {
        this.gifName = item.value;
      }
    });
    document.addEventListener('click', this.exportInteraction);
  }

  changeValueInputs(event) {
    const input = event.target;

    if (input.dataset.dataType === 'number') {
      input.value = input.value.replace(/\D+/gi, '');

      if (+input.value > +input.dataset.sizeMax) {
        input.value = input.dataset.sizeMax;
      }

      if (+input.value < +input.dataset.sizeMin || input.value === '') {
        input.value = input.dataset.sizeMin;
      }

      this[`gif${input.dataset.size}`] = +input.value;
    } else {
      this.gifName = input.value;
    }
  }

  exportInteraction(event) {
    const el = event.target;

    if (el.classList.contains('export__link')) {
      this.createGIF(event);
    }

    if (el.classList.contains('export')) {
      this.openExportContainer();
    }
  }

  openExportContainer() {
    this.exportContainer.classList.toggle('export_open');
  }

  createListFrames() {
    this.listPicturesFrames = [];
    this.mainCanvas.listFrames.forEach(frame => {
      let img = getComputedStyle(frame.frameCanvas).backgroundImage.replace(/url\("/gi, '');
      img = img.replace(/"\)$/gi, '');
      this.listPicturesFrames.push(img);
    });
  }

  createGIF(event) {
    if (!event.isTrusted) {
      return;
    }

    this.exportLoadingContainer.classList.add('export__loading-container_open');

    if (this.exportLink.getAttribute('href') === '#') {
      event.preventDefault();
    }

    this.createListFrames();
    const fps = this.preview.fps / 1000;
    gifshot_default.a.createGIF({
      gifWidth: this.gifWidth,
      gifHeight: this.gifHeight,
      images: this.listPicturesFrames,
      interval: fps
    }, obj => {
      if (!obj.error) {
        const {
          image
        } = obj;
        this.exportLink.setAttribute('href', image);
        this.exportLink.setAttribute('download', `${this.gifName}.gif`);
        this.exportLink.click();
        this.exportLink.setAttribute('href', '#');
        this.exportLoadingContainer.classList.remove('export__loading-container_open');
      }
    });
  }

}
// CONCATENATED MODULE: ./src/app.js
/* eslint max-len: ["error", { "comments": 200 }] */

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "resizeCanvas || hotKeys || exportFile" }] */




















const canvas = document.querySelector('.main-canvas');

if (canvas) {
  const listComponents = [];
  window.listTools = [];
  const mainCanvas = new MainCanvas(0, 0, Frame);
  listComponents.push({
    component: mainCanvas,
    name: mainCanvas.constructor.name
  });
  const preview = new Preview(mainCanvas);
  const layer = new Layer(mainCanvas);
  const resizeCanvas = new ResizeCanvas(mainCanvas, LoadingSavedData, layer);
  const colorPallete = new ColorPallete();
  const resizeTool = new ResizeTool();
  listComponents.push({
    component: resizeTool,
    name: resizeTool.constructor.name
  });
  const toolPen = new pen_Pen('instrument-item__img_pen', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolPen,
    name: toolPen.constructor.name
  });
  window.listTools.push(toolPen);
  const toolStroke = new stroke_Stroke('instrument-item__img_stroke', mainCanvas, colorPallete, resizeTool, toolPen);
  listComponents.push({
    component: toolStroke,
    name: toolStroke.constructor.name
  });
  window.listTools.push(toolStroke);
  const toolRectangle = new rectangle_Rectangle('instrument-item__img_rectangle', mainCanvas, colorPallete, resizeTool, toolPen);
  listComponents.push({
    component: toolRectangle,
    name: toolRectangle.constructor.name
  });
  window.listTools.push(toolRectangle);
  const toolMove = new move_Move('instrument-item__img_move', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolMove,
    name: toolMove.constructor.name
  });
  window.listTools.push(toolMove);
  const toolLighten = new lighten_Lighten('instrument-item__img_lighten', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolLighten,
    name: toolLighten.constructor.name
  });
  window.listTools.push(toolLighten);
  const toolDithering = new dithering_Dithering('instrument-item__img_dithering', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolDithering,
    name: toolDithering.constructor.name
  });
  window.listTools.push(toolDithering);
  const toolEraser = new eraser_Eraser('instrument-item__img_eraser', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolEraser,
    name: toolEraser.constructor.name
  });
  window.listTools.push(toolEraser);
  const toolPipetteColor = new pipette_color_PipetteColor('instrument-item__img_pipette', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolPipetteColor,
    name: toolPipetteColor.constructor.name
  });
  window.listTools.push(toolPipetteColor);
  const toolPaintBucket = new paint_bucket_PaintBucket('instrument-item__img_bucket', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolPaintBucket,
    name: toolPaintBucket.constructor.name
  });
  window.listTools.push(toolPaintBucket);
  const toolPaintAllPixels = new paint_all_pixels_PaintAllPixels('instrument-item__img_paint-all-pixels', mainCanvas, colorPallete, resizeTool);
  listComponents.push({
    component: toolPaintAllPixels,
    name: toolPaintAllPixels.constructor.name
  });
  window.listTools.push(toolPaintAllPixels);
  const hotKeys = new HotKeys(listComponents);
  const exportFile = new download_file_ExportFile(mainCanvas, preview);
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map