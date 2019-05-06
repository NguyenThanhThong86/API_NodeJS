module.exports = {
    hrPool: {
      user: process.env.HR_USER,
      password: process.env.HR_PASSWORD,
      connectString: process.env.HR_CONNECTIONSTRING,
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    },
      couchbase: {
        server: process.env.COUCHBASE_SERVER || "127.0.0.1:8091",
        bucket: process.env.COUCHBASE_BUCKET || "digitalPlatform",
        username: process.env.COUCHBASE_USER || "Administrator",
        password: process.env.COUCHBASE_PASSWORD || "123456"
      }
  };