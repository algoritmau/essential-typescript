// let hatPrice = 100
// let bootsPrice = '100'

let hat = {
  name: 'Hat',
  _price: 100,

  // Defining Getters and Setters
  taxedPrice: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice
    this.taxedPrice = this._price * 1.2
  },

  get price() {
    return this._price
  },

  printDetails() {
    console.log(`${this.name}: ${this.price}, ${this.taxedPrice}`)
  }
}

let boots = {
  name: 'Boots',
  price: '100',

  get taxedPrice() {
    return Number(this.price) * 1.2
  }
}

// Adding, Changing, and Deleting Object Properties
let gloves = {
  productName: 'Gloves',
  price: 40
}

gloves.name = gloves.productName
delete gloves.productName
gloves.price = 20

// Guarding Against Undefined Objects and Properties
let propertyCheck = hat.price ?? 0
let objectAndPropertyCheck = hat?.price ?? 0
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`)

console.log(`Hat — Base Price: ${hat.price} | Taxed Price: ${hat.taxedPrice}`)
hat.price = 120
console.log(`Hat — Base Price: ${hat.price} | Taxed Price: ${hat.taxedPrice}`)

hat.printDetails()
hat.price = 128
hat.printDetails()

console.log(
  `Boots — Base Price: ${boots.price} | Taxed Price: ${boots.taxedPrice}`
)
boots.price = 120
console.log(
  `Boots — Base Price: ${boots.price} | Taxed Price: ${boots.taxedPrice}`
)

let products = ['Hats', 'Boots', 'Gloves']
let productsPrices = [100, 120, 50.25]
// console.log(`First Item: ${products[0]}: ${productsPrices[0]}`)

// Using the Spread Operator on Arrays
let combinedArray = [...products, ...productsPrices]
combinedArray.forEach((element) => {
  console.log(`Combined Array Element: ${element}`)
})

// Destructuring Arrays
let [one, two] = products
// console.log(`One: ${one}\nTwo: ${two}`)

// Ignoring Elements When Destructuring an Array
let [, , three] = products
// console.log(`Three: ${three}`)

// Assigning Remaining Elements to an Array
let [, ...highestPrices] = productsPrices.sort((a, b) => a - b)
highestPrices.forEach((price) => {
  console.log(`High price: $${price}`)
})

// // Nullish coallescing
// let taxRate
// console.log(`Tax rate: ${taxRate ?? 10}%`)
// taxRate = 0
// console.log(`Tax rate: ${taxRate ?? 10}%`)

// if (hatPrice === bootsPrice) {
//   console.log('Prices are the same')
// } else {
//   console.log('Prices are different')
// }

// function sumPrices(first, second, third = 0) {
//   return first + second + third
// }
const sumPrices = (...prices) =>
  prices.reduce(
    (total, price) => total + (Number.isNaN(Number(price)) ? 0 : Number(price)),
    0
  )

// let totalPrice = Number(hatPrice) + Number(bootsPrice)
let totalPrice = sumPrices(hat.price, boots.price, gloves.price)
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`)

// totalPrice = sumPrices(100, 200, 300)
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`)

// totalPrice = sumPrices(100, 200, undefined, false, 'Hello')
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`)

// let myVariable = 'Adam'
// console.log(`Type: ${typeof myVariable}`)

// myVariable = 100
// console.log(`Type: ${typeof myVariable}`)

// let firstCity
// let secondCity = firstCity || 'London'
// console.log(`City: ${secondCity}`)
