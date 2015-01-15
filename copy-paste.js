function Menu(targetElement, cutLabel, copyLabel, pasteLabel) {
	var selectionType = window.getSelection().type;
	var hasSelection = !(selectionType === "Caret" || selectionType === "None");
	var isAnchor = targetElement.tagName === 'A' && targetElement.href;
	var isEditable = targetElement.isContentEditable || targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA';
	var isCopyable = isAnchor || hasSelection;
	
	var gui = window.nwDispatcher.requireNwGui();
    menu = new gui.Menu(),
    cut = new gui.MenuItem({
            label : cutLabel || "Cut",
            click : function () {
                window.document.execCommand("cut");
                console.log('Menu:', 'cutted to clipboard');
            }
        }),
    copy = new gui.MenuItem({
            label : copyLabel || "Copy",
            click : function () {
				if (!hasSelection && isAnchor) {
					console.log(targetElement.href);
					gui.Clipboard.get().set(targetElement.href, 'text');
				} else {				
					window.document.execCommand("copy");
				}
                console.log('Menu:', 'copied to clipboard');
            }
        }),
    paste = new gui.MenuItem({
            label : pasteLabel || "Paste",
            click : function () {
                window.document.execCommand("paste");
                console.log('Menu:', 'pasted to textarea');
            }
        });

	if (isCopyable) {
		menu.append(copy);
	}
	if (isCopyable && isEditable) {
		menu.append(cut);
	}
	if (isEditable) {
		menu.append(paste);
	}

    return menu;
}

var targetElement = null;
var hasSelection = false;
var isAnchor = false;
	
var oncontextmenu = function (e) {
    e.preventDefault();
    var menu = new Menu(e.target);
	if (menu.items.length > 0) {
		menu.popup(e.x, e.y);
	}
}

exports.init = function(window) {
	if (window.document.addEventListener) {
		window.document.addEventListener("contextmenu", oncontextmenu, false);
	} else {
		window.document.attachEvent('contextmenu', oncontextmenu);
	}
}
