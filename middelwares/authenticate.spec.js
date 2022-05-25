const authenticate = require('./middelware')
describe('endpoints', () => {
    describe('functions to test', ()=> {
        it('it should have id 1', () => {
            const req = {
                header: jest.fn().mockReturnValue('1')
            }
            const rest = {
                sendStatus: jest.fn()
            }
            const next = jest.fn()

            authenticate(req,rest,next)
            expect(req.header.mock.calls).toEqual([ ['user_id'] ])
            expect(rest.sendStatus.mock.calls).toEqual([])
            expect(next.mock.calls).toEqual([ [] ])

        })

        it('when id is not 1', () => {
            const req = {
                header: jest.fn().mockReturnValue('2')
            }
            const rest = {
                sendStatus: jest.fn()
            }
            const next = jest.fn()

            authenticate(req,rest,next)
            expect(req.header.mock.calls).toEqual([ ['user_id'] ])
            expect(rest.sendStatus.mock.calls).toEqual([ [403] ])
            //expect(req.header.mock.calls).toEqual([])

        })
    })
})