module.exports = {
    create: (req,res) => {
        const dbInstance = req.app.get('db')
        const {description, name, price, image_url} = req.body

        dbInstance.create_product(name, description, price, image_url).then(product => {
            res.status(200).send(product)
        })
    },
    getOne: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        console.log(req.params)
        dbInstance.read_product(id).then(product => {
            res.status(200).send(product)
        }).catch(err => res.status(500).send(err))
    },
    getAll: (req,res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then(products => {
            res.status(200).send(products)
        }).catch(err => res.status(500).send(err))
    },
    update: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query
        
        dbInstance.update_product([id, desc]).then(product => {
            res.status(200).send(product)
        })
    },
    delete: (req,res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        const {description} = req.query
        dbInstance.delete_product(id, description).then(product => {
            res.status(200).send(product)
        })

    }
}
