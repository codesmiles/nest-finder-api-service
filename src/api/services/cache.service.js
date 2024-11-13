const { redisClient } = require("../../configs")

module.exports.getCachedDataService = async (key) => {
    try {
      const value = await redisClient.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Redis Get Error:", error);
      return null;
    }
}

module.exports.setCachedDataService = async (key, value, expiresIn = 3600) =>  {
    try {
      await redisClient.set(key, JSON.stringify(value), "EX", expiresIn);
      return true;
    } catch (error) {
      console.error("Redis Set Error:", error);
      return false;
    }
  }
  
module.exports.deleteCachedDataService = async (key) => {
    try {
      await redisClient.del(key);
      return true;
    } catch (error) {
      console.error("Redis Delete Error:", error);
      return false;
    }
}

module.exports.clearCachedDataService = async () => {
    try {
      await redisClient.flushall();
      return true;
    } catch (error) {
      console.error("Redis Clear Error:", error);
      return false;
    }
  }
  

  // const cacheManager = require("../api/services/cache.service");
// // Test route
// router.get("/test-redis", async (req, res) => {
//     try {
//         await cacheManager.set("test-key", { message: "Redis is working!" });
//         const result = await cacheManager.get("test-key");
//         res.json(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
