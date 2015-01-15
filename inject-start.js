window.fluid = new process.mainModule.exports.Fluid();
window.ssbwin = {}

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
}

// do native stuff
process.mainModule.exports.initOnce();
process.mainModule.exports.initWindow();