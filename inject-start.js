var processIsDefined = typeof(process) !== "undefined";
if (processIsDefined) {
	window.fluid = new process.mainModule.exports.Fluid();
}
window.ssbwin = {};
window.CVO = {
	log: function() {
		window['$CVO'] = { run: function() { } };
	 }
};

// create a stub so it looks like we're using the mac app
window.macgap = {
	app: {
		useSlackDev: function() { return false; },
		didStartLoading: function(ticks) { },
		lastTeamDomain: function() { return ""; }
	},
	teams: {
		updateTitleBarColor: function(color) { }
	}
};

// do native stuff
if (processIsDefined) {
	process.mainModule.exports.initOnce();
	process.mainModule.exports.initWindow();
}
