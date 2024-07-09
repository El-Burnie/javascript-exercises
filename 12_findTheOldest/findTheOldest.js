const calculateAge = function (person) {
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
    const currentYear = (new Date()).getFullYear();
    return people
        .map((person) => {
            if (!("yearOfDeath" in person)) person.yearOfDeath = currentYear;
            return person;
        })
        .reduce((oldest, person) => {
            return calculateAge(oldest) < calculateAge(person) ? person : oldest;
        });  
};

// Do not edit below this line
module.exports = findTheOldest;
