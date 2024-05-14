const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let currentAge = (current.yearOfDeath ?? new Date().getFullYear()) - current.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth;
        return currentAge > oldestAge ? current : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
