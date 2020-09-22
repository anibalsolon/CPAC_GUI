(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_cal"],{

/***/ "./node_modules/highlight.js/lib/languages/cal.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cal.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: C/AL\nAuthor: Kenneth Fuglsang Christensen <kfuglsang@gmail.com>\nDescription: Provides highlighting of Microsoft Dynamics NAV C/AL code files\nWebsite: https://docs.microsoft.com/en-us/dynamics-nav/programming-in-c-al\n*/\n\n/** @type LanguageFn */\nfunction cal(hljs) {\n  var KEYWORDS =\n    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +\n    'until while with var';\n  var LITERALS = 'false true';\n  var COMMENT_MODES = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.COMMENT(\n      /\\{/,\n      /\\}/,\n      {\n        relevance: 0\n      }\n    ),\n    hljs.COMMENT(\n      /\\(\\*/,\n      /\\*\\)/,\n      {\n        relevance: 10\n      }\n    )\n  ];\n  var STRING = {\n    className: 'string',\n    begin: /'/, end: /'/,\n    contains: [{begin: /''/}]\n  };\n  var CHAR_STRING = {\n    className: 'string', begin: /(#\\d+)+/\n  };\n  var DATE = {\n      className: 'number',\n      begin: '\\\\b\\\\d+(\\\\.\\\\d+)?(DT|D|T)',\n      relevance: 0\n  };\n  var DBL_QUOTED_VARIABLE = {\n      className: 'string', // not a string technically but makes sense to be highlighted in the same style\n      begin: '\"',\n      end: '\"'\n  };\n\n  var PROCEDURE = {\n    className: 'function',\n    beginKeywords: 'procedure', end: /[:;]/,\n    keywords: 'procedure|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: /\\(/, end: /\\)/,\n        keywords: KEYWORDS,\n        contains: [STRING, CHAR_STRING]\n      }\n    ].concat(COMMENT_MODES)\n  };\n\n  var OBJECT = {\n    className: 'class',\n    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\\\d+) ([^\\\\r\\\\n]+)',\n    returnBegin: true,\n    contains: [\n      hljs.TITLE_MODE,\n        PROCEDURE\n    ]\n  };\n\n  return {\n    name: 'C/AL',\n    case_insensitive: true,\n    keywords: { keyword: KEYWORDS, literal: LITERALS },\n    illegal: /\\/\\*/,\n    contains: [\n      STRING, CHAR_STRING,\n      DATE, DBL_QUOTED_VARIABLE,\n      hljs.NUMBER_MODE,\n      OBJECT,\n      PROCEDURE\n    ]\n  };\n}\n\nmodule.exports = cal;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/cal.js?");

/***/ })

}]);