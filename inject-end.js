// some hacky styling to make it look more app-like
var css = 'nav, footer { display: none; } ';
css += 'div#page_contents > div > p:last-child { display: none; } ';

var parent = document.head || document.body;
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
parent.appendChild(style);
