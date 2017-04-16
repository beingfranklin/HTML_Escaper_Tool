# HTML Escaper/ Decoder Tool
Simple Tool to convert the 'reserved characters to equivalent entities'.
This script converts the HTML to something which you can post in your blog post or even in your blogger template (for your adsense ads )and useful for lot of another purposes.

See [Live Demo here](http://myhtmlencoder.blogspot.com/)

Sample Conversions here are
```
 " is replaced with &quot;
 < is replaced with &lt;
 > is replaced with &gt;
 & is replaced with &amp;
```

You can customize it later. You can get a detailed list from here [W3.org](https://dev.w3.org/html5/html-author/charref)

# Documentation

Currently I have included few of them in comments
```
function do_escape(e){
 $('escapedchar').value = escape_entities(e.value)
}
```
Here instead of 'escapedchar' use your 'id' .

Please message me your queries and I will get back to you soon. Happy Escaping :)
