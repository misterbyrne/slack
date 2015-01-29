@echo off
node .\build\build.js
cd build
node .\compress.js
echo Boxing into single executable...
enigmavirtualbox cli .\slack.evb
