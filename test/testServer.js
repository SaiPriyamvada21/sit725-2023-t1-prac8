
const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:3000'; 

describe('GET /api/state', function () {
  it('should return all states', function (done) {
    request.get(`${baseUrl}/api/state`, function (error, response, body) {
      const bodyObj = JSON.parse(body);
      expect(response.statusCode).to.equal(200);
      expect(bodyObj.message).to.equal('get all states successful');
      done();
    });
  });
});

describe('POST /api/state', function () {
  it('should add a new state', function (done) {
    const stateData = {
      title: 'New State',
      subtitle: 'Capital City'
    };

    request.post(
      {
        url: `${baseUrl}/api/state`,
        json: stateData
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.message).to.equal('success');
        done();
      }
    );
  });
});

describe('DELETE /api/state/:id', function () {
  it('should delete a state', function (done) {
    const stateId = '1'; 

    request.delete(`${baseUrl}/api/state/${stateId}`, function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
