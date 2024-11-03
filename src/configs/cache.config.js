// config/redis.js
const Redis = require("ioredis");

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
  console.log("Redis client connected");
});

redisClient.on("error", (error) => {
  console.error("Redis Client Error:", error);
});

module.exports = redisClient;
