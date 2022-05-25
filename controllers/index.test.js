const request = require('supertest')
const {app} = require('../index')

describe('Server', ()=>{
    describe('posts', ()=>{
        describe('post POST', ()=>{
            it('creates a new post', async ()=>{
                const response = await request(app)
                .post('/')
                .send({userId: 5})
                .set('user_id', 1)
                .set('Content-Type', 'application/json')

                expect(response.statusCode).toEqual(201)
                expect(response.body.userId).toEqual(5)
                expect(response.body).toHaveProperty('id')

                //console.log(response)
            })

            it('does not creates a new post', async ()=>{
                const response = await request(app)
                .post('/')
                .send({userId: 5})
                .set('user_id', 2)
                .set('Content-Type', 'application/json')

                expect(response.statusCode).toEqual(403)

                //console.log(response)
            })
        })
    })
})