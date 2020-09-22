(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_armasm"],{

/***/ "./node_modules/highlight.js/lib/languages/armasm.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/armasm.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: ARM Assembly\nAuthor: Dan Panzarella <alsoelp@gmail.com>\nDescription: ARM Assembly including Thumb and Thumb2 instructions\nCategory: assembler\n*/\n\n/** @type LanguageFn */\nfunction armasm(hljs) {\n    //local labels: %?[FB]?[AT]?\\d{1,2}\\w+\n\n  const COMMENT = {\n    variants: [\n      hljs.COMMENT('^[ \\\\t]*(?=#)', '$', {relevance: 0, excludeBegin: true }),\n      hljs.COMMENT('[;@]', '$', {relevance: 0}),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n    ]\n  };\n\n  return {\n    name: 'ARM Assembly',\n    case_insensitive: true,\n    aliases: ['arm'],\n    keywords: {\n      $pattern: '\\\\.?' + hljs.IDENT_RE,\n      meta:\n        //GNU preprocs\n        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+\n        //ARM directives\n        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',\n      built_in:\n        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers\n        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility\n        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp\n        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs\n        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc\n        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs\n\n        //program status registers\n        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+\n        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+\n\n        //NEON and VFP registers\n        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+\n        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+\n        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+\n        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +\n\n        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'\n    },\n    contains: [\n      {\n        className: 'keyword',\n        begin: '\\\\b('+     //mnemonics\n            'adc|'+\n            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+\n            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+\n            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+\n            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+\n            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+\n            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+\n            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+\n            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+\n            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+\n            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+\n            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+\n            'wfe|wfi|yield'+\n        ')'+\n        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes\n        '[sptrx]?' +                                             //legal postfixes\n        '(?=\\\\s)'                                                // followed by space\n      },\n      COMMENT,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'string',\n        begin: '\\'',\n        end: '[^\\\\\\\\]\\'',\n        relevance: 0\n      },\n      {\n        className: 'title',\n        begin: '\\\\|', end: '\\\\|',\n        illegal: '\\\\n',\n        relevance: 0\n      },\n      {\n        className: 'number',\n        variants: [\n            {begin: '[#$=]?0x[0-9a-f]+'}, //hex\n            {begin: '[#$=]?0b[01]+'},     //bin\n            {begin: '[#$=]\\\\d+'},        //literal\n            {begin: '\\\\b\\\\d+'}           //bare number\n        ],\n        relevance: 0\n      },\n      {\n        className: 'symbol',\n        variants: [\n            {begin: '^[ \\\\t]*[a-z_\\\\.\\\\$][a-z0-9_\\\\.\\\\$]+:'}, //GNU ARM syntax\n            {begin: '^[a-z_\\\\.\\\\$][a-z0-9_\\\\.\\\\$]+'}, //ARM syntax\n            {begin: '[=#]\\\\w+' }  //label reference\n        ],\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = armasm;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/armasm.js?");

/***/ })

}]);