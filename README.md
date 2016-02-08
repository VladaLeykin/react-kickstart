# react-kickstart
A simple development environment for React web applications, intended for use by Wix Kickstart program.
The environment makes use of Browserify for packaging the application source and libraries used as a single, redistributable file.
In addition, the environment uses Babel to transform JSX expressions into JavaScript (ES6 support is a nice side-effect).

## Installation
1. clone the repo to you local device:
 ```
git clone git@github.com:DanShappir/react-kickstart.git
```
2. Install the required node modules:
 ```
npm i
```
3. Build the initial example:
 ```
mkdir dst
npm run build
```
4. Start web server:
 ```
npm start
```
