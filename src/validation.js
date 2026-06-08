// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat


/**Kontrollera att objekten ser ut som förväntat */

function isCartItem(maybeCartItem) {
    return (
        typeof maybeCartItem.id == 'number' &&
        typeof maybeCartItem.amount == 'number' &&
        maybeCartItem.amount > 0 &&
        isProduct(maybeCartItem.item)
    )
}


function isProduct(maybeProduct) {
    return (
        typeof maybeProduct.id === 'number' &&
        typeof maybeProduct.name === 'string' &&
        maybeProduct.name.length > 0 &&
        typeof maybeProduct.price === 'number' &&
        maybeProduct.price > 0
    )

}


export { isCartItem, isProduct }
