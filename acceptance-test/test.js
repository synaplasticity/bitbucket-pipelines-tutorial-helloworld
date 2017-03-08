var request = require('supertest');

// Running a test on our staging environment
describe('GET /', function() {
  it('displays "Hello World" on staging', function(done) {
    var staging_url = 'https://' + process.env.HEROKU_STAGING + '.herokuapp.com'
    // The line below is the core test of our app.
    request(staging_url)
      .get('/')
      .expect(function(res) {
        if (res.text.indexOf('Hello World') == -1) throw new Error ("Missing Hello World");
      })
      .expect(200, done);
  });
});