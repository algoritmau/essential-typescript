function calculateTax(amount: number): number {
  return amount * 1.2
}

function writePrice(product: string, price: number): void {
  console.log(`The price of the ${product} is $${price.toFixed(2)}`)
}

// let hatPrice = 100
// let glovesPrice = 75
// let umbrellaPrice = 42

let prices: number[] = [100, 75, 42]
let names: string[] = ['Hat', 'Gloves', 'Umbrella']

// writePrice('Hat', calculateTax(hatPrice))
// writePrice('Gloves', calculateTax(glovesPrice))
// writePrice('Umbrella', calculateTax(umbrellaPrice))
// writePrice(names[0], calculateTax(prices[0]))
// writePrice(names[1], calculateTax(prices[1]))
// writePrice(names[2], calculateTax(prices[2]))

prices.forEach((price: number, index: number) => {
  writePrice(names[index], calculateTax(price))
})

// Enums
enum Product {
  Hat,
  Gloves,
  Umbrella
}
let products: [Product, number][] = [
  [Product.Hat, 100],
  [Product.Gloves, 75]
]

products.forEach((product: [Product, number]) => {
  switch (product[0]) {
    case Product.Hat:
      writePrice('Hat', calculateTax(product[1]))
      break

    case Product.Gloves:
      writePrice('Gloves', calculateTax(product[1]))
      break

    case Product.Umbrella:
      writePrice('Umbrella', calculateTax(product[1]))
      break

    default:
      break
  }
})
