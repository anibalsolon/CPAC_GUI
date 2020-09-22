(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_livescript"],{

/***/ "./node_modules/highlight.js/lib/languages/livescript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/livescript.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("const KEYWORDS = [\n  \"as\", // for exports\n  \"in\",\n  \"of\",\n  \"if\",\n  \"for\",\n  \"while\",\n  \"finally\",\n  \"var\",\n  \"new\",\n  \"function\",\n  \"do\",\n  \"return\",\n  \"void\",\n  \"else\",\n  \"break\",\n  \"catch\",\n  \"instanceof\",\n  \"with\",\n  \"throw\",\n  \"case\",\n  \"default\",\n  \"try\",\n  \"switch\",\n  \"continue\",\n  \"typeof\",\n  \"delete\",\n  \"let\",\n  \"yield\",\n  \"const\",\n  \"class\",\n  // JS handles these with a special rule\n  // \"get\",\n  // \"set\",\n  \"debugger\",\n  \"async\",\n  \"await\",\n  \"static\",\n  \"import\",\n  \"from\",\n  \"export\",\n  \"extends\"\n];\nconst LITERALS = [\n  \"true\",\n  \"false\",\n  \"null\",\n  \"undefined\",\n  \"NaN\",\n  \"Infinity\"\n];\n\nconst TYPES = [\n  \"Intl\",\n  \"DataView\",\n  \"Number\",\n  \"Math\",\n  \"Date\",\n  \"String\",\n  \"RegExp\",\n  \"Object\",\n  \"Function\",\n  \"Boolean\",\n  \"Error\",\n  \"Symbol\",\n  \"Set\",\n  \"Map\",\n  \"WeakSet\",\n  \"WeakMap\",\n  \"Proxy\",\n  \"Reflect\",\n  \"JSON\",\n  \"Promise\",\n  \"Float64Array\",\n  \"Int16Array\",\n  \"Int32Array\",\n  \"Int8Array\",\n  \"Uint16Array\",\n  \"Uint32Array\",\n  \"Float32Array\",\n  \"Array\",\n  \"Uint8Array\",\n  \"Uint8ClampedArray\",\n  \"ArrayBuffer\"\n];\n\nconst ERROR_TYPES = [\n  \"EvalError\",\n  \"InternalError\",\n  \"RangeError\",\n  \"ReferenceError\",\n  \"SyntaxError\",\n  \"TypeError\",\n  \"URIError\"\n];\n\nconst BUILT_IN_GLOBALS = [\n  \"setInterval\",\n  \"setTimeout\",\n  \"clearInterval\",\n  \"clearTimeout\",\n\n  \"require\",\n  \"exports\",\n\n  \"eval\",\n  \"isFinite\",\n  \"isNaN\",\n  \"parseFloat\",\n  \"parseInt\",\n  \"decodeURI\",\n  \"decodeURIComponent\",\n  \"encodeURI\",\n  \"encodeURIComponent\",\n  \"escape\",\n  \"unescape\"\n];\n\nconst BUILT_IN_VARIABLES = [\n  \"arguments\",\n  \"this\",\n  \"super\",\n  \"console\",\n  \"window\",\n  \"document\",\n  \"localStorage\",\n  \"module\",\n  \"global\" // Node.js\n];\n\nconst BUILT_INS = [].concat(\n  BUILT_IN_GLOBALS,\n  BUILT_IN_VARIABLES,\n  TYPES,\n  ERROR_TYPES\n);\n\n/*\nLanguage: LiveScript\nAuthor: Taneli Vatanen <taneli.vatanen@gmail.com>\nContributors: Jen Evers-Corvina <jen@sevvie.net>\nOrigin: coffeescript.js\nDescription: LiveScript is a programming language that transcompiles to JavaScript. For info about language see http://livescript.net/\nWebsite: https://livescript.net\nCategory: scripting\n*/\n\nfunction livescript(hljs) {\n  var LIVESCRIPT_BUILT_INS = [\n    'npm',\n    'print'\n  ];\n  var LIVESCRIPT_LITERALS = [\n    'yes',\n    'no',\n    'on',\n    'off',\n    'it',\n    'that',\n    'void'\n  ];\n  var LIVESCRIPT_KEYWORDS = [\n    'then',\n    'unless',\n    'until',\n    'loop',\n    'of',\n    'by',\n    'when',\n    'and',\n    'or',\n    'is',\n    'isnt',\n    'not',\n    'it',\n    'that',\n    'otherwise',\n    'from',\n    'to',\n    'til',\n    'fallthrough',\n    'case',\n    'enum',\n    'native',\n    'list',\n    'map',\n    '__hasProp',\n    '__extends',\n    '__slice',\n    '__bind',\n    '__indexOf'\n  ];\n  var KEYWORDS$1 = {\n    keyword: KEYWORDS.concat(LIVESCRIPT_KEYWORDS).join(\" \"),\n    literal: LITERALS.concat(LIVESCRIPT_LITERALS).join(\" \"),\n    built_in: BUILT_INS.concat(LIVESCRIPT_BUILT_INS).join(\" \")\n  };\n  var JS_IDENT_RE = '[A-Za-z$_](?:\\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';\n  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});\n  var SUBST = {\n    className: 'subst',\n    begin: /#\\{/, end: /}/,\n    keywords: KEYWORDS$1\n  };\n  var SUBST_SIMPLE = {\n    className: 'subst',\n    begin: /#[A-Za-z$_]/, end: /(?:\\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,\n    keywords: KEYWORDS$1\n  };\n  var EXPRESSIONS = [\n    hljs.BINARY_NUMBER_MODE,\n    {\n      className: 'number',\n      begin: '(\\\\b0[xX][a-fA-F0-9_]+)|(\\\\b\\\\d(\\\\d|_\\\\d)*(\\\\.(\\\\d(\\\\d|_\\\\d)*)?)?(_*[eE]([-+]\\\\d(_\\\\d|\\\\d)*)?)?[_a-z]*)',\n      relevance: 0,\n      starts: {end: '(\\\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp\n    },\n    {\n      className: 'string',\n      variants: [\n        {\n          begin: /'''/, end: /'''/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /'/, end: /'/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /\"\"\"/, end: /\"\"\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]\n        },\n        {\n          begin: /\"/, end: /\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]\n        },\n        {\n          begin: /\\\\/, end: /(\\s|$)/,\n          excludeEnd: true\n        }\n      ]\n    },\n    {\n      className: 'regexp',\n      variants: [\n        {\n          begin: '//', end: '//[gim]*',\n          contains: [SUBST, hljs.HASH_COMMENT_MODE]\n        },\n        {\n          // regex can't start with space to parse x / 2 / 3 as two divisions\n          // regex can't start with *, and it supports an \"illegal\" in the main mode\n          begin: /\\/(?![ *])(\\\\\\/|.)*?\\/[gim]*(?=\\W)/\n        }\n      ]\n    },\n    {\n      begin: '@' + JS_IDENT_RE\n    },\n    {\n      begin: '``', end: '``',\n      excludeBegin: true, excludeEnd: true,\n      subLanguage: 'javascript'\n    }\n  ];\n  SUBST.contains = EXPRESSIONS;\n\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', returnBegin: true,\n    /* We need another contained nameless mode to not have every nested\n    pair of parens to be called \"params\" */\n    contains: [\n      {\n        begin: /\\(/, end: /\\)/,\n        keywords: KEYWORDS$1,\n        contains: ['self'].concat(EXPRESSIONS)\n      }\n    ]\n  };\n\n  var SYMBOLS = {\n    begin: '(#=>|=>|\\\\|>>|-?->|\\\\!->)'\n  };\n\n  return {\n    name: 'LiveScript',\n    aliases: ['ls'],\n    keywords: KEYWORDS$1,\n    illegal: /\\/\\*/,\n    contains: EXPRESSIONS.concat([\n      hljs.COMMENT('\\\\/\\\\*', '\\\\*\\\\/'),\n      hljs.HASH_COMMENT_MODE,\n      SYMBOLS, // relevance booster\n      {\n        className: 'function',\n        contains: [TITLE, PARAMS],\n        returnBegin: true,\n        variants: [\n          {\n            begin: '(' + JS_IDENT_RE + '\\\\s*(?:=|:=)\\\\s*)?(\\\\(.*\\\\))?\\\\s*\\\\B\\\\->\\\\*?', end: '\\\\->\\\\*?'\n          },\n          {\n            begin: '(' + JS_IDENT_RE + '\\\\s*(?:=|:=)\\\\s*)?!?(\\\\(.*\\\\))?\\\\s*\\\\B[-~]{1,2}>\\\\*?', end: '[-~]{1,2}>\\\\*?'\n          },\n          {\n            begin: '(' + JS_IDENT_RE + '\\\\s*(?:=|:=)\\\\s*)?(\\\\(.*\\\\))?\\\\s*\\\\B!?[-~]{1,2}>\\\\*?', end: '!?[-~]{1,2}>\\\\*?'\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class',\n        end: '$',\n        illegal: /[:=\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends',\n            endsWithParent: true,\n            illegal: /[:=\"\\[\\]]/,\n            contains: [TITLE]\n          },\n          TITLE\n        ]\n      },\n      {\n        begin: JS_IDENT_RE + ':', end: ':',\n        returnBegin: true, returnEnd: true,\n        relevance: 0\n      }\n    ])\n  };\n}\n\nmodule.exports = livescript;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/livescript.js?");

/***/ })

}]);