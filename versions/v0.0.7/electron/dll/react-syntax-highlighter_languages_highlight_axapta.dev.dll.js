(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_axapta"],{

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/axapta.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Microsoft Axapta (now Dynamics 365)\nAuthor: Dmitri Roudakov <dmitri@roudakov.ru>\nWebsite: https://dynamics.microsoft.com/en-us/ax-overview/\nCategory: enterprise\n*/\n\n/** @type LanguageFn */\nfunction axapta(hljs) {\n  return {\n    name: 'Dynamics 365',\n    keywords: 'false int abstract private char boolean static null if for true ' +\n      'while long throw finally protected final return void enum else ' +\n      'break new catch byte super case short default double public try this switch ' +\n      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +\n      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +\n      'ttscommit str real date container anytype common div mod',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'meta',\n        begin: '#', end: '$'\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface', end: '{', excludeEnd: true,\n        illegal: ':',\n        contains: [\n          {beginKeywords: 'extends implements'},\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = axapta;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/axapta.js?");

/***/ })

}]);