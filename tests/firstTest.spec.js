const express = require('express');
const request = require('supertest');
const expect = require('chai').expect

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});

describe('First Test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200)
        });
    });

    it('Mocky OK Response', (done) => {
        request('http://mocky.io')
        .get('/v3/34b615d8-2b55-44b6-b68e-e9fb24c0188a')
        .expect(200, done)
    })
});