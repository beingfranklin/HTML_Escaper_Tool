//Simple escaper ,
//Author : @franlinrockz
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
 $('escaped').value = escape_entities(e.value)
}
