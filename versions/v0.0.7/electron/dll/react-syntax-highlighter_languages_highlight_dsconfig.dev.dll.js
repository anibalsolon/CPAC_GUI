(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_dsconfig"],{

/***/ "./node_modules/highlight.js/lib/languages/dsconfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\n Language: dsconfig\n Description: dsconfig batch configuration language for LDAP directory servers\n Contributors: Jacob Childress <jacobc@gmail.com>\n Category: enterprise, config\n */\nfunction dsconfig(hljs) {\n  var QUOTED_PROPERTY = {\n    className: 'string',\n    begin: /\"/, end: /\"/\n  };\n  var APOS_PROPERTY = {\n    className: 'string',\n    begin: /'/, end: /'/\n  };\n  var UNQUOTED_PROPERTY = {\n    className: 'string',\n    begin: '[\\\\w-?]+:\\\\w+', end: '\\\\W',\n    relevance: 0\n  };\n  var VALUELESS_PROPERTY = {\n    className: 'string',\n    begin: '\\\\w+-?\\\\w+', end: '\\\\W',\n    relevance: 0\n  };\n\n  return {\n    keywords: 'dsconfig',\n    contains: [\n      {\n        className: 'keyword',\n        begin: '^dsconfig', end: '\\\\s', excludeEnd: true,\n        relevance: 10\n      },\n      {\n        className: 'built_in',\n        begin: '(list|create|get|set|delete)-(\\\\w+)', end: '\\\\s', excludeEnd: true,\n        illegal: '!@#$%^&*()',\n        relevance: 10\n      },\n      {\n        className: 'built_in',\n        begin: '--(\\\\w+)', end: '\\\\s', excludeEnd: true\n      },\n      QUOTED_PROPERTY,\n      APOS_PROPERTY,\n      UNQUOTED_PROPERTY,\n      VALUELESS_PROPERTY,\n      hljs.HASH_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = dsconfig;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/dsconfig.js?");

/***/ })

}]);