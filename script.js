class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        return this._numberOfStudents = value;

    }

    quickFacts() {

        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`

    }

    static pickSubstituteTeacher() {
        let teacher = ['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'];
        let random = Math.floor(Math.random() * teacher.length);
        return teacher[random];
    }
}

class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents);
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}


class Catalog {
    constructor() {
        this._myCatalog = [];
    }
    get myCatalog() {
        return this._myCatalog;
    }
    set myCatalog(newSchool) {
        this._myCatalog.push(newSchool);
    }
    addSchool(school) {
        this._myCatalog.push(school);
    }
}

const sierreNevada = new Primary('Sierre Nevada', 'primary', 422, 'Students must be picked up by a parent, guardian, or a family member over the age of 15.')
const elkhart = new High("Elkhart", 'high', 515, ['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey'])
const optimus = new Middle("Optimus", 'middle', 455)

const catalogLibrary = new Catalog();

catalogLibrary.addSchool(sierreNevada);
catalogLibrary.addSchool(elkhart);
catalogLibrary.addSchool(optimus);

console.log(catalogLibrary);

/////// DOM ///////

let submitBtn = document.getElementById("submit_btn");
let schoolSelect = document.getElementById("schoolTypeSelect");
let titleSchool = document.getElementById("titleOfSchool");
let studentsNumber = document.getElementById("studentsNumber");
let pickupPolicy = document.getElementById("pickupPolicy");
let sportsTeams = document.getElementById("sportsTeams");
let schoolOverview = document.getElementById("schoolOverview");
let catalogLib = document.getElementById("catalogSchool");

submitBtn.onclick = () => {

    let constructor =
        schoolSelect.value === "High" ?
        High :
        schoolSelect.value === "Middle" ?
        Middle :
        schoolSelect.value === "Primary" ?
        Primary :
        "";
    let newSchool = new constructor(
        titleSchool.value,
        studentsNumber.value,
        pickupPolicy.value,
        sportsTeams.value,
        schoolOverview.value
    );

    catalogLibrary.addSchool(newSchool);
    let result = [];
    catalogLibrary.myCatalog.forEach((element) => result.push(element.name));
    console.log(result)
    return (catalogLib.innerHTML = result.join("<br>"));
};