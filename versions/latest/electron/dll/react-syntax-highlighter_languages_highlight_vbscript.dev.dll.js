(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_vbscript"],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: VBScript\nDescription: VBScript (\"Microsoft Visual Basic Scripting Edition\") is an Active Scripting language developed by Microsoft that is modeled on Visual Basic.\nAuthor: Nikita Ledyaev <lenikita@yandex.ru>\nContributors: Michal Gabrukiewicz <mgabru@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/VBScript\nCategory: scripting\n*/\n\nfunction vbscript(hljs) {\n  return {\n    name: 'VBScript',\n    aliases: ['vbs'],\n    case_insensitive: true,\n    keywords: {\n      keyword:\n        'call class const dim do loop erase execute executeglobal exit for each next function ' +\n        'if then else on error option explicit new private property let get public randomize ' +\n        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +\n        'class_initialize class_terminate default preserve in me byval byref step resume goto',\n      built_in:\n        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +\n        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +\n        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +\n        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +\n        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +\n        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +\n        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +\n        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +\n        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +\n        'chrw regexp server response request cstr err',\n      literal:\n        'true false null nothing empty'\n    },\n    illegal: '//',\n    contains: [\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '\"\"'}]}),\n      hljs.COMMENT(\n        /'/,\n        /$/,\n        {\n          relevance: 0\n        }\n      ),\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = vbscript;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/vbscript.js?");

/***/ })

}]);