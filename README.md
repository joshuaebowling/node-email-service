# Purpose

To send emails from any application running on a given server in a de-coupled manner. 
### Caveats
This implementation is only suitable for applications running on the same server as the service. Whatever port you configure the service to run on, you should close that port on your firewall ( on Ubuntu 16 or > `sudo ufw deny {your configured port}`). If you leave that port open you'll be exposing this service -- which requires no auth -- to the wide world.
## Installation & Setup
`npm install` or `yarn`

## Tests
I'm using mocha to run each individual test. The client test needs to have the service running in order to work properly. Since there are only 3 files of unit tests, I haven't added a test runner. If the codebase expands, I will consider adding a test runner.

# Usage
## Server
If you're not using a process manager, such as [PM2](https://github.com/Unitech/pm2), then you'd `node ./server` to start the service. I recommend you use PM2.

## Client
Once you have the service installed, create a [link](https://docs.npmjs.com/cli/link) using npm `npm ln {path-to-the-service}` or create a [link](https://yarnpkg.com/lang/en/docs/cli/link/) using yarn `yarn link {path-to-the-service}`

** Its probably best to either use yarn or npm.


## Logging
I've implemented [Bunyan](https://github.com/trentm/node-bunyan), however naively at this point.


## Roadmap
To the extent that I have one, there are 3 issues I'd like to, and will address.
1) Implement Bunyan with file logging
2) add SMS capability via Twilio and supporting service/client methods.
3) add a test runner
