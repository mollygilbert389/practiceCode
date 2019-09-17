const items = [
    {name: 'Bike', price: 100}, 
    {name: 'TV', price: 200}, 
    {name: 'Album', price: 10}, 
    {name: 'Book', price: 5}, 
    {name: 'Phone', price: 500}, 
    {name: 'Computer', price: 1000}, 
    {name: 'Keryboard', price: 25}, 
]

//retuns items less then or equal to 100
const filteredItems = items.filter((item) => {
    return item.price <= 100

})
console.log(filteredItems)

//only returns names
const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames)

//only item prices
const itemPrices = items.map((item) => {
    return item.price
})
console.log(itemPrices)

//finds items
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem)

//for loop
items.forEach((item) => {
    console.log(item.name)
})

items.forEach((item) => {
    console.log(item.price)
})

items.forEach((item) => {
    console.log(item.name + " " + item.price)
})

//returns boolean if array has some
const hasInexpensiveItems = items.some((item)=> {
    return item.price <= 100
})

console.log(hasInexpensiveItems)

//retuns boolean if every item is under 100
const hasAnyInexpensiveItems = items.every((item)=> {
    return item.price <= 100
})

console.log(hasAnyInexpensiveItems)

//reduces everthing to one value
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

//checks the array to see if something is included
const newItems = [1, 2, 3, 4, 5]

const includesTwo = newItems.includes(2)

console.log(includesTwo)