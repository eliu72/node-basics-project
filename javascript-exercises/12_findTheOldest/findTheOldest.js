const findTheOldest = function(people) {
    let oldestPerson, oldestAge = 0;
    for (let person of people){
        let age;
        if (person.yearOfDeath){
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        if (age > oldestAge){
            oldestPerson = person;
            oldestAge = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
