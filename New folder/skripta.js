$(document).ready(function () {

    function Person(name, surname) {
        this.name = name,
            this.surname = surname;
        this.fullName = function () {
            return this.name + " " + this.surname;
        }
    }

    var Person1 = new Person("Martin", "Mitevski");
    var Person2 = new Person("Dragan", "Gelevski");
    var Person3 = new Person("Nadica", "Mitevska");
    var Person4 = new Person("Natasha", "Aleksovska");
    var Person5 = new Person("Stefanija", "Naskova");

    function AddressBook() {
        var people = []; // do tuka sam srediv (so tvoite instrukcii) a za metodite se konsultirav so kolega

        this.addPerson = person => {
            people.push(person);//za ova so push znaev kako treba ama ova nad nego ne znam da si go objasnam (od ednakvoto natamu sto se slucuva)
        }
        this.deletePerson = person => {
            let i = people.indexOf();
            let deleted = people.splice(i, 1);//ista prikazna kako add, splice go skontav sto mu e ideata ama ne znaev kako da go implementiram (= X => delot ne go razbiram, i na cas go koristevme vcera)

        }
    }
    this.getPeople = function () {
        console.log("These are the people remaining in the database:");
        persons.forEach(add => {
            console.log(add.fullName());
        });
    }// ova nemav idea kako da go napravam, drugar mi go kaza pls explain dvata reda nad komentarov, ne se razbrav ubavo so nego

    let members = new AddressBook();
    members.addPerson(Person1);
    members.addPerson(Person4);
    members.deletePerson(Person2);
    members.deletePerson(Person3);
    members.deletePerson(Person5);
    members.getPeople();


})