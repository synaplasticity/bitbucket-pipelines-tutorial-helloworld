var request = require('supertest');
var app = require('../app.js')

describe('GET /', function() {
  it('displays "Hello World!"', function(done) {
    // The line below is the core test of our app.
    request(app)
      .get('/')
      .expect(function(res) {
        if (res.text.indexOf('Hello World!') == -1) throw new Error ("Missing Hello World!");
      })
      .expect(200, done);
  });
});