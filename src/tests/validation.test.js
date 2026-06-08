import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"

// Använd en "test" eller "it" (de är synonymer) för varje testfall
/* Exempel på syntax:
test('beskriv testfallet', () => {
	// här skriver du testkoden
	// avsluta alltid med "expect"
	})
	*/



// 1. it returns true for a valid cart object
// 2. it returns false for invalid cart objects

// 3. it returns true for a valid product
// 4. it returns false for invalid cart objects


describe('Validation', () => {

	test('returns true for a valid cart object', () => {
		expect(isCartItem(exampleCartObject)).toBe(true)
	})

	test('returns false for cart object without amount', () => {
		const invalidCartObject = {
			id: 2001,
			item: exampleProduct
		}
		expect(isCartItem(invalidCartObject)).toBe(false)
	})

	test('returns false for cart object without id', () => {
		const invalidCartObject = {
			amount: 1,
			item: exampleProduct
		}
		expect(isCartItem(invalidCartObject)).toBe(false)
	})

	test('returns true for a valid product', () => {
		expect(isProduct(exampleProduct)).toBe(true)
	})

	test('returns false for a product without price', () => {
		const invalidProduct = {
			id: 1001,
			name: 'Badanka'
		}
		expect(isProduct(invalidProduct)).toBe(false)
	})

	test('returns false for cart object with negative amount', () => {
		const invalidCartObject = {
			id: 2001,
			amount: -1,
			item: exampleProduct
		}
		expect(isCartItem(invalidCartObject)).toBe(false)
	})

	test('returns false for product with negative price', () => {
		const invalidProduct = {
			id: 1001,
			name: 'Badanka',
			price: -500
		}

		expect(isProduct(invalidProduct)).toBe(false)
	})
})