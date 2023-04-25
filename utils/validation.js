"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRemoveError = exports.checkInputIsValid = void 0;
/**
 * The function check if the input is correct: number and the number is correct
 * (e.g.: if it is a month, it should be inferior or equal to 12)
 * @param {*} input: number  it could be a day, a month or a year
 * @returns {boolean}
 */
var checkInputIsValid = function (input) {
    var inputValue = parseInt(input.value);
    var inputId = input.id;
    var isInputNan = isNaN(inputValue);
    var inputIsValid = true;
    if (isInputNan) {
        return inputIsValid = false;
    }
    else {
        inputIsValid = true;
    }
    switch (inputId) {
        case "month":
            return inputIsValid = (inputValue <= 12 && inputValue > 0);
        case "year":
            return inputIsValid = (inputValue <= new Date(Date.now()).getFullYear() && inputValue >= 0);
        case "day":
            var monthInputValue = parseInt(document.getElementById("month").value);
            inputIsValid = (inputValue > 0 && inputValue <= 31);
            if (monthInputValue === 2) {
                inputIsValid = (inputValue <= 29);
            }
            if ((monthInputValue < 8 && monthInputValue % 2 === 0 && monthInputValue !== 2) || (monthInputValue > 8 && monthInputValue % 2 !== 0)) {
                inputIsValid = (inputValue <= 30);
            }
            if ((monthInputValue < 8 && monthInputValue % 2 !== 0) || (monthInputValue > 8 && monthInputValue % 2 === 0) || monthInputValue === 8) {
                inputIsValid = (inputValue <= 31);
            }
            return inputIsValid;
        default:
            inputId;
            break;
    }
    return inputIsValid;
};
exports.checkInputIsValid = checkInputIsValid;
/**
 * Set an error to the corresponding input if it is not valid.
 * Remove the error to corresponding input if it is valid.
 * @param {*} input
 */
var setRemoveError = function (input) {
    var setError = function () {
        input.closest(".entry").classList.add("error");
    };
    var removeError = function () {
        input.closest(".entry").classList.remove("error");
    };
    if (!(0, exports.checkInputIsValid)(input)) {
        setError();
    }
    if ((0, exports.checkInputIsValid)(input)) {
        removeError();
    }
};
exports.setRemoveError = setRemoveError;
