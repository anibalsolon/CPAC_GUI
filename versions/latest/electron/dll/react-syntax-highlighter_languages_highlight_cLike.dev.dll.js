(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_cLike"],{

/***/ "./node_modules/highlight.js/lib/languages/c-like.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c-like.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: C-like foundation grammar for C/C++ grammars\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nContributors: Evgeny Stepanischev <imbolk@gmail.com>, Zaven Muradyan <megalivoithos@gmail.com>, Roel Deckers <admin@codingcat.nl>, Sam Wu <samsam2310@gmail.com>, Jordi Petit <jordi.petit@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, Google Inc. (David Benjamin) <davidben@google.com>\nCategory: common, system\n*/\n\n/* In the future the intention is to split out the C/C++ grammars distinctly\nsince they are separate languages.  They will likely share a common foundation\nthough, and this file sets the groundwork for that - so that we get the breaking\nchange in v10 and don't have to change the requirements again later.\n\nSee: https://github.com/highlightjs/highlight.js/issues/2146\n*/\n\n/** @type LanguageFn */\nfunction cLike(hljs) {\n  function optional(s) {\n    return '(?:' + s + ')?';\n  }\n  var DECLTYPE_AUTO_RE = 'decltype\\\\(auto\\\\)';\n  var NAMESPACE_RE = '[a-zA-Z_]\\\\w*::';\n  var TEMPLATE_ARGUMENT_RE = '<.*?>';\n  var FUNCTION_TYPE_RE = '(' +\n    DECLTYPE_AUTO_RE + '|' +\n    optional(NAMESPACE_RE) +'[a-zA-Z_]\\\\w*' + optional(TEMPLATE_ARGUMENT_RE) +\n  ')';\n  var CPP_PRIMITIVE_TYPES = {\n    className: 'keyword',\n    begin: '\\\\b[a-z\\\\d_]*_t\\\\b'\n  };\n\n  // https://en.cppreference.com/w/cpp/language/escape\n  // \\\\ \\x \\xFF \\u2837 \\u00323747 \\374\n  var CHARACTER_ESCAPES = '\\\\\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\\\S)';\n  var STRINGS = {\n    className: 'string',\n    variants: [\n      {\n        begin: '(u8?|U|L)?\"', end: '\"',\n        illegal: '\\\\n',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      {\n        begin: '(u8?|U|L)?\\'(' + CHARACTER_ESCAPES + \"|.)\", end: '\\'',\n        illegal: '.'\n      },\n      hljs.END_SAME_AS_BEGIN({\n        begin: /(?:u8?|U|L)?R\"([^()\\\\ ]{0,16})\\(/,\n        end: /\\)([^()\\\\ ]{0,16})\"/,\n      })\n    ]\n  };\n\n  var NUMBERS = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(0b[01\\']+)' },\n      { begin: '(-?)\\\\b([\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)(u|U|l|L|ul|UL|f|F|b|B)' },\n      { begin: '(-?)(\\\\b0[xX][a-fA-F0-9\\']+|(\\\\b[\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)([eE][-+]?[\\\\d\\']+)?)' }\n    ],\n    relevance: 0\n  };\n\n  var PREPROCESSOR =       {\n    className: 'meta',\n    begin: /#\\s*[a-z]+\\b/, end: /$/,\n    keywords: {\n      'meta-keyword':\n        'if else elif endif define undef warning error line ' +\n        'pragma _Pragma ifdef ifndef include'\n    },\n    contains: [\n      {\n        begin: /\\\\\\n/, relevance: 0\n      },\n      hljs.inherit(STRINGS, {className: 'meta-string'}),\n      {\n        className: 'meta-string',\n        begin: /<.*?>/, end: /$/,\n        illegal: '\\\\n',\n      },\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n\n  var TITLE_MODE = {\n    className: 'title',\n    begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,\n    relevance: 0\n  };\n\n  var FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\\\s*\\\\(';\n\n  var CPP_KEYWORDS = {\n    keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' +\n      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +\n      'unsigned long volatile static protected bool template mutable if public friend ' +\n      'do goto auto void enum else break extern using asm case typeid wchar_t ' +\n      'short reinterpret_cast|10 default double register explicit signed typename try this ' +\n      'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' +\n      'concept co_await co_return co_yield requires ' +\n      'noexcept static_assert thread_local restrict final override ' +\n      'atomic_bool atomic_char atomic_schar ' +\n      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +\n      'atomic_ullong new throw return ' +\n      'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',\n    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +\n      'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set ' +\n      'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos ' +\n      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +\n      'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +\n      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +\n      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +\n      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +\n      'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',\n    literal: 'true false nullptr NULL'\n  };\n\n  var EXPRESSION_CONTAINS = [\n    CPP_PRIMITIVE_TYPES,\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    NUMBERS,\n    STRINGS\n  ];\n\n  var EXPRESSION_CONTEXT = {\n    // This mode covers expression context where we can't expect a function\n    // definition and shouldn't highlight anything that looks like one:\n    // `return some()`, `else if()`, `(x*sum(1, 2))`\n    variants: [\n      {begin: /=/, end: /;/},\n      {begin: /\\(/, end: /\\)/},\n      {beginKeywords: 'new throw return else', end: /;/}\n    ],\n    keywords: CPP_KEYWORDS,\n    contains: EXPRESSION_CONTAINS.concat([\n      {\n        begin: /\\(/, end: /\\)/,\n        keywords: CPP_KEYWORDS,\n        contains: EXPRESSION_CONTAINS.concat(['self']),\n        relevance: 0\n      }\n    ]),\n    relevance: 0\n  };\n\n  var FUNCTION_DECLARATION = {\n    className: 'function',\n    begin: '(' + FUNCTION_TYPE_RE + '[\\\\*&\\\\s]+)+' + FUNCTION_TITLE,\n    returnBegin: true, end: /[{;=]/,\n    excludeEnd: true,\n    keywords: CPP_KEYWORDS,\n    illegal: /[^\\w\\s\\*&:<>]/,\n    contains: [\n\n      { // to prevent it from being confused as the function title\n        begin: DECLTYPE_AUTO_RE,\n        keywords: CPP_KEYWORDS,\n        relevance: 0,\n      },\n      {\n        begin: FUNCTION_TITLE, returnBegin: true,\n        contains: [TITLE_MODE],\n        relevance: 0\n      },\n      {\n        className: 'params',\n        begin: /\\(/, end: /\\)/,\n        keywords: CPP_KEYWORDS,\n        relevance: 0,\n        contains: [\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          STRINGS,\n          NUMBERS,\n          CPP_PRIMITIVE_TYPES,\n          // Count matching parentheses.\n          {\n            begin: /\\(/, end: /\\)/,\n            keywords: CPP_KEYWORDS,\n            relevance: 0,\n            contains: [\n              'self',\n              hljs.C_LINE_COMMENT_MODE,\n              hljs.C_BLOCK_COMMENT_MODE,\n              STRINGS,\n              NUMBERS,\n              CPP_PRIMITIVE_TYPES\n            ]\n          }\n        ]\n      },\n      CPP_PRIMITIVE_TYPES,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      PREPROCESSOR\n    ]\n  };\n\n  return {\n    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],\n    keywords: CPP_KEYWORDS,\n    // the base c-like language will NEVER be auto-detected, rather the\n    // derivitives: c, c++, arduino turn auto-detect back on for themselves\n    disableAutodetect: true,\n    illegal: '</',\n    contains: [].concat(\n      EXPRESSION_CONTEXT,\n      FUNCTION_DECLARATION,\n      EXPRESSION_CONTAINS,\n      [\n      PREPROCESSOR,\n      { // containers: ie, `vector <int> rooms (9);`\n        begin: '\\\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\\\s*<', end: '>',\n        keywords: CPP_KEYWORDS,\n        contains: ['self', CPP_PRIMITIVE_TYPES]\n      },\n      {\n        begin: hljs.IDENT_RE + '::',\n        keywords: CPP_KEYWORDS\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class struct', end: /[{;:]/,\n        contains: [\n          {begin: /</, end: />/, contains: ['self']}, // skip generic stuff\n          hljs.TITLE_MODE\n        ]\n      }\n    ]),\n    exports: {\n      preprocessor: PREPROCESSOR,\n      strings: STRINGS,\n      keywords: CPP_KEYWORDS\n    }\n  };\n}\n\nmodule.exports = cLike;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/c-like.js?");

/***/ })

}]);