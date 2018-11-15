//Simple escaper Script
//Author : @beingfranklin
function $(esc_tool){
 return document.getElementById(esc_tool)
}
var char2entity = { "'" : '&#39;', '"' : '&quot;',  '<' : '&lt;', '>' : '&gt;',  '&' : '&amp;'};
function escape_entities(str) {
 var rv = '';
 for (var i = 0;i < str.length; i++) {
 var ch = str.charAt(i);
 rv += char2entity[ch] || ch;
 }
 return rv;
}

function do_escape(e){
 $('escapedchar').value = escape_entities(e.value)
}
//escapedchar -> the id name i have used over here
