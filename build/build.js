var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
	cacheDir: require('os').tmpdir() + '/cache',
    files: ['./**/*', '!./node_modules/node-webkit-builder/**', '!./build/**'],
    platforms: ['win32'],
    winIco: './icon_512x512.ico',
    version: '0.11.5'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});