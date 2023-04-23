const numbers: [HTMLElement]| null = document.querySelectorAll(".number");
const inputs = document.querySelectorAll(".input")

const submitBtn: HTMLElement | null = document.getElementById("submit-btn")

interface Date {
    year: number;
    month: number;
    days: number;
}



submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(numbers);

})

