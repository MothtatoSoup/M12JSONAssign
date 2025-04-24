
const frstNm = document.getElementById("fn")
const lNm = document.getElementById("ln")
const crse = document.getElementById("crs")
const secnm = document.getElementById("snm")
const roleyPoley = document.getElementById("role")

const person = {
    fName: null,
    lName: null,
    Course: null,
    SecNum: null,
    Role: null,
};

document.getElementById("subbutt").addEventListener("click",makePers)
function makePers(){
    person.fName = frstNm.value;
    person.lName = lNm.value;
    person.Course = crse.value;
    person.SecNum = secnm.value;
    person.Role = roleyPoley.value;

    console.log("---Object---")
    console.log(person)
    console.log("---String---")
    const jsonPerson = JSON.stringify(person)
    console.log(jsonPerson)

    prompt()
    event.preventDefault
};
