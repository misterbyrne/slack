var Promise = require('bluebird');
var os = require('os');
var fs = require('fs');
var path = require('path');

module.exports = {
	compress: function() {
		var args = [].slice.call(arguments);
		var getExePath = function() {
			var version = 'upx391w';
			var cachePath = path.join(os.tmpdir(), 'cache');
			var exePath = path.join(cachePath, version, 'upx.exe');
			if (fs.existsSync(exePath)) {
				return Promise.resolve(exePath);
			}
			var downloader = require('node-webkit-builder/lib/downloader.js');
			var zipUrl = 'http://upx.sourceforge.net/download/' + version + '.zip';
			console.log('Download UPX from ' + zipUrl);
			return downloader.downloadAndUnpack(cachePath, zipUrl)
				.then(function(files) {
					return Promise.resolve(exePath);
				}).error(function(error) {
					return Promise.reject(error);
				});
		};
		
		var done = Promise.defer();
		
		getExePath().then(function(exePath) {
			console.log('Compressing executables (may take a while)');
			require('child_process').execFile(exePath, args, function (error, stdout, stderr) {
				if (error) {
					console.log(stderr);
					return done.reject(error);
				}
				console.log(stdout);
				return done.resolve();
			});
		});
		return done.promise;
	}
}

module.exports.compress('-9', '.\\slack\\win32\\*.dll', '.\\slack\\win32\\*.exe');