const redisClient = require("../../configs/cache.config")

const cacheManager = {
  async get(key) {
    try {
      const value = await redisClient.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Redis Get Error:", error);
      return null;
    }
  },

  async set(key, value, expiresIn = 3600) {
    try {
      await redisClient.set(key, JSON.stringify(value), "EX", expiresIn);
      return true;
    } catch (error) {
      console.error("Redis Set Error:", error);
      return false;
    }
  },

  async del(key) {
    try {
      await redisClient.del(key);
      return true;
    } catch (error) {
      console.error("Redis Delete Error:", error);
      return false;
    }
  },

  async clear() {
    try {
      await redisClient.flushall();
      return true;
    } catch (error) {
      console.error("Redis Clear Error:", error);
      return false;
    }
  },
};

module.exports = cacheManager;
