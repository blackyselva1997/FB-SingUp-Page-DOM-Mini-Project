let submit = document.querySelector("#submit");
let form = document.querySelector("#form");

form.addEventListener('submit', storeData);
function storeData(e) {
    e.preventDefault();
    console.log("clicked");
    let phNum = document.querySelector("#phNum").value;
    let password = document.querySelector("#pass").value;
    let fName = document.querySelector("#fName").value;
    let lName = document.querySelector("#lName").value;

    localStorage.setItem('phNumber', phNum);
    localStorage.setItem('Password', password);

    if (phNum && password && fName && lName) {
        alert("Successfull Signup");
        location.href = "../index.html"
    } else {
        alert("Fill All input");
    }
}