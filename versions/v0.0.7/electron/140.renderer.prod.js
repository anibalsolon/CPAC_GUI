(window.webpackJsonpCPAC=window.webpackJsonpCPAC||[]).push([[140],{"./node_modules/highlight.js/lib/languages/reasonml.js":function(e,n){e.exports=function(e){var n="~?[a-z$_][0-9a-zA-Z$_]*",a="`?[A-Z$_][0-9a-zA-Z$_]*",s="("+["||","&&","++","**","+.","*","/","*.","/.","...","|>"].map((function(e){return e.split("").map((function(e){return"\\"+e})).join("")})).join("|")+"|==|===)",i="\\s+"+s+"\\s+",l={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},r="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",t={className:"number",relevance:0,variants:[{begin:r},{begin:"\\(\\-"+r+"\\)"}]},c={className:"operator",relevance:0,begin:s},o=[{className:"identifier",relevance:0,begin:n},c,t],g=[e.QUOTE_STRING_MODE,c,{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",contains:[{className:"identifier",begin:a,relevance:0}]}],b=[{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:a,relevance:0}]}],d={className:"function",relevance:0,keywords:l,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:"~?[a-z$_][0-9a-zA-Z$_]*(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?"},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:n,end:"(,|\\n|\\))",relevance:0,contains:[c,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:b}]}]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};g.push(d);var m={className:"constructor",begin:a+"\\(",end:"\\)",illegal:"\\n",keywords:l,contains:[e.QUOTE_STRING_MODE,c,{className:"params",begin:"\\b"+n}]},u={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:l,end:"=>",relevance:0,contains:[m,c,{relevance:0,className:"constructor",begin:a}]},_={className:"module-access",keywords:l,returnBegin:!0,variants:[{begin:"\\b("+a+"\\.)+"+n},{begin:"\\b("+a+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[d,{begin:"\\(",end:"\\)",skip:!0}].concat(g)},{begin:"\\b("+a+"\\.)+{",end:"}"}],contains:g};return b.push(_),{name:"ReasonML",aliases:["re"],keywords:l,illegal:"(:\\-|:=|\\${|\\+=)",contains:[e.COMMENT("/\\*","\\*/",{illegal:"^(\\#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},e.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:o},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:o},m,{className:"operator",begin:i,illegal:"\\-\\->",relevance:0},t,e.C_LINE_COMMENT_MODE,u,d,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+a+"\\s+=\\s+{",end:"}",returnBegin:!0,keywords:l,relevance:0,contains:[{className:"module",relevance:0,begin:a},{begin:"{",end:"}",skip:!0}].concat(g)},_]}}}}]);