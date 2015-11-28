# Stevens Lost and Found Mobile Client
Ionic project for creating crossplatform Lost and Found application.

## Installing

### Requirements
#### [Node Package Manager](https://www.npmjs.com/)
* npm is a package manager for Node, essentially providing simple dependency management (very simple)
* On a sane operating system, `sudo apt-get install node` should suffice. If you are on Ubuntu, node gets installed as `nodejs`, which can cause some issues. You should be able to symlink `nodejs` to `node` to resolve this (`sudo ln -s "$(which nodejs)" /usr/bin/node`).

#### [Bower](http://bower.io/)
* Bower, like npm, is a dependency management system. Bower provides a bit more flexibility (for example, you can specify custom urls to pull from). We use bower for `agCore` and any other shared github libraries we use.
* On a sane operating system, `npm install -g bower` (the -g indicates it will be installed globally).

#### [Gulp](http://gulpjs.com/)
* Gulp is a build system. This lets us easily test locally and setup deployment strategies, etc.
* On a sane operating system, `npm install -g gulp`

#### Setting up local dependencies
* `npm install` will read `package.json` and install all local dependencies that are required. You really should only have to do this once (we rarely change these dependencies).
* `bower install` will read `bower.json` to determine dependencies and utilize the `.bowerrc` to place them in the appropriate place, the lib folder (created when you do bower install). Any time we add anything to a core library (such as `agCore`) you need to run the local [update script](update).

### Running
* Once all dependencies are installed (as above), run `gulp` in the directory. This will utilize the [gulp file](gulpfile.js) and run the default task. The default task will run a server on `localhost:9002`.
* Point your favorite browser to http://localhost:9002 and observe that the application is now running.

## Contributing

### Commit messages
* Commits must be short and to the point: `Add requirejs dependency to run.js`. They must provide just enough information to be able to understand what you would be getting yourself into if you chose to look at the commit details.
* Commits must be written with present-tense imperative-style, usually starting with `Add`, `Fix`, `Remove`, `Resolve`, `Update`, etc. They should never be written in the past tense.

## Git branching overview
* https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging