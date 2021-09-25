let cougars = [
    "Tyler Allgeir",
    "Jaren Hall",
    "Baylor Romney",
    "Gunner Romney",
    "Zach Wilson",
    "Taysom Hill",
    "Kyle VanNoy"
]


module.exports = {
    getCoug: (req, res) => {
        const randCoug = Math.floor(Math.random() * cougars.length)
        const random = cougars[randCoug]
        res.status(200).send(random)
        
    },
    addCoug: (req, res) => {
        let value = req.body
        cougars.push(value.name)

        res.status(200).send(cougars)
    }

}