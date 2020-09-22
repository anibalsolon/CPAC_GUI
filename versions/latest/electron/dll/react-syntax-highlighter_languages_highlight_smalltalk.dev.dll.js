(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_smalltalk"],{

/***/ "./node_modules/highlight.js/lib/languages/smalltalk.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Smalltalk\nDescription: Smalltalk is an object-oriented, dynamically typed reflective programming language.\nAuthor: Vladimir Gubarkov <xonixx@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/Smalltalk\n*/\n\nfunction smalltalk(hljs) {\n  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';\n  var CHAR = {\n    className: 'string',\n    begin: '\\\\$.{1}'\n  };\n  var SYMBOL = {\n    className: 'symbol',\n    begin: '#' + hljs.UNDERSCORE_IDENT_RE\n  };\n  return {\n    name: 'Smalltalk',\n    aliases: ['st'],\n    keywords: 'self super nil true false thisContext', // only 6\n    contains: [\n      hljs.COMMENT('\"', '\"'),\n      hljs.APOS_STRING_MODE,\n      {\n        className: 'type',\n        begin: '\\\\b[A-Z][A-Za-z0-9_]*',\n        relevance: 0\n      },\n      {\n        begin: VAR_IDENT_RE + ':',\n        relevance: 0\n      },\n      hljs.C_NUMBER_MODE,\n      SYMBOL,\n      CHAR,\n      {\n        // This looks more complicated than needed to avoid combinatorial\n        // explosion under V8. It effectively means `| var1 var2 ... |` with\n        // whitespace adjacent to `|` being optional.\n        begin: '\\\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\\\|',\n        returnBegin: true, end: /\\|/,\n        illegal: /\\S/,\n        contains: [{begin: '(\\\\|[ ]*)?' + VAR_IDENT_RE}]\n      },\n      {\n        begin: '\\\\#\\\\(', end: '\\\\)',\n        contains: [\n          hljs.APOS_STRING_MODE,\n          CHAR,\n          hljs.C_NUMBER_MODE,\n          SYMBOL\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = smalltalk;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/smalltalk.js?");

/***/ })

}]);