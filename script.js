function showMessage() {
    alert("Day 1 completed 🔥");
}

function changeText() {
    const originalName = document.getElementById("title").innerText
    if (originalName === "🚀 15 Days JavaScript Restart") {
        document.getElementById("title").innerText = "You are Improving!";
    } else {
        document.getElementById("title").innerText = "🚀 15 Days JavaScript Restart";
    }

}

function checkNumber() {
    const num1 = document.getElementById("numInput").value;
    if (num1 % 2 === 0) {
        alert("even number");
    } else {
        alert("Odd Number");
    }

}

function checkAge() {
    const num1 = document.getElementById("ageInput").value;
    if (num1 <= 18) {
        alert("minor person");

    } else {
        alert("Adult Person")
    }
}

function checkGrade() {
    const num1 = document.getElementById("marksCheck").value;
    if (num1 >= 90) {
        alert("Grade A")
    } else if (num1 >= 70) {
        alert("Grade B")
    } else if (num1 >= 50) {
        alert("Grade C")
    } else {
        alert("Fail")
    }
}