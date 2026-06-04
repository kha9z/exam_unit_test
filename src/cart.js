/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med
// Kom ihåg att börja med testfallet - inte koden




/**
 * Lägger till en "product" till kundvagnen.
 * @returns true om produkten lades till, false om parametern inte är ett korrekt objekt
*/

function getCartItemCount() {
	return cart.length
}

function addToCart(newItem) {
	if (!isProduct(newItem)) {
		return false
	}


	// const newId = idCounter //används inte
	const index = cart.findIndex(ci => ci.item.id === newItem.id)
	if (index === -1) {
		const cartItem = { id: idCounter, amount: 1, item: newItem }
		idCounter++
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
	return true
}

function getItem(index) {
	return cart[index]
}

//går igenom alla produkter och tar amount * price för varje
function getTotalCartValue() {
	let total = 0

	for (const cartItem of cart) {
		total += cartItem.amount * cartItem.item.price
	}
	return total
}

// tar bort  objekt från kundvagnen på id, behåller cart items utom angivet it
function removeFromCart(itemId) {
	cart = cart.filter(ci => ci.id !== itemId)
}


function editCart(itemId, newValues) {
	const item = cart.find(ci => ci.id === itemId)

	if (!item) {
		throw new Error('Produkten finns inte i kundvagnen')
	}
		Object.assign(item, newValues)
	}

function clearCart() {
	cart = []
}
export { getCartItemCount, addToCart, clearCart, getItem, getTotalCartValue, removeFromCart, editCart }
