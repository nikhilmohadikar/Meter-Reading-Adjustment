const intialReading = document.querySelector("#intialReading");
const finalReading = document.querySelector("#finalReading");
const calculate = document.querySelector("#calculate");
const resultShowOne = document.querySelector("#resultShowOne");
const resultShowTwo = document.querySelector("#resultShowTwo");
const resultShowThree = document.querySelector("#resultShowThree");

// RMU 12 - 6 Reading
const intialReadingSecond = document.querySelector("#intialReadingSecond");
const finalReadingSecond = document.querySelector("#finalReadingSecond");
const selectOne = document.querySelector("#selectOne");
const selectTwo = document.querySelector("#selectTwo");

// Skip Two Reading
const intialReadingThird = document.querySelector("#intialReadingThird");
const finalReadingThird = document.querySelector("#finalReadingThird");

function calculateTwoHours() {
    let num1 = intialReading.value;
    let num2 = finalReading.value;

    if (num1.length && num2.length) {

        let difference = (num2 - num1).toFixed(3);
        let average = difference / 2;
        let result = (+num1) + (+average);

        resultShowOne.classList.add("show")

        let tableCreate = `
            <table>
                    <caption>Result</caption>
                <tbody>
                    <tr>
                        <th>Sr No.</th>
                        <th>Time</th>
                        <th>Reading</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1 Hours</td>
                        <td>${num1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2 Hours</td>
                        <td>${result.toFixed(3)}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3 Hours</td>
                        <td>${num2}</td>
                    </tr>
                </tbody>
            </table>`

        resultShowOne.innerHTML = tableCreate;

    }
}


function myhandleClickTwo() {
    calculateTwoHours()
}


function myhandleClickFour() {
    let num1 = intialReadingSecond.value;     // String
    let num2 = finalReadingSecond.value;
    if (num1.length && num2.length) {

        let readingDifference = num2 - num1;
        let readingDivide = readingDifference / 3;
        let readingMultiply = readingDivide * 2;
        let readingFinal = (+readingMultiply) + (+num1);

        resultShowTwo.classList.remove("shown")

        let tableCreation = `
            <table>
                <caption>Result</caption>
                <tbody>
                    <tr>
                        <th>Sr No.</th>
                        <th>Hours ( 4 )</th>
                        <th>Reading</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>12</td>
                        <td>${num1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>4</td>
                        <td>${readingFinal.toFixed(3)}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>6</td>
                        <td>${num2}</td>
                    </tr>
                </tbody>
            </table>
            `
        resultShowTwo.innerHTML = tableCreation
    }
}

function myhandleSkipTwoReading() {
    let num1 = intialReadingThird.value;     // String
    let num2 = finalReadingThird.value;

    if (num1.length && num2.length) {

        let readingDifference = num2 - num1;
        let readingDivide = readingDifference / 3;
        let twoHrsReading = (+readingDivide) + (+num1);
        let fourHrsReading = (+twoHrsReading) + (+readingDivide)

        resultShowThree.classList.remove("shown")

        let tableCreation = `
            <table>
                <caption>Result</caption>
                <tbody>
                    <tr>
                        <th>Sr No.</th>
                        <th>Hours</th>
                        <th>Reading</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>${num1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>${twoHrsReading.toFixed(3)}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>${fourHrsReading.toFixed(3)}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>4</td>
                        <td>${num2}</td>
                    </tr>
                </tbody>
            </table>
            `
        resultShowThree.innerHTML = tableCreation
    }
}

// Forms
const firstForm = document.querySelector(".firstForm");
const secondForm = document.querySelector(".secondForm");
const thirdForm = document.querySelector(".thirdForm");

const twoHours = document.querySelector("#twoHours");
const fourHours = document.querySelector("#fourHours");
const skipTwoReading = document.querySelector("#skipTwoReading");

twoHours.addEventListener("click", (e) => {
    thirdForm.classList.remove("showHideForm")
    firstForm.classList.remove("showHide")
    secondForm.classList.remove("hideShow")

    intialReadingSecond.value = null
    intialReadingSecond.value = null
    intialReadingSecond.value = null
    finalReadingSecond.value = null
    intialReadingThird.value = null
    finalReadingThird.value = null

    resultShowTwo.classList.add("shown")
    resultShowThree.classList.add("shown")
})

fourHours.addEventListener("click", () => {
    firstForm.classList.add("showHide")
    secondForm.classList.add("hideShow")
    thirdForm.classList.remove("showHideForm")

    intialReading.value = null
    finalReading.value = null
    intialReadingThird.value = null
    finalReadingThird.value = null

    resultShowOne.classList.remove("show");
    resultShowThree.classList.add("shown")
})

skipTwoReading.addEventListener("click", () => {
    firstForm.classList.add("showHide")
    secondForm.classList.remove("hideShow")
    thirdForm.classList.add("showHideForm")

    intialReading.value = null
    finalReading.value = null
    intialReadingSecond.value = null
    finalReadingSecond.value = null

    resultShowOne.classList.remove("show");
    resultShowTwo.classList.add("shown")
})