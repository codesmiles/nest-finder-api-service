// config/redis.js
const Redis = require("ioredis");
const logger = require("./logger.config")

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 5,
});

redisClient.on("connect", () => {
  logger.info("Redis client connected");
});

redisClient.on("error", (error) => {
  logger.error("Redis Client Error:", error);
});

module.exports = redisClient;
