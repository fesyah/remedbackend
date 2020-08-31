const { asyncQuery, generateQuery } = require('../helpers/queryHelp')

module.exports = {
    employeeData1 : async (req, res) => {
        const getData = `select p.id, p.nama, j.jabatan from pegawai p
                        left join jabatan j
                        on p.id_jabatan = j.id;`
        try {
            const result = await asyncQuery(getData)
            res.status(200).send(result)
        } catch (err) {
            console.log(err)
        }
    },
    
    employeeData3 : async (req, res) => {
        const getData = `select nama, kredit from pelanggan where kredit > 
                            ( select avg(kredit) from pelanggan )
                            order by kredit;`
        try {
            const result = await asyncQuery(getData)
            res.status(200).send(result)
        } catch (err) {
            console.log(err)
        }
    }
}