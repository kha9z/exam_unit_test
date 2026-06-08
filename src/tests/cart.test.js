// importera här
import { addToCart, getCartItemCount, clearCart, getItem, getTotalCartValue, removeFromCart, editCart } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här


	test('getCartItemCount returnerar antal produkter i kundvagnen', () => {
		const product1 = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		const product2 = {
			id: 1002,
			name: 'Vattenpistol',
			price: 40
		}
		addToCart(product1)
		addToCart(product2)

		expect(getCartItemCount()).toBe(2)
	})

	test('getCartItemCount räknar olika produkter, inte amount', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)
		addToCart(product)

		expect(getCartItemCount()).toBe(1)
	})

	test('getItem returnerar rätt objekt från kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		addToCart(product)

		expect(getItem(0).item.name).toBe('Badanka')
	})

	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		addToCart(input)

		const itemCountAfter = getCartItemCount()
		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})

	test('addToCart ökar amount när samma produkt läggs till två gånger', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		addToCart(product)
		addToCart(product)
		expect(getItem(0).amount).toBe(2)
	})

	test('getTotalCartValue returnerar summan av alla produkter i kundvagnen', () => {
		const product1 = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		const product2 = {
			id: 1002,
			name: 'Vattenpistol',
			price: 40
		}
		addToCart(product1)
		addToCart(product1)
		addToCart(product2)
		expect(getTotalCartValue()).toBe(1040)
	})

	test('editCart ändrar amount på en produkt', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		addToCart(product)

		const cartItemId = getItem(0).id

		editCart(cartItemId, { amount: 5 })
		expect(getItem(0).amount).toBe(5)
	})


	test('editCart kastsr error om itemId inte finns', () => {
		expect(() => {
			editCart(9999, {})
		}).toThrow('Produkten finns inte i kundvagnen')
	})


	test('removeFromCart tar bort en produkt från kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		addToCart(product)

		const cartItemId = getItem(0).id

		removeFromCart(cartItemId)
		expect(getCartItemCount()).toBe(0)
	})

	test('clearCart tömmer kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		addToCart(product)
		clearCart()
		expect(getCartItemCount()).toBe(0)
	})
})
