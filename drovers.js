const { database } = require("./database.js")

const cattleToDrive = 50

const hireDrivers = (herdSize) => {
    const drivers = []
    const allDrivers = database.drivers
    const numberNeeded = cattleToDrive / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrivers.length)
        drivers.push(allDrivers[randomHerderId])
    }
    return drivers
}

module.exports = { hireDrivers, cattleToDrive}