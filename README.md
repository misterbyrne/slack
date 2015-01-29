# Slack Windows App

This is a small application for using [#slack] (http://www.slack.com) on Windows as a standalone app.
The main motivation for this was the fact that there were no alternatives at the time other than running
the slack site as a Chrome desktop application. So it didn't provide native notifications, taskbar icon
notification badges, and it behaved weirdly with browser extensions and when using multiple user profiles.

It uses the impressive node-webkit (currently being rebranded to [nw.js] (http://nwjs.io))

## Releases

Download the latest binary from [here] (https://github.com/misterbyrne/slack/releases/latest)

## Building

You should be able to build the final executable on Windows by doing the following:

1. Install [nodejs] (https://nodejs.org)
2. If the installation of nodejs didn't include it (it usually does) install node's package manager, [npm] (https://www.npmjs.com)
2. Clone this repository
3. From the root of the repository run `npm run build`

## Disclaimers

- I copied index.html from the official #slack app for Mac.  Sorry.
- Everything to do with slack the service including the logos etc. is copyright slack, not me.
- I've included a small Flash plugin so you can play videos inline without having to have Flash player installed.  That .dll was taken from the Flash installer download for Windows.  Everything to do with that is copyright Adobe.
- This work is in no way affiliated to slack and is just intended as a stopgap for use until an official Windows app arrives.
- This is my first go at anything node.  I probably did stuff wrong.
- node-webkit is cross platform, and so are the runtime dependencies (e.g. node-notifier)
  so running / building on Linux and even OSX would be possible.
  The compressing / boxing steps would be redundant for those platforms though 
  ...in fact the whole thing is redundant for Mac cos the official slack app is great
