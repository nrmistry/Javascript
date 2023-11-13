function getLastName(names) {
    if (names.length === 0) {
        return "Array is empty"
    } else {
        return names[names.length - 1];
    }
}

//const namesArray = ["Charlie", "Rob", "Andy"];
//console.log(getLastName(namesArray));

const namesArray = ["Ash", "Stu"];
console.log(getLastName(namesArray));