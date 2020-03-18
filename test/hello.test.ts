import request from 'supertest'
import app from '../src/app'
import assert from 'assert'

describe('GET /hello/world', () => {
  it('should return 200 OK', (done) => {
    request(app).get('/hello/world').expect(200, done)
  })

  it('should return 200 OK and hello world', (done) => {
    request(app)
      .get('/hello/world')
      .expect(200)
      .then(response => {
        assert(response.body, 'hello world')
        done()
      })
  })
})

describe('GET /hello', () => {
  it('should return `hello`', (done) => {
    request(app)
      .get('/hello')
      .expect(200)
      .then(response => {
        assert(response.body,'hello')
        done()
      })
  })
})
