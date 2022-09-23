// Form and Thank You ontainers
const userForm = document.getElementById("user-data-container")
const thankYouContainer = document.getElementById("thank-you-container")

// Card Front Data
const cardName = document.getElementById("card-name") 
const cardNumber = document.getElementById("card-number")
const cardExpDate = document.getElementById("card-exp-date")
const cardCVC = document.getElementById("card-cvc")

// Buttons for both Input and Thank You
const submitBtn = document.getElementById("submit-btn")
const confirmBtn = document.getElementById("confirm-btn")

// Error message divs
const errorCardLength = document.getElementById("card-num-error")
const errorCardLetter = document.getElementById("card-letter-error")
const errorMMYY = document.getElementById("mmyy-error")
const errorCVC = document.getElementById("cvc-error")

// Functions
function registerUser() {
    
    if (!check()) {
        return
    }

    else {
        /* Get input values */
        const inputName = document.getElementById("input-user-name").value
        const inputCardNumber = document.getElementById("input-card-number").value
        const inputMonth = document.getElementById("input-month").value
        const inputYear = document.getElementById("input-year").value
        const inputCVC = document.getElementById("input-cvc").value

        const inputExpDate = `${inputMonth}/${inputYear}` /* Format month and year to MM/YY */

        /* Assign input values card on the left */
        cardName.textContent = inputName
        cardNumber.textContent = inputCardNumber
        cardExpDate.textContent = inputExpDate
        cardCVC.textContent = inputCVC 

        userForm.style.display = "none"
        thankYouContainer.style.display = "flex"

        // Clear fields' value
        const all_inputs = document.querySelectorAll('[type="text"]')

        for (let input of all_inputs){
            input.value = ""
        }
    }
}

function showInputForm () {
    userForm.style.display = "block"
    thankYouContainer.style.display = "none"
}
// Validation function
function check () {
    let valid = true
    
    // Check card number field length
    if (cardNumInput.value.length-3 < 16) {
        valid = false
        cardNumInput.classList.add("err")
        errorCardLength.textContent = "- Length must be equal to 16"
    }

    // Check if card number field contains letters
    if (/[a-zA-Z]/.test(cardNumInput.value)) {
        valid = false
        cardNumInput.classList.add("err")
        errorCardLetter.textContent = "- Card number cannot contain letters"
    }

    // Check if there are empty fields
    const inputName = document.getElementById("input-user-name")
    const inputCardNumber = document.getElementById("input-card-number")
    const inputMonth = document.getElementById("input-month")
    const inputYear = document.getElementById("input-year")
    const inputCVC = document.getElementById("input-cvc")

    //Get all input objects
    const inputs = [inputName, inputCardNumber, inputMonth, inputYear, inputCVC]
    for (let index in inputs) {

        // Check if name field is empty

        // Check if MM/YY fields are empty
        if (inputs[index].value.length === 0 && index > 1 && index < 4) {
            errorMMYY.textContent = "Cannot be blank"
            inputs[index].classList.add("err")
            valid = false
        }

        // Check if MM/YY fields are filled
        if (inputs[index].value.length != 0 && index > 1 && index < 4) {
            errorMMYY.textContent = ""
            inputs[index].classList.remove("err")
        }

        // Check if CVC field is empty
        if (inputs[index].value.length === 0 && index == 4) {
            errorCVC.textContent = "Cannot be blank"
            inputs[index].classList.add("err")
            valid = false
        }

        // Check if CVC field is filled
        if (inputs[index].value.length != 0 && index == 4) {
            errorCVC.textContent = ""
            inputs[index].classList.remove("err")
        }
       

    }

    return valid;
  }

// Event listeners
submitBtn.addEventListener("click", registerUser)

// For card number input formatting
const cardNumInput = document.getElementsByClassName("input-card-number")[0]

cardNumInput.addEventListener("input", function () {
    // Reset error message
    cardNumInput.classList.remove("err")
    errorCardLength.textContent = ""
    errorCardLetter.textContent = ""

    //Add space after every 4 keystrokes
    if (cardNumInput.value.length === 4)  {
        cardNumInput.value = `${cardNumInput.value} `
    }

    if (cardNumInput.value.length === 9)  {
        cardNumInput.value = `${cardNumInput.value} `
    }

    if (cardNumInput.value.length === 14)  {
        cardNumInput.value = `${cardNumInput.value} `
    }
}
)





