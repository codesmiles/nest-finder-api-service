const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, colorize, errors, json } = format;

const buildDevLogger = () => {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}: ${stack || message}`;
  });

  return createLogger({
    level: "debug",
    format: combine(
      colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
};

const buildProdLogger = () => {
  return createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), json()),
    //   defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
};

module.exports.logger =
  process.env.NODE_ENV === "development"
    ? buildDevLogger()
    : (logger = buildProdLogger());

// const logger = require("./src/api/loggers/index")
// logger.info("text info",{meta1:"meta1"})
// logger.warn("text warn")
// logger.error("text error")
// logger.debug("text debug")
// logger.error(new Error("something went wrong"));
