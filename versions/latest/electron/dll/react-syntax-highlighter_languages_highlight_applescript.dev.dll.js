(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_applescript"],{

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/applescript.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: AppleScript\nAuthors: Nathan Grigg <nathan@nathanamy.org>, Dr. Drang <drdrang@gmail.com>\nCategory: scripting\nWebsite: https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html\n*/\n\n/** @type LanguageFn */\nfunction applescript(hljs) {\n  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', end: '\\\\)',\n    contains: ['self', hljs.C_NUMBER_MODE, STRING]\n  };\n  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');\n  var COMMENT_MODE_2 = hljs.COMMENT(\n    '\\\\(\\\\*',\n    '\\\\*\\\\)',\n    {\n      contains: ['self', COMMENT_MODE_1] //allow nesting\n    }\n  );\n  var COMMENTS = [\n    COMMENT_MODE_1,\n    COMMENT_MODE_2,\n    hljs.HASH_COMMENT_MODE\n  ];\n\n  return {\n    name: 'AppleScript',\n    aliases: ['osascript'],\n    keywords: {\n      keyword:\n        'about above after against and around as at back before beginning ' +\n        'behind below beneath beside between but by considering ' +\n        'contain contains continue copy div does eighth else end equal ' +\n        'equals error every exit fifth first for fourth from front ' +\n        'get given global if ignoring in into is it its last local me ' +\n        'middle mod my ninth not of on onto or over prop property put ref ' +\n        'reference repeat returning script second set seventh since ' +\n        'sixth some tell tenth that the|0 then third through thru ' +\n        'timeout times to transaction try until where while whose with ' +\n        'without',\n      literal:\n        'AppleScript false linefeed return pi quote result space tab true',\n      built_in:\n        'alias application boolean class constant date file integer list ' +\n        'number real record string text ' +\n        'activate beep count delay launch log offset read round ' +\n        'run say summarize write ' +\n        'character characters contents day frontmost id item length ' +\n        'month name paragraph paragraphs rest reverse running time version ' +\n        'weekday word words year'\n    },\n    contains: [\n      STRING,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'built_in',\n        begin:\n          '\\\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +\n          'mount volume|path to|(close|open for) access|(get|set) eof|' +\n          'current date|do shell script|get volume settings|random number|' +\n          'set volume|system attribute|system info|time to GMT|' +\n          '(load|run|store) script|scripting components|' +\n          'ASCII (character|number)|localized string|' +\n          'choose (application|color|file|file name|' +\n          'folder|from list|remote application|URL)|' +\n          'display (alert|dialog))\\\\b|^\\\\s*return\\\\b'\n      },\n      {\n        className: 'literal',\n        begin:\n          '\\\\b(text item delimiters|current application|missing value)\\\\b'\n      },\n      {\n        className: 'keyword',\n        begin:\n          '\\\\b(apart from|aside from|instead of|out of|greater than|' +\n          \"isn't|(doesn't|does not) (equal|come before|come after|contain)|\" +\n          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +\n          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +\n          'POSIX path|(date|time) string|quoted form)\\\\b'\n      },\n      {\n        beginKeywords: 'on',\n        illegal: '[${=;\\\\n]',\n        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]\n      }\n    ].concat(COMMENTS),\n    illegal: '//|->|=>|\\\\[\\\\['\n  };\n}\n\nmodule.exports = applescript;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/applescript.js?");

/***/ })

}]);