/**
 * The function check if the input is correct: number and the number is correct
 * (e.g.: if it is a month, it should be inferior or equal to 12)
 * @param {*} input: number  it could be a day, a month or a year
 * @returns {boolean}
 */
export const checkInputIsValid = (input : HTMLInputElement) : boolean => {
    const inputValue : number = parseInt(input.value);
    const inputId : string = input.id;
    const isInputNan : boolean = isNaN(inputValue);
    let inputIsValid : boolean = true;

    if (isInputNan) {
        return inputIsValid = false;
    } else {
        inputIsValid = true;
    }

    switch (inputId) {
        case "month":
            return inputIsValid = (inputValue <= 12 && inputValue > 0)
        case "year":
            return inputIsValid = (inputValue <= new Date(Date.now()).getFullYear() && inputValue >= 0)
        case "day":
            const monthInputValue = parseInt((document.getElementById("month") as HTMLInputElement).value);
            inputIsValid = (inputValue > 0 && inputValue <= 31)

            if (monthInputValue === 2) {
                inputIsValid = (inputValue <= 29)
            }
            if ((monthInputValue < 8 && monthInputValue % 2 === 0 && monthInputValue !== 2) || (monthInputValue > 8 && monthInputValue % 2 !== 0)) {
                inputIsValid = (inputValue <= 30)
            }
            if ((monthInputValue < 8 && monthInputValue % 2 !== 0) || (monthInputValue > 8 && monthInputValue % 2 === 0) || monthInputValue === 8) {
                inputIsValid = (inputValue <= 31)
            }
            return inputIsValid;
            default:inputId
                break;
    }

    return inputIsValid;
}


/**
 * Set an error to the corresponding input if it is not valid.
 * Remove the error to corresponding input if it is valid.
 * @param {*} input 
 */
export const setRemoveError = (input : HTMLInputElement):void => {

    const setError = () => {
        (input.closest(".entry") as HTMLElement).classList.add("error");
    }
    const removeError = () => {
        (input.closest(".entry") as HTMLElement).classList.remove("error")
    }


    if(!checkInputIsValid(input)){
        setError()
    }
    if(checkInputIsValid(input)){
        removeError();
    }

}