const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:8001"',
  API_CLIENT_ID: '"2"',
  API_CLIENT_SECRET: '"iUNfe00ZORKrzudTS0QpuhrIjDkKKr5kDNZ00gVY"',
});
