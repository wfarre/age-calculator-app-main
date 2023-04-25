import { checkInputIsValid, setRemoveError } from "./utils/validation.js";

var numbers :  NodeListOf<Element> | null = document.querySelectorAll(".number");
var inputs : NodeListOf<HTMLInputElement> | null = document.querySelectorAll(".input");
let form : HTMLElement | null = document.getElementById("form");

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("hello");
    
    const target = e.target as HTMLElement;
    let birthMonth = <HTMLInputElement>target?.querySelector("#month");
    let birthYear = <HTMLInputElement>target?.querySelector("#year");
    let birthDay = <HTMLInputElement>target?.querySelector("#day");

    if(!checkInputIsValid(birthMonth) || !checkInputIsValid(birthDay) || !checkInputIsValid(birthYear)){
        setRemoveError(birthDay)
        setRemoveError(birthMonth)
        setRemoveError(birthYear)
        return;
    }
   
    let today:number = Date.now()
    let birthdate: number = new Date(`${birthYear.value}-${birthMonth.value}-${birthDay.value}`).getSeconds()

    const oneDayLength:number = 24 * 3600 * 1000;
    const numberOfYears:number = Math.floor((today - birthdate) / (365 * oneDayLength))
    const numberOfMonth:number = Math.floor(((today - birthdate) % (365 * oneDayLength)) / (30.4 * oneDayLength))
    const numberOfDays:number = Math.floor((((today - birthdate) % (365 * oneDayLength)) % (30.4 * oneDayLength)) / (oneDayLength));

    const length = {
        days: numberOfDays,
        months: numberOfMonth,
        years: numberOfYears
    }

    numbers?.forEach((number : Element) => {
        console.log(number);
        switch (number.id) {
            case ("years"):
                number.innerHTML = length.years.toString()
                break;
            case ("months"):
                number.innerHTML = length.months.toString()
                break;
            case ("days"):
                number.innerHTML = length.days.toString()
                break;

            default:
                break;
        }
    })
})




inputs.forEach((input ) : void  => {
    input.addEventListener("focusout", () => {
        setRemoveError(input)
    })

    input.addEventListener("change", () => {
        setRemoveError(input)
    })
})

