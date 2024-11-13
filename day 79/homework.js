Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
};

function divideStudentsIntoGroups(students, numGroups) {
    const groupSize = Math.floor(students.length / numGroups);
    const remainder = students.length % numGroups;

    const groups = [];
    let currentIndex = 0;

    for (let i = 0; i < numGroups; i++) {
        const currentGroupSize = groupSize + (i < remainder ? 1 : 0);
        groups.push(students.slice(currentIndex, currentIndex + currentGroupSize));
        currentIndex += currentGroupSize;
    }

    return groups;
}


let students = ["თამარი", "გიორგი", "დავითი", "ანა", "მარიამი", "კახა", "ნინი", "გიგი"];
students.shuffle();
console.log("შემთხვევით შეყარილი სტუდენტები:", students);

let numGroups = 3;
let studentGroups = divideStudentsIntoGroups(students, numGroups);
console.log(`სტუდენტების ჯგუფები (${numGroups} ჯგუფი):`);
studentGroups.forEach((group, index) => {
    console.log(`ჯგუფი ${index + 1}: ${group.join(", ")}`);
});
