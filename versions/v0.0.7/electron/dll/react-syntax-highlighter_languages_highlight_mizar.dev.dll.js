(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_mizar"],{

/***/ "./node_modules/highlight.js/lib/languages/mizar.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mizar.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Mizar\nDescription: The Mizar Language is a formal language derived from the mathematical vernacular.\nAuthor: Kelley van Evert <kelleyvanevert@gmail.com>\nWebsite: http://mizar.org/language/\nCategory: scientific\n*/\n\nfunction mizar(hljs) {\n  return {\n    name: 'Mizar',\n    keywords:\n      'environ vocabularies notations constructors definitions ' +\n      'registrations theorems schemes requirements begin end definition ' +\n      'registration cluster existence pred func defpred deffunc theorem ' +\n      'proof let take assume then thus hence ex for st holds consider ' +\n      'reconsider such that and in provided of as from be being by means ' +\n      'equals implies iff redefine define now not or attr is mode ' +\n      'suppose per cases set thesis contradiction scheme reserve struct ' +\n      'correctness compatibility coherence symmetry assymetry ' +\n      'reflexivity irreflexivity connectedness uniqueness commutativity ' +\n      'idempotence involutiveness projectivity',\n    contains: [\n      hljs.COMMENT('::', '$')\n    ]\n  };\n}\n\nmodule.exports = mizar;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/mizar.js?");

/***/ })

}]);