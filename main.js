var path = require('path');
var emoji = require('./emoji.min.js');
emoji.inits.env = true;
emoji.replace_mode = 'unified';

var isInitialised = false;
exports.initOnce = function() {
	if (isInitialised) return;
	
	var gui = window.nwDispatcher.requireNwGui();
	var nativeWindow = gui.Window.get();
	if (gui.App.argv.indexOf("--debug") != -1) {
		nativeWindow.showDevTools();
	}
	
	nativeWindow.on('new-win-policy', function(frame, url, policy) {
		gui.Shell.openExternal(url);
		policy.ignore();
	});
	
	nativeWindow.on('close', function() {
		gui.App.clearCache();
		this.close(true);
	});
	
	isInitialised = true;
};

exports.initWindow = function() {
	require('./copy-paste.js').init(window)
}

var notifier = require('node-notifier');
var iconPath = path.join(__dirname, 'icon_512x512.png');

exports.Fluid = function() {
	var fluid = {};
	fluid.__defineSetter__('dockBadge', function(label) {
		var gui = window.nwDispatcher.requireNwGui();
		var nativeWindow = gui.Window.get();
		nativeWindow.setBadgeLabel(label);
		nativeWindow.requestAttention(label !== '');	
	});
	
	fluid.showGrowlNotification = function(message) {
		if (require('node-notifier/lib/utils').isWin8()) {
			message.description = emoji.replace_colons(message.description);
		}
	
		notifier.notify({
			title: message.title,
			message: message.description,
			sound: true,
			icon: iconPath,
			wait: true
		}, function(error, response) {
			if (response.trim().toLowerCase() === 'activated') {
				var gui = window.nwDispatcher.requireNwGui();
				var nativeWindow = gui.Window.get();
				nativeWindow.show();
				nativeWindow.focus();
				
				if (message.onclick) {
					// safer than window[message.onclick](message.onclick_arg) since the .onclick function might be namespaced
					eval('window.' + message.onclick + '("' + message.onclick_arg + '")');
					delete window.TS.ui.growls.ssbwinGrowlOnClick_map[message.onclick_arg]
				}
			}
		});
	};
	
	return fluid;
}
