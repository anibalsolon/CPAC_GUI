(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_matlab"],{

/***/ "./node_modules/highlight.js/lib/languages/matlab.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/matlab.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Matlab\nAuthor: Denis Bardadym <bardadymchik@gmail.com>\nContributors: Eugene Nizhibitsky <nizhibitsky@ya.ru>, Egor Rogov <e.rogov@postgrespro.ru>\nWebsite: https://www.mathworks.com/products/matlab.html\nCategory: scientific\n*/\n\n/*\n  Formal syntax is not published, helpful link:\n  https://github.com/kornilova-l/matlab-IntelliJ-plugin/blob/master/src/main/grammar/Matlab.bnf\n*/\nfunction matlab(hljs) {\n\n  var TRANSPOSE_RE = '(\\'|\\\\.\\')+';\n  var TRANSPOSE = {\n    relevance: 0,\n    contains: [\n      { begin: TRANSPOSE_RE }\n    ]\n  };\n\n  return {\n    name: 'Matlab',\n    keywords: {\n      keyword:\n        'arguments break case catch classdef continue else elseif end enumeration events for function ' +\n        'global if methods otherwise parfor persistent properties return spmd switch try while',\n      built_in:\n        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +\n        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +\n        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +\n        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +\n        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +\n        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +\n        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +\n        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +\n        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +\n        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +\n        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +\n        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +\n        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +\n        'rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table ' +\n        'readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun ' +\n        'legend intersect ismember procrustes hold num2cell '\n    },\n    illegal: '(//|\"|#|/\\\\*|\\\\s+/\\\\w+)',\n    contains: [\n      {\n        className: 'function',\n        beginKeywords: 'function', end: '$',\n        contains: [\n          hljs.UNDERSCORE_TITLE_MODE,\n          {\n            className: 'params',\n            variants: [\n              {begin: '\\\\(', end: '\\\\)'},\n              {begin: '\\\\[', end: '\\\\]'}\n            ]\n          }\n        ]\n      },\n      {\n        className: 'built_in',\n        begin: /true|false/,\n        relevance: 0,\n        starts: TRANSPOSE\n      },\n      {\n        begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,\n        relevance: 0\n      },\n      {\n        className: 'number',\n        begin: hljs.C_NUMBER_RE,\n        relevance: 0,\n        starts: TRANSPOSE\n      },\n      {\n        className: 'string',\n        begin: '\\'', end: '\\'',\n        contains: [\n          hljs.BACKSLASH_ESCAPE,\n          {begin: '\\'\\''}]\n      },\n      {\n        begin: /\\]|}|\\)/,\n        relevance: 0,\n        starts: TRANSPOSE\n      },\n      {\n        className: 'string',\n        begin: '\"', end: '\"',\n        contains: [\n          hljs.BACKSLASH_ESCAPE,\n          {begin: '\"\"'}\n        ],\n        starts: TRANSPOSE\n      },\n      hljs.COMMENT('^\\\\s*\\\\%\\\\{\\\\s*$', '^\\\\s*\\\\%\\\\}\\\\s*$'),\n      hljs.COMMENT('\\\\%', '$')\n    ]\n  };\n}\n\nmodule.exports = matlab;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/matlab.js?");

/***/ })

}]);