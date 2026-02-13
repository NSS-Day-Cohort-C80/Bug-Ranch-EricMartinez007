const { roundup } = require("./cattle.js")
const { hireDrivers } = require("./drovers.js")
const { cattleToDrive } = require("./drovers.js")   
const { journeyMaker } = require("./journey.js")
const { database } = require("./database.js")
const { randomize } = require("./utils.js")



const drivers = hireDrivers(cattleToDrive)
const cattle = roundup(cattleToDrive)
const journey = journeyMaker()

console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`)

console.log(`You will be accompanying ${drivers.length} drivers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`)

console.log(`\nThe herd is made up of the following cattle:`)
const breeds = []
for (const cow of cattle) {
    breeds.push(cow.breed)
}
console.log(breeds.join(", "))

console.log("\nHere is the team of drivers you will be joining")
for (const driver of drivers) {
    console.log(`\t* ${driver.first_name} ${driver.last_name}`)
}
console.log(`\n`)
console.log("\nYour journey will take you through the wildness of the American Midwest and across the following terrain")
for (const area of journey) {
    console.log(`\t* ${area}`)
}
