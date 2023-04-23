import { checkInputIsValid, setRemoveError } from "./utils/validation.js";

var numbers = document.querySelectorAll(".number");
var inputs = document.querySelectorAll(".input");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let birthMonth = e.target.querySelector("#month");
    let birthYear = e.target.querySelector("#year");
    let birthDay = e.target.querySelector("#day");

    if(!checkInputIsValid(birthMonth) || !checkInputIsValid(birthDay) || !checkInputIsValid(birthYear)){
        setRemoveError(birthDay)
        setRemoveError(birthMonth)
        setRemoveError(birthYear)
        return
    }
   
    let today = Date.now()
    let birthdate = new Date(`${birthYear.value}-${birthMonth.value}-${birthDay.value}`)

    const oneDayLength = 24 * 3600 * 1000;
    const numberOfYears = Math.floor((today - birthdate) / (365 * oneDayLength))
    const numberOfMonth = Math.floor(((today - birthdate) % (365 * oneDayLength)) / (30.4 * oneDayLength))
    const numberOfDays = Math.floor((((today - birthdate) % (365 * oneDayLength)) % (30.4 * oneDayLength)) / (oneDayLength));

    const length = {
        days: numberOfDays,
        months: numberOfMonth,
        years: numberOfYears
    }

    numbers.forEach(number => {
        console.log(number);
        switch (number.id) {
            case ("years"):
                number.innerHTML = length.years
                break;
            case ("months"):
                number.innerHTML = length.months
                break;
            case ("days"):
                number.innerHTML = length.days
                break;

            default:
                break;
        }
    })
})




inputs.forEach(input => {
    input.addEventListener("focusout", () => {
        setRemoveError(input)
    })

    input.addEventListener("change", () => {
        setRemoveError(input)
    })
})