const log4js = require('log4js');

log4js.configure({
  appenders: {
    file : {
        type:"file",
        filename: "./mutation.log",
    },
  },
  categories: {
    default: { appenders: ["file"], level: 'DEBUG' },
    file: {appenders: ["file"],level:'DEBUG'},
  }, 
});

module.exports = {
  file: log4js.getLogger('file'),
  express: log4js.connectLogger(log4js.getLogger('file'), { level: log4js.levels.DEBUG }),
};