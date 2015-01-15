// some hacky styling to make it look more app-like
var css = 'header .header_nav .header_links { display: none; } ';
css += 'div#page_contents > div > p:last-child { display: none; } ';
css += 'header a#header_logo { cursor: default; pointer-events: none; } ';
css += 'div#page_contents > div:nth-child(2) { margin-bottom: 1rem !important; } ';
css += 'div#page_contents { padding-bottom: 0px; } ';
var parent = document.head || document.body;
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
parent.appendChild(style);
