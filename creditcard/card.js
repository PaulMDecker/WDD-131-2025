function isCardNumberValid(number) {
	return number  === '1234123412341234'
}
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
    const month = document.getElementById("card-month");
    const year = document.getElementById("card-year");
    const currentYear = Date.prototype.getFullYear()
    const currentMonth = 1 + Date.prototype.getMonth()
	let errorMsg = ''
	console.log(document.getElementById("number").value)
	displayError('')
	if (isNaN(document.getElementById("number").value)) {
        errorMsg += 'Card number is not a valid number\n';
	} else if (isCardNumberValid(document.getElementById("number").value)) {
		errorMsg += 'Card number is not a valid card number\n'
	}else if (year >= currentYear && month >= currentMonth) {
        errorMsg += 'credit card is expired\n';
    }
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}

document.getElementById('button').addEventListener('click', submitHandler)
