/**
 * Created by chriss on 1/10/14.
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['*Test.js'],

  jasmineNodeOpts: {
    showColors: true
  }
}