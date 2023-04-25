"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_js_1 = require("./utils/validation.js");
var numbers = document.querySelectorAll(".number");
var inputs = document.querySelectorAll(".input");
var form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");
    var target = e.target;
    var birthMonth = target === null || target === void 0 ? void 0 : target.querySelector("#month");
    var birthYear = target === null || target === void 0 ? void 0 : target.querySelector("#year");
    var birthDay = target === null || target === void 0 ? void 0 : target.querySelector("#day");
    if (!(0, validation_js_1.checkInputIsValid)(birthMonth) || !(0, validation_js_1.checkInputIsValid)(birthDay) || !(0, validation_js_1.checkInputIsValid)(birthYear)) {
        (0, validation_js_1.setRemoveError)(birthDay);
        (0, validation_js_1.setRemoveError)(birthMonth);
        (0, validation_js_1.setRemoveError)(birthYear);
        return;
    }
    var today = Date.now();
    var birthdate = new Date("".concat(birthYear.value, "-").concat(birthMonth.value, "-").concat(birthDay.value)).getSeconds();
    var oneDayLength = 24 * 3600 * 1000;
    var numberOfYears = Math.floor((today - birthdate) / (365 * oneDayLength));
    var numberOfMonth = Math.floor(((today - birthdate) % (365 * oneDayLength)) / (30.4 * oneDayLength));
    var numberOfDays = Math.floor((((today - birthdate) % (365 * oneDayLength)) % (30.4 * oneDayLength)) / (oneDayLength));
    var length = {
        days: numberOfDays,
        months: numberOfMonth,
        years: numberOfYears
    };
    numbers === null || numbers === void 0 ? void 0 : numbers.forEach(function (number) {
        console.log(number);
        switch (number.id) {
            case ("years"):
                number.innerHTML = length.years.toString();
                break;
            case ("months"):
                number.innerHTML = length.months.toString();
                break;
            case ("days"):
                number.innerHTML = length.days.toString();
                break;
            default:
                break;
        }
    });
});
inputs.forEach(function (input) {
    input.addEventListener("focusout", function () {
        (0, validation_js_1.setRemoveError)(input);
    });
    input.addEventListener("change", function () {
        (0, validation_js_1.setRemoveError)(input);
    });
});
