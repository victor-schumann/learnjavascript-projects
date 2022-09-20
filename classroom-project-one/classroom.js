/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach(function(grade) {
        return sum += grade;
    })
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let average = 0;
    grades.forEach(function(grade) {
        return average += grade;
    })
    return average / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    return grades.filter(function(grade) {
        return grade >= 10;
    })
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    return grades.filter(function(grade) {
        return grade < 10;
    })
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    const raised = grades.map(function(grade) {
        if (grade < 20) {
            return grade + 1;
        }
        return grade;
    })
    return raised;
}
