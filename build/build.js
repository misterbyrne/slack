var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
	cacheDir: require('os').tmpdir() + '/cache',
    files: [
	'./**',
	'!./*.ico',
	'!./build/**',
	'!./node_modules/**',
	'./node_modules/**/*.{js,json}',
	'./node_modules/**/bin/**',
	'!./node_modules/node-webkit-builder/**',
	'!./node_modules/node-notifier/test/**',
	'./node_modules/node-notifier/vendor/notifu/notifu.exe',
	'./node_modules/node-notifier/vendor/toaster/*.{exe,dll}'
	],
    platforms: ['win32'],
    winIco: './icon_512x512.ico',
    version: '0.11.6'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});