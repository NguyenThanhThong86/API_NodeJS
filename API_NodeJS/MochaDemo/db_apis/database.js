const dbConfig = require('../config/database');
const couchbase = require('couchbase');
const cluster = (new couchbase.Cluster(dbConfig.couchbase.server));
cluster.authenticate(dbConfig.couchbase.username, dbConfig.couchbase.password);
const bucket = cluster.openBucket(dbConfig.couchbase.bucket);
module.exports.bucket = bucket;