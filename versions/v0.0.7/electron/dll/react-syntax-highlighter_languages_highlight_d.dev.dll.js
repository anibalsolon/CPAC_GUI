(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_d"],{

/***/ "./node_modules/highlight.js/lib/languages/d.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/d.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: D\nAuthor: Aleksandar Ruzicic <aleksandar@ruzicic.info>\nDescription: D is a language with C-like syntax and static typing. It pragmatically combines efficiency, control, and modeling power, with safety and programmer productivity.\nVersion: 1.0a\nWebsite: https://dlang.org\nDate: 2012-04-08\n*/\n\n/**\n * Known issues:\n *\n * - invalid hex string literals will be recognized as a double quoted strings\n *   but 'x' at the beginning of string will not be matched\n *\n * - delimited string literals are not checked for matching end delimiter\n *   (not possible to do with js regexp)\n *\n * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)\n *   also, content of token string is not validated to contain only valid D tokens\n *\n * - special token sequence rule is not strictly following D grammar (anything following #line\n *   up to the end of line is matched as special token sequence)\n */\n\n/** @type LanguageFn */\nfunction d(hljs) {\n  /**\n   * Language keywords\n   *\n   * @type {Object}\n   */\n  var D_KEYWORDS = {\n    $pattern: hljs.UNDERSCORE_IDENT_RE,\n    keyword:\n      'abstract alias align asm assert auto body break byte case cast catch class ' +\n      'const continue debug default delete deprecated do else enum export extern final ' +\n      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +\n      'interface invariant is lazy macro mixin module new nothrow out override package ' +\n      'pragma private protected public pure ref return scope shared static struct ' +\n      'super switch synchronized template this throw try typedef typeid typeof union ' +\n      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +\n      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',\n    built_in:\n      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +\n      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +\n      'wstring',\n    literal:\n      'false null true'\n  };\n\n  /**\n   * Number literal regexps\n   *\n   * @type {String}\n   */\n  var decimal_integer_re = '(0|[1-9][\\\\d_]*)',\n    decimal_integer_nosus_re = '(0|[1-9][\\\\d_]*|\\\\d[\\\\d_]*|[\\\\d_]+?\\\\d)',\n    binary_integer_re = '0[bB][01_]+',\n    hexadecimal_digits_re = '([\\\\da-fA-F][\\\\da-fA-F_]*|_[\\\\da-fA-F][\\\\da-fA-F_]*)',\n    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,\n\n    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',\n    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\\\.\\\\d*|' + decimal_exponent_re + ')|' +\n                '\\\\d+\\\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +\n                '\\\\.' + decimal_integer_re + decimal_exponent_re + '?' +\n              ')',\n    hexadecimal_float_re = '(0[xX](' +\n                  hexadecimal_digits_re + '\\\\.' + hexadecimal_digits_re + '|'+\n                  '\\\\.?' + hexadecimal_digits_re +\n                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',\n\n    integer_re = '(' +\n      decimal_integer_re + '|' +\n      binary_integer_re  + '|' +\n       hexadecimal_integer_re   +\n    ')',\n\n    float_re = '(' +\n      hexadecimal_float_re + '|' +\n      decimal_float_re  +\n    ')';\n\n  /**\n   * Escape sequence supported in D string and character literals\n   *\n   * @type {String}\n   */\n  var escape_sequence_re = '\\\\\\\\(' +\n              '[\\'\"\\\\?\\\\\\\\abfnrtv]|' +  // common escapes\n              'u[\\\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint\n              '[0-7]{1,3}|' +       // one to three octal digit ascii char code\n              'x[\\\\dA-Fa-f]{2}|' +    // two hex digit ascii char code\n              'U[\\\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint\n              ')|' +\n              '&[a-zA-Z\\\\d]{2,};';      // named character entity\n\n  /**\n   * D integer number literals\n   *\n   * @type {Object}\n   */\n  var D_INTEGER_MODE = {\n    className: 'number',\n      begin: '\\\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',\n      relevance: 0\n  };\n\n  /**\n   * [D_FLOAT_MODE description]\n   * @type {Object}\n   */\n  var D_FLOAT_MODE = {\n    className: 'number',\n    begin: '\\\\b(' +\n        float_re + '([fF]|L|i|[fF]i|Li)?|' +\n        integer_re + '(i|[fF]i|Li)' +\n      ')',\n    relevance: 0\n  };\n\n  /**\n   * D character literal\n   *\n   * @type {Object}\n   */\n  var D_CHARACTER_MODE = {\n    className: 'string',\n    begin: '\\'(' + escape_sequence_re + '|.)', end: '\\'',\n    illegal: '.'\n  };\n\n  /**\n   * D string escape sequence\n   *\n   * @type {Object}\n   */\n  var D_ESCAPE_SEQUENCE = {\n    begin: escape_sequence_re,\n    relevance: 0\n  };\n\n  /**\n   * D double quoted string literal\n   *\n   * @type {Object}\n   */\n  var D_STRING_MODE = {\n    className: 'string',\n    begin: '\"',\n    contains: [D_ESCAPE_SEQUENCE],\n    end: '\"[cwd]?'\n  };\n\n  /**\n   * D wysiwyg and delimited string literals\n   *\n   * @type {Object}\n   */\n  var D_WYSIWYG_DELIMITED_STRING_MODE = {\n    className: 'string',\n    begin: '[rq]\"',\n    end: '\"[cwd]?',\n    relevance: 5\n  };\n\n  /**\n   * D alternate wysiwyg string literal\n   *\n   * @type {Object}\n   */\n  var D_ALTERNATE_WYSIWYG_STRING_MODE = {\n    className: 'string',\n    begin: '`',\n    end: '`[cwd]?'\n  };\n\n  /**\n   * D hexadecimal string literal\n   *\n   * @type {Object}\n   */\n  var D_HEX_STRING_MODE = {\n    className: 'string',\n    begin: 'x\"[\\\\da-fA-F\\\\s\\\\n\\\\r]*\"[cwd]?',\n    relevance: 10\n  };\n\n  /**\n   * D delimited string literal\n   *\n   * @type {Object}\n   */\n  var D_TOKEN_STRING_MODE = {\n    className: 'string',\n    begin: 'q\"\\\\{',\n    end: '\\\\}\"'\n  };\n\n  /**\n   * Hashbang support\n   *\n   * @type {Object}\n   */\n  var D_HASHBANG_MODE = {\n    className: 'meta',\n    begin: '^#!',\n    end: '$',\n    relevance: 5\n  };\n\n  /**\n   * D special token sequence\n   *\n   * @type {Object}\n   */\n  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {\n    className: 'meta',\n    begin: '#(line)',\n    end: '$',\n    relevance: 5\n  };\n\n  /**\n   * D attributes\n   *\n   * @type {Object}\n   */\n  var D_ATTRIBUTE_MODE = {\n    className: 'keyword',\n    begin: '@[a-zA-Z_][a-zA-Z_\\\\d]*'\n  };\n\n  /**\n   * D nesting comment\n   *\n   * @type {Object}\n   */\n  var D_NESTING_COMMENT_MODE = hljs.COMMENT(\n    '\\\\/\\\\+',\n    '\\\\+\\\\/',\n    {\n      contains: ['self'],\n      relevance: 10\n    }\n  );\n\n  return {\n    name: 'D',\n    keywords: D_KEYWORDS,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n        hljs.C_BLOCK_COMMENT_MODE,\n        D_NESTING_COMMENT_MODE,\n        D_HEX_STRING_MODE,\n        D_STRING_MODE,\n        D_WYSIWYG_DELIMITED_STRING_MODE,\n        D_ALTERNATE_WYSIWYG_STRING_MODE,\n        D_TOKEN_STRING_MODE,\n        D_FLOAT_MODE,\n        D_INTEGER_MODE,\n        D_CHARACTER_MODE,\n        D_HASHBANG_MODE,\n        D_SPECIAL_TOKEN_SEQUENCE_MODE,\n        D_ATTRIBUTE_MODE\n    ]\n  };\n}\n\nmodule.exports = d;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/d.js?");

/***/ })

}]);