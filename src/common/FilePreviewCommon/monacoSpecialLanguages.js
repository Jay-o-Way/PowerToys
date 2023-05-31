// This file adds new languages to monaco

import { regDefinition } from './customLanguages/reg.js';

export async function registerAdditionalLanguages(monaco){
    await languageDefinitions();
    registerAdditionalLanguage("cppExt", [".ino", ".pde"], "cpp", monaco)
    registerAdditionalLanguage("xmlExt", [".xsd", ".wsdl", ".xslt", ".csproj", ".vcxproj", ".vbproj", ".fsproj"], "xml", monaco)
    registerAdditionalLanguage("jsonExt", [".vsconfig"], "json", monaco)
    registerAdditionalLanguage("txtExt", [".sln"], "txt", monaco)
    registerAdditionalLanguage("razorExt", [".razor"], "razor", monaco)
    registerAdditionalLanguage("logExt", [".log"], "log", monaco)
    registerAdditionalLanguage("vbExt", [".vbs"], "vb", monaco)
    registerAdditionalLanguage("iniExt", [".inf", ".gitconfig", ".gitattributes", ".editorconfig"], "ini", monaco)
    registerAdditionalNewLanguage("reg", [".reg"], regDefinition(), monaco)
}

// Language definitions taken from Monaco source code
async function languageDefinitions() {
    define("vs/basic-languages/cpp/cpp",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.language=t.conf=void 0,t.conf={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*#pragma\\s+region\\b"),end:new RegExp("^\\s*#pragma\\s+endregion\\b")}}},t.language={defaultToken:"",tokenPostfix:".cpp",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["abstract","amp","array","auto","bool","break","case","catch","char","class","const","constexpr","const_cast","continue","cpu","decltype","default","delegate","delete","do","double","dynamic_cast","each","else","enum","event","explicit","export","extern","false","final","finally","float","for","friend","gcnew","generic","goto","if","in","initonly","inline","int","interface","interior_ptr","internal","literal","long","mutable","namespace","new","noexcept","nullptr","__nullptr","operator","override","partial","pascal","pin_ptr","private","property","protected","public","ref","register","reinterpret_cast","restrict","return","safe_cast","sealed","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","tile_static","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","where","while","_asm","_based","_cdecl","_declspec","_fastcall","_if_exists","_if_not_exists","_inline","_multiple_inheritance","_pascal","_single_inheritance","_stdcall","_virtual_inheritance","_w64","__abstract","__alignof","__asm","__assume","__based","__box","__builtin_alignof","__cdecl","__clrcall","__declspec","__delegate","__event","__except","__fastcall","__finally","__forceinline","__gc","__hook","__identifier","__if_exists","__if_not_exists","__inline","__int128","__int16","__int32","__int64","__int8","__interface","__leave","__m128","__m128d","__m128i","__m256","__m256d","__m256i","__m64","__multiple_inheritance","__newslot","__nogc","__noop","__nounwind","__novtordisp","__pascal","__pin","__pragma","__property","__ptr32","__ptr64","__raise","__restrict","__resume","__sealed","__single_inheritance","__stdcall","__super","__thiscall","__try","__try_cast","__typeof","__unaligned","__unhook","__uuidof","__value","__virtual_inheritance","__w64","__wchar_t"],operators:["=",">","<","!","~","?",":","==","<=",">=","!=","&&","||","++","--","+","-","*","/","&","|","^","%","<<",">>",">>>","+=","-=","*=","/=","&=","|=","^=","%=","<<=",">>=",">>>="],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,encoding:/u|u8|U|L/,tokenizer:{root:[[/@encoding?R\"(?:([^ ()\\\t]*))\(/,{token:"string.raw.begin",next:"@raw.$1"}],[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[\[.*\]\]/,"annotation"],[/^\s*#include/,{token:"keyword.directive.include",next:"@include"}],[/^\s*#\s*\w+/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@doccomment"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],doccomment:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],raw:[[/(.*)(\))(?:([^ ()\\\t"]*))(\")/,{cases:{"$3==$S2":["string.raw","string.raw.end","string.raw.end",{token:"string.raw.end",next:"@pop"}],"@default":["string.raw","string.raw","string.raw","string.raw"]}}],[/.*/,"string.raw"]],include:[[/(\s*)(<)([^<>]*)(>)/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]],[/(\s*)(")([^"]*)(")/,["","keyword.directive.include.begin","string.include.identifier",{token:"keyword.directive.include.end",next:"@pop"}]]]}}}));
    define("vs/basic-languages/xml/xml",["require","exports","../fillers/monaco-editor-core"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.language=t.conf=void 0,t.conf={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:n.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:n.languages.IndentAction.Indent}}]},t.language={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}}}));
    define("vs/basic-languages/razor/razor", ["require", "exports", "../fillers/monaco-editor-core"], (function (e, t, r) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.language = t.conf = void 0; var o = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"]; t.conf = { wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g, comments: { blockComment: ["\x3c!--", "--\x3e"] }, brackets: [["\x3c!--", "--\x3e"], ["<", ">"], ["{", "}"], ["(", ")"]], autoClosingPairs: [{ open: "{", close: "}" }, { open: "[", close: "]" }, { open: "(", close: ")" }, { open: '"', close: '"' }, { open: "'", close: "'" }], surroundingPairs: [{ open: '"', close: '"' }, { open: "'", close: "'" }, { open: "<", close: ">" }], onEnterRules: [{ beforeText: new RegExp("<(?!(?:" + o.join("|") + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"), afterText: /^<\/(\w[\w\d]*)\s*>$/i, action: { indentAction: r.languages.IndentAction.IndentOutdent } }, { beforeText: new RegExp("<(?!(?:" + o.join("|") + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"), action: { indentAction: r.languages.IndentAction.Indent } }] }, t.language = { defaultToken: "", tokenPostfix: "", tokenizer: { root: [[/@@/], [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.root" }], [/<!DOCTYPE/, "metatag.html", "@doctype"], [/<!--/, "comment.html", "@comment"], [/(<)(\w+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]], [/(<)(script)/, ["delimiter.html", { token: "tag.html", next: "@script" }]], [/(<)(style)/, ["delimiter.html", { token: "tag.html", next: "@style" }]], [/(<)([:\w]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]], [/(<\/)(\w+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]], [/</, "delimiter.html"], [/[ \t\r\n]+/], [/[^<@]+/]], doctype: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }], [/[^>]+/, "metatag.content.html"], [/>/, "metatag.html", "@pop"]], comment: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }], [/-->/, "comment.html", "@pop"], [/[^-]+/, "comment.content.html"], [/./, "comment.content.html"]], otherTag: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.otherTag" }], [/\/?>/, "delimiter.html", "@pop"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/]], script: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.script" }], [/type/, "attribute.name", "@scriptAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, { token: "delimiter.html", next: "@scriptEmbedded.text/javascript", nextEmbedded: "text/javascript" }], [/[ \t\r\n]+/], [/(<\/)(script\s*)(>)/, ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]]], scriptAfterType: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.scriptAfterType" }], [/=/, "delimiter", "@scriptAfterTypeEquals"], [/>/, { token: "delimiter.html", next: "@scriptEmbedded.text/javascript", nextEmbedded: "text/javascript" }], [/[ \t\r\n]+/], [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]], scriptAfterTypeEquals: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.scriptAfterTypeEquals" }], [/"([^"]*)"/, { token: "attribute.value", switchTo: "@scriptWithCustomType.$1" }], [/'([^']*)'/, { token: "attribute.value", switchTo: "@scriptWithCustomType.$1" }], [/>/, { token: "delimiter.html", next: "@scriptEmbedded.text/javascript", nextEmbedded: "text/javascript" }], [/[ \t\r\n]+/], [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]], scriptWithCustomType: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.scriptWithCustomType.$S2" }], [/>/, { token: "delimiter.html", next: "@scriptEmbedded.$S2", nextEmbedded: "$S2" }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]], scriptEmbedded: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInEmbeddedState.scriptEmbedded.$S2", nextEmbedded: "@pop" }], [/<\/script/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]], style: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.style" }], [/type/, "attribute.name", "@styleAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, { token: "delimiter.html", next: "@styleEmbedded.text/css", nextEmbedded: "text/css" }], [/[ \t\r\n]+/], [/(<\/)(style\s*)(>)/, ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]]], styleAfterType: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.styleAfterType" }], [/=/, "delimiter", "@styleAfterTypeEquals"], [/>/, { token: "delimiter.html", next: "@styleEmbedded.text/css", nextEmbedded: "text/css" }], [/[ \t\r\n]+/], [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]], styleAfterTypeEquals: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.styleAfterTypeEquals" }], [/"([^"]*)"/, { token: "attribute.value", switchTo: "@styleWithCustomType.$1" }], [/'([^']*)'/, { token: "attribute.value", switchTo: "@styleWithCustomType.$1" }], [/>/, { token: "delimiter.html", next: "@styleEmbedded.text/css", nextEmbedded: "text/css" }], [/[ \t\r\n]+/], [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]], styleWithCustomType: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.styleWithCustomType.$S2" }], [/>/, { token: "delimiter.html", next: "@styleEmbedded.$S2", nextEmbedded: "$S2" }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]], styleEmbedded: [[/@[^@]/, { token: "@rematch", switchTo: "@razorInEmbeddedState.styleEmbedded.$S2", nextEmbedded: "@pop" }], [/<\/style/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]], razorInSimpleState: [[/@\*/, "comment.cs", "@razorBlockCommentTopLevel"], [/@[{(]/, "metatag.cs", "@razorRootTopLevel"], [/(@)(\s*[\w]+)/, ["metatag.cs", { token: "identifier.cs", switchTo: "@$S2.$S3" }]], [/[})]/, { token: "metatag.cs", switchTo: "@$S2.$S3" }], [/\*@/, { token: "comment.cs", switchTo: "@$S2.$S3" }]], razorInEmbeddedState: [[/@\*/, "comment.cs", "@razorBlockCommentTopLevel"], [/@[{(]/, "metatag.cs", "@razorRootTopLevel"], [/(@)(\s*[\w]+)/, ["metatag.cs", { token: "identifier.cs", switchTo: "@$S2.$S3", nextEmbedded: "$S3" }]], [/[})]/, { token: "metatag.cs", switchTo: "@$S2.$S3", nextEmbedded: "$S3" }], [/\*@/, { token: "comment.cs", switchTo: "@$S2.$S3", nextEmbedded: "$S3" }]], razorBlockCommentTopLevel: [[/\*@/, "@rematch", "@pop"], [/[^*]+/, "comment.cs"], [/./, "comment.cs"]], razorBlockComment: [[/\*@/, "comment.cs", "@pop"], [/[^*]+/, "comment.cs"], [/./, "comment.cs"]], razorRootTopLevel: [[/\{/, "delimiter.bracket.cs", "@razorRoot"], [/\(/, "delimiter.parenthesis.cs", "@razorRoot"], [/[})]/, "@rematch", "@pop"], { include: "razorCommon" }], razorRoot: [[/\{/, "delimiter.bracket.cs", "@razorRoot"], [/\(/, "delimiter.parenthesis.cs", "@razorRoot"], [/\}/, "delimiter.bracket.cs", "@pop"], [/\)/, "delimiter.parenthesis.cs", "@pop"], { include: "razorCommon" }], razorCommon: [[/[a-zA-Z_]\w*/, { cases: { "@razorKeywords": { token: "keyword.cs" }, "@default": "identifier.cs" } }], [/[\[\]]/, "delimiter.array.cs"], [/[ \t\r\n]+/], [/\/\/.*$/, "comment.cs"], [/@\*/, "comment.cs", "@razorBlockComment"], [/"([^"]*)"/, "string.cs"], [/'([^']*)'/, "string.cs"], [/(<)(\w+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]], [/(<)(\w+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]], [/(<\/)(\w+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]], [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/, "delimiter.cs"], [/\d*\d+[eE]([\-+]?\d+)?/, "number.float.cs"], [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float.cs"], [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, "number.hex.cs"], [/0[0-7']*[0-7]/, "number.octal.cs"], [/0[bB][0-1']*[0-1]/, "number.binary.cs"], [/\d[\d']*/, "number.cs"], [/\d/, "number.cs"]] }, razorKeywords: ["abstract", "as", "async", "await", "base", "bool", "break", "by", "byte", "case", "catch", "char", "checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "descending", "explicit", "event", "extern", "else", "enum", "false", "finally", "fixed", "float", "for", "foreach", "from", "goto", "group", "if", "implicit", "in", "int", "interface", "internal", "into", "is", "lock", "long", "nameof", "new", "null", "namespace", "object", "operator", "out", "override", "orderby", "params", "private", "protected", "public", "readonly", "ref", "return", "switch", "struct", "sbyte", "sealed", "short", "sizeof", "stackalloc", "static", "string", "select", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort", "using", "var", "virtual", "volatile", "void", "when", "while", "where", "yield", "model", "inject"], escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/ } }));
    define("vs/basic-languages/vb/vb", ["require", "exports"], (function (e, n) { "use strict"; Object.defineProperty(n, "__esModule", { value: !0 }), n.language = n.conf = void 0, n.conf = { comments: { lineComment: "'", blockComment: ["/*", "*/"] }, brackets: [["{", "}"], ["[", "]"], ["(", ")"], ["<", ">"], ["addhandler", "end addhandler"], ["class", "end class"], ["enum", "end enum"], ["event", "end event"], ["function", "end function"], ["get", "end get"], ["if", "end if"], ["interface", "end interface"], ["module", "end module"], ["namespace", "end namespace"], ["operator", "end operator"], ["property", "end property"], ["raiseevent", "end raiseevent"], ["removehandler", "end removehandler"], ["select", "end select"], ["set", "end set"], ["structure", "end structure"], ["sub", "end sub"], ["synclock", "end synclock"], ["try", "end try"], ["while", "end while"], ["with", "end with"], ["using", "end using"], ["do", "loop"], ["for", "next"]], autoClosingPairs: [{ open: "{", close: "}", notIn: ["string", "comment"] }, { open: "[", close: "]", notIn: ["string", "comment"] }, { open: "(", close: ")", notIn: ["string", "comment"] }, { open: '"', close: '"', notIn: ["string", "comment"] }, { open: "<", close: ">", notIn: ["string", "comment"] }], folding: { markers: { start: new RegExp("^\\s*#Region\\b"), end: new RegExp("^\\s*#End Region\\b") } } }, n.language = { defaultToken: "", tokenPostfix: ".vb", ignoreCase: !0, brackets: [{ token: "delimiter.bracket", open: "{", close: "}" }, { token: "delimiter.array", open: "[", close: "]" }, { token: "delimiter.parenthesis", open: "(", close: ")" }, { token: "delimiter.angle", open: "<", close: ">" }, { token: "keyword.tag-addhandler", open: "addhandler", close: "end addhandler" }, { token: "keyword.tag-class", open: "class", close: "end class" }, { token: "keyword.tag-enum", open: "enum", close: "end enum" }, { token: "keyword.tag-event", open: "event", close: "end event" }, { token: "keyword.tag-function", open: "function", close: "end function" }, { token: "keyword.tag-get", open: "get", close: "end get" }, { token: "keyword.tag-if", open: "if", close: "end if" }, { token: "keyword.tag-interface", open: "interface", close: "end interface" }, { token: "keyword.tag-module", open: "module", close: "end module" }, { token: "keyword.tag-namespace", open: "namespace", close: "end namespace" }, { token: "keyword.tag-operator", open: "operator", close: "end operator" }, { token: "keyword.tag-property", open: "property", close: "end property" }, { token: "keyword.tag-raiseevent", open: "raiseevent", close: "end raiseevent" }, { token: "keyword.tag-removehandler", open: "removehandler", close: "end removehandler" }, { token: "keyword.tag-select", open: "select", close: "end select" }, { token: "keyword.tag-set", open: "set", close: "end set" }, { token: "keyword.tag-structure", open: "structure", close: "end structure" }, { token: "keyword.tag-sub", open: "sub", close: "end sub" }, { token: "keyword.tag-synclock", open: "synclock", close: "end synclock" }, { token: "keyword.tag-try", open: "try", close: "end try" }, { token: "keyword.tag-while", open: "while", close: "end while" }, { token: "keyword.tag-with", open: "with", close: "end with" }, { token: "keyword.tag-using", open: "using", close: "end using" }, { token: "keyword.tag-do", open: "do", close: "loop" }, { token: "keyword.tag-for", open: "for", close: "next" }], keywords: ["AddHandler", "AddressOf", "Alias", "And", "AndAlso", "As", "Async", "Boolean", "ByRef", "Byte", "ByVal", "Call", "Case", "Catch", "CBool", "CByte", "CChar", "CDate", "CDbl", "CDec", "Char", "CInt", "Class", "CLng", "CObj", "Const", "Continue", "CSByte", "CShort", "CSng", "CStr", "CType", "CUInt", "CULng", "CUShort", "Date", "Decimal", "Declare", "Default", "Delegate", "Dim", "DirectCast", "Do", "Double", "Each", "Else", "ElseIf", "End", "EndIf", "Enum", "Erase", "Error", "Event", "Exit", "False", "Finally", "For", "Friend", "Function", "Get", "GetType", "GetXMLNamespace", "Global", "GoSub", "GoTo", "Handles", "If", "Implements", "Imports", "In", "Inherits", "Integer", "Interface", "Is", "IsNot", "Let", "Lib", "Like", "Long", "Loop", "Me", "Mod", "Module", "MustInherit", "MustOverride", "MyBase", "MyClass", "NameOf", "Namespace", "Narrowing", "New", "Next", "Not", "Nothing", "NotInheritable", "NotOverridable", "Object", "Of", "On", "Operator", "Option", "Optional", "Or", "OrElse", "Out", "Overloads", "Overridable", "Overrides", "ParamArray", "Partial", "Private", "Property", "Protected", "Public", "RaiseEvent", "ReadOnly", "ReDim", "RemoveHandler", "Resume", "Return", "SByte", "Select", "Set", "Shadows", "Shared", "Short", "Single", "Static", "Step", "Stop", "String", "Structure", "Sub", "SyncLock", "Then", "Throw", "To", "True", "Try", "TryCast", "TypeOf", "UInteger", "ULong", "UShort", "Using", "Variant", "Wend", "When", "While", "Widening", "With", "WithEvents", "WriteOnly", "Xor"], tagwords: ["If", "Sub", "Select", "Try", "Class", "Enum", "Function", "Get", "Interface", "Module", "Namespace", "Operator", "Set", "Structure", "Using", "While", "With", "Do", "Loop", "For", "Next", "Property", "Continue", "AddHandler", "RemoveHandler", "Event", "RaiseEvent", "SyncLock"], symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/, integersuffix: /U?[DI%L&S@]?/, floatsuffix: /[R#F!]?/, tokenizer: { root: [{ include: "@whitespace" }, [/next(?!\w)/, { token: "keyword.tag-for" }], [/loop(?!\w)/, { token: "keyword.tag-do" }], [/end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/, { token: "keyword.tag-$1" }], [/[a-zA-Z_]\w*/, { cases: { "@tagwords": { token: "keyword.tag-$0" }, "@keywords": { token: "keyword.$0" }, "@default": "identifier" } }], [/^\s*#\w+/, "keyword"], [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, "number.float"], [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, "number.float"], [/&H[0-9a-f]+(@integersuffix)/, "number.hex"], [/&0[0-7]+(@integersuffix)/, "number.octal"], [/\d+(@integersuffix)/, "number"], [/#.*#/, "number"], [/[{}()\[\]]/, "@brackets"], [/@symbols/, "delimiter"], [/["\u201c\u201d]/, { token: "string.quote", next: "@string" }]], whitespace: [[/[ \t\r\n]+/, ""], [/(\'|REM(?!\w)).*$/, "comment"]], string: [[/[^"\u201c\u201d]+/, "string"], [/["\u201c\u201d]{2}/, "string.escape"], [/["\u201c\u201d]C?/, { token: "string.quote", next: "@pop" }]] } } }));
    define("vs/basic-languages/ini/ini", ["require", "exports"], (function (e, n) { "use strict"; Object.defineProperty(n, "__esModule", { value: !0 }), n.language = n.conf = void 0, n.conf = { comments: { lineComment: "#" }, brackets: [["{", "}"], ["[", "]"], ["(", ")"]], autoClosingPairs: [{ open: "{", close: "}" }, { open: "[", close: "]" }, { open: "(", close: ")" }, { open: '"', close: '"' }, { open: "'", close: "'" }], surroundingPairs: [{ open: "{", close: "}" }, { open: "[", close: "]" }, { open: "(", close: ")" }, { open: '"', close: '"' }, { open: "'", close: "'" }] }, n.language = { defaultToken: "", tokenPostfix: ".ini", escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/, tokenizer: { root: [[/^\[[^\]]*\]/, "metatag"], [/(^\w+)(\s*)(\=)/, ["key", "", "delimiter"]], { include: "@whitespace" }, [/\d+/, "number"], [/"([^"\\]|\\.)*$/, "string.invalid"], [/'([^'\\]|\\.)*$/, "string.invalid"], [/"/, "string", '@string."'], [/'/, "string", "@string.'"]], whitespace: [[/[ \t\r\n]+/, ""], [/^\s*[#;].*$/, "comment"]], string: [[/[^\\"']+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/["']/, { cases: { "$#==$S2": { token: "string", next: "@pop" }, "@default": "string" } }]] } } }));
}

function registerAdditionalLanguage(id, extensions, originalId, monaco){
    require.config({ paths: { vs: 'http://powertoyslocalmonaco/monacoSRC/min/vs' } });
    require(['vs/editor/editor.main'], async function () {
        monaco.languages.register({
            id: id,
            extensions: extensions
        })

        const langDef = require('vs/basic-languages/'+originalId+'/'+originalId);
        monaco.languages.setLanguageConfiguration(id, langDef.conf);
        monaco.languages.setMonarchTokensProvider(id, langDef.language);
    })
}

function registerAdditionalNewLanguage(id, extensions, definition, monaco) {
    require.config({ paths: { vs: 'http://powertoyslocalmonaco/monacoSRC/min/vs' } });
    require(['vs/editor/editor.main'], async function () {
        monaco.languages.register({
            id: id,
            extensions: extensions
        })

        monaco.languages.setMonarchTokensProvider(id, definition);
    })
}