
const frstNm = document.getElementById("fn").value;
const lNm = document.getElementById("ln").value;
const crse = document.getElementById("crs").value;
const secnm = document.getElementById("snm").value;
const roleyPoley = document.getElementById("role").value;

const person = {
    fName: null,
    lName: null,
    Course: null,
    SecNum: null,
    Role: null,
}

document.getElementById("subbutt").addEventListener("click",makePers())
function makePers(){
    person.fName = frstNm;
    person.lName = lNm;
    person.Course = crse;
    person.SecNum = secnm;
    person.Role = roleyPoley;

    consoleIt()
}
function consoleIt(){
    console.log("---Object---")
    console.log(person)
    console.log("---String---")
    const jsonPerson = JSON.stringify(person)
}
