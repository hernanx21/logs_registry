const handlers = ({axios}) => ({
    post: async (req,res) => {

        
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
        //console.log(users)
        const found = users.find(r => r.id === req.body.userId)
        //console.log(found)
        if(found){
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body)
            return res.status(201).send(data)
        }
        res.sendStatus(400)
    },
    get: async (req,res) => {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
        //console.log(users)
        //const found = users.find(r => r.id === req.body.userId)
        //console.log(found)
        if(users){
            return res.status(201).send(users)
        }else{
            res.sendStatus(400)
        }
        
    }
})


module.exports = handlers