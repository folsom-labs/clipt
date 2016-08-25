import Logger from 'js-logger';
import ClipperLib from './clipperlib/clipper';

Logger.useDefaults({
    defaultLevel:  Logger.WARN,
});

const logger = Logger.get('clipper');

ClipperLib.Error = (message) => logger.warn(message);

const clipt = {
    ClipperLib,
};

export default clipt;
