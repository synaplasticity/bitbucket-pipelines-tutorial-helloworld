var request = require('supertest');

// Running a test on our staging environment
describe('GET /', function() {
  it('displays "Hello World" on staging', function(done) {
    // The line below is the core test of our app.
    request('https://bbtut-cdeployment-staging.herokuapp.com')
      .get('/')
      .expect(function(res) {
        if (res.text.indexOf('Hello World') == -1) throw new Error ("Missing Hello World");
      })
      .expect(200, done);
  });
});