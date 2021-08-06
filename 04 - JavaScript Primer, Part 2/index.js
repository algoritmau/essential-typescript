// // Creating Custom Prototypes
// let ProductPrototype = {
//   toString: function () {
//     return `toString: Name: ${this.name}, Price: ${this.price}`
//   }
// }

// let hat = {
//   name: 'Hat',
//   price: 100,
//   getTaxedPrice() {
//     return Number(this.price) * 1.2
//   }
// }

// let boots = {
//   name: 'Boots',
//   price: 100,
//   getTaxedPrice() {
//     return Number(this.price) * 1.2
//   }
// }

// Object.setPrototypeOf(hat, ProductPrototype)
// Object.setPrototypeOf(boots, ProductPrototype)

// // console.log(`Hat: ${hat.price}, ${hat.getTaxedPrice()}`)
// // console.log(`toString: ${hat.toString()}`)

// // Inspecting and Modifying an Object’s Prototype
// let hatPrototype = Object.getPrototypeOf(hat)
// hatPrototype.toString = function () {
//   return `toString: Name: ${this.name}, Price: ${this.price}`
// }
// // console.log(`Hat Prototype: ${hatPrototype}`)

// console.log(hat.toString())
// console.log(boots.toString())

// let bootsPrototype = Object.getPrototypeOf(boots)
// console.log(`Boots Prototype: ${bootsPrototype}`)

// console.log(`Common prototype: ${hatPrototype === bootsPrototype}`)

// ==================================== // ==================================== //
// Using Constructor Functions
// let Product = function (name, price) {
//   this.name = name
//   this.price = price
// }

// Product.prototype.toString = function () {
//   return `toString: Name: ${this.name}, Price: ${this.price}`
// }

// let hat = new Product('Hat', 100)
// let boots = new Product('Boots', 100)

// console.log(hat.toString())
// console.log(boots.toString())

// Chaining Constructor Functions
// let TaxedProduct = function (name, price, taxRate) {
//   Product.call(this, name, price)
//   this.taxRate = taxRate
// }

// Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype)

// TaxedProduct.prototype.getTaxedPrice = function () {
//   return Number(this.price) * this.taxRate
// }

// TaxedProduct.prototype.toTaxString = function () {
//   return `${this.toString()}, Tax: ${this.getTaxedPrice()}`
// }

// let hat = new TaxedProduct('Hat', 100, 1.2)
// let boots = new Product('Boots', 100)

// console.log(hat.toTaxString())
// console.log(boots.toString())

// Using JavaScript Classes
class Product {
  constructor(name, price) {
    this.id = Symbol() // Using Symbols for Map Keys
    this.name = name
    this.price = price
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`
  }
}

// Using Inheritance in Classes
class TaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) {
    super(name, price)
    this.taxRate = taxRate
  }

  getTaxedPrice() {
    return Number(this.price) * this.taxRate
  }

  toString() {
    let chainResult = super.toString()
    return `${chainResult}, Tax: ${this.getTaxedPrice()}`
  }

  static process(...products) {
    products.forEach((product) => {
      console.log(product.toString())
    })
  }
}

// let hat = new TaxedProduct('Hat', 100)
// let boots = new TaxedProduct('Boots', 100, 1.3)

// console.log(hat.toString())
// console.log(boots.toString())
// TaxedProduct.process(
//   new TaxedProduct('Pants', 140, 1.2),
//   new TaxedProduct('Socks', 25)
// )

// Using Iterators and Generators
function createProductIterator() {
  const hat = new Product('Hat', 100)
  const boots = new Product('Boots', 100)
  const umbrella = new Product('Umbrella', 25)

  let lastValue

  return {
    next() {
      switch (lastValue) {
        case undefined:
          lastValue = hat
          return {
            value: hat,
            done: false
          }

        case hat:
          lastValue = boots
          return {
            value: boots,
            done: false
          }

        case boots:
          lastValue = umbrella
          return {
            value: umbrella,
            done: false
          }

        case umbrella:
          return {
            value: undefined,
            done: true
          }

        default:
          break
      }
    }
  }
}

let iterator = createProductIterator()
let result = iterator.next()
while (!result.done) {
  console.log(result.value.toString())
  result = iterator.next()
}

// Using a Generator
function* createProductGenerator() {
  yield new Product('Hat', 100)
  yield new Product('Boots', 100)
  yield new Product('Umbrella', 25)
}

;[...createProductGenerator()].forEach((productGenerator) =>
  console.log(productGenerator.toString())
)

// Defining Iterable Objects
class GiftPack {
  constructor(name, product1, product2, product3) {
    this.name = name
    this.product1 = product1
    this.product2 = product2
    this.product3 = product3
  }

  getTotalPrice() {
    return [this.product1, this.product2, this.product3].reduce(
      (total, product) => total + product.price,
      0
    )
  }

  *[Symbol.iterator]() {
    // +getGenerator
    yield this.product1
    yield this.product2
    yield this.product3
  }
}

let winter = new GiftPack(
  'winter',
  new Product('Scarf', 25),
  new Product('Gloves', 16),
  new Product('Coat', 64)
)
console.log(`Total Price: ${winter.getTotalPrice()}`)
// ;[...winter.getGenerator()].forEach((generator) => {
//   console.log(`Product: ${generator}`)
// })
;[...winter].forEach((i) => {
  console.log(`Product: ${i}`)
})

// ==================================== // ==================================== //
// Using JavaScript Collections
console.log(
  '----------------------- Using JavaScript Collections ----------------------- '
)
let data = {
  hat: new Product('Hat', 100)
}
data.boots = new Product('Boots', 100)

// Object.keys(data).forEach((key) => console.log(data[key].toString()))
Object.values(data).forEach((value) => console.log(value.toString()))

// Storing Data by Key Using a Map
console.log(
  '----------------------- Storing Data by Key Using a Map ----------------------- '
)
let dataMap = new Map()
dataMap.set('hat', new Product('Hat', 100))
dataMap.set('boots', new Product('Boots', 100))
;[...dataMap.values()].forEach((value) => console.log(value.toString()))

// Using Symbols for Map Keys
console.log(
  '----------------------- Using Symbols for Map Keys ----------------------- '
)

class Supplier {
  constructor(name, productIds) {
    this.name = name
    this.productIds = productIds
  }
}

let acmeProducts = [
  new Product('Acme Hat', 100),
  new Product('Acme Boots', 120)
]
let zoomProducts = [new Product('Zoom Hat', 80), new Product('Zoom Boots', 100)]

let products = new Map()
;[...acmeProducts, ...zoomProducts].forEach((product) => {
  products.set(product.id, product)
})

let suppliers = new Map()
suppliers.set(
  'acme',
  new Supplier(
    'Acme Co',
    acmeProducts.map((product) => product.id)
  )
)
suppliers.set(
  'zoom',
  new Supplier(
    'Zoom Co',
    zoomProducts.map((product) => product.id)
  )
)

suppliers.get('acme').productIds.forEach((productId) => {
  console.log(`Name: ${products.get(productId).name}`)
})

// Storing Data by Index — Set
console.log(
  '----------------------- Storing Data by Index — Set ----------------------- '
)
let skirt = new Product('Skirt', 80)
let skirtsArray = []
let productsSet = new Set()

for (let i = 0; i < 5; i++) {
  skirtsArray.push(skirt)
  productsSet.add(skirt)
}

console.log(`skirtsArray length: ${skirtsArray.length}`)
console.log(`productsSet size: ${productsSet.size}`)
