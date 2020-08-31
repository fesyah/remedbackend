const { asyncQuery, generateQuery } = require('../helpers/queryHelp')

module.exports = {
    getDataConsumers : async (req, res) => {
        const getData = 'select * from pelanggan'
        try {
            const result = await asyncQuery(getData)

            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    editDataConsumers : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const checkData = `select * from pelanggan where id=${id}`
            const check = await asyncQuery(checkData)
            if (check.length === 0) return res.status(400).send('pelanggan tidak ada.')

            const edit = `update pelanggan set ${generateQuery(req.body)} where id=${id}`
            const result = await asyncQuery(edit)

            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    deleteDataConsumers : async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const checkData = `select * from pelanggan where id=${id}`
            const check = await asyncQuery(checkData)
            if (check.length === 0) return res.status(400).send('pelanggan tidak ada')

            const del = `delete from pelanggan where id=${id}`
            const result = await asyncQuery(del)

            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    addData : async (req, res) => {
        const { nama, alamat, handphone, kode_pos, kredit, id_sales}
        try {
            const insert = `insert into pelanggan (nama, alamat, handphone, kode_pos, kredit, id_sales)
                            values ('${nama}', '${alamat}', '${handphone}', '${kode_pos}' )`
            const result = await async(insert)

            res.status(200).send(result)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}