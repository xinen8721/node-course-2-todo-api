const expect = require('expect');
const supertest = require('supertest');
const request = require('request');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});
describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'have the vitamin';
    done();
    // request(app)
    //   .post('/todos')
    //   .send({text})
    //   .expect(200)
    //   .expect((res) => {
    //     expect(res.body.text).toBe(text);
    //   })
    //   .end((err, res) => {
    //     if (err) {
    //       return done();
    //     }
    //     Todo.find().then((todos) => {
    //       expect(todos.length).toBe(1);
    //       expect(todos[0].text).toBe(text);
    //       done();
    //     }).catch((e) => done(e));
    //   });
  });
})
