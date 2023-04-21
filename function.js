// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.

let inventoryArr=["name1","name2","name3"]
let stockquantity =[50,5,10]

function addNew(name,quantity){
    inventoryArr.push(name) 
    stockquantity.push(quantity)

console.log(`${name},${quantity}`)

}
addNew("name4",20)

function update(name, quantity) {
    let index = inventoryArr.indexOf(name);
    if (index !== -1) {
      stockquantity[index] = quantity;
      console.log(`${name},${quantity}`)
    }
  }
  update("name2",15)


function calculate(){
    let sum =0
    for(i =0;i<stockquantity.length;i++){
        sum +=stockquantity[i]
    }
    return sum

}  
let total =calculate()
console.log(total)


function lowest() {
    let data = stockquantity[0];
    let minIndex = 0;
    for (let i = 1; i < stockquantity.length; i++) {
      if (stockquantity[i] < data) {
        data = stockquantity[i];
        minIndex = i;
      }
    }
    return inventoryArr[minIndex];
  }
  let lower =lowest()
  console.log(lower)