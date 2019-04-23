const inputMy = [
    "вертикаль",
    "кильватер",
    "сталкер",
    "кот",
    "кластер",
    "ток",
    "спани",
    "австралопитек",
    "ватерполистка",
    "стрелка",
    "кто"
];

const input = [
    "вертикаль",
    "кильватер",
    "апельсин",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка"
];

console.log(isAnagram2(input));
console.log(isAnagram(input));
console.log(isAnagram2(inputMy));
console.log(isAnagram(inputMy));

function isAnagram2(arr) {
    const output = arr.map(el => el.toLowerCase().split('').sort().join(''));
    const sortUnique = [...(new Set([...output]))];
    return sortUnique.map(e =>
        arr.filter(el => e === el.split('').sort().join('')))
        .filter(array => array.length > 1)
}

function isAnagram(arr) {
    let output, result = [];
    output = arr.map(el => el.toLowerCase().split('').sort().join(''));
    const sortUnique = [...(new Set([...output]))];

    for (let i = 0, len = sortUnique.length; i <= len; i++) {
        let temp = [];
        for (let j = 0; j <= output.length; ++j) {
            if (sortUnique[i] === output[j]) {
                temp.push(arr[j]);
            }
        }
        if (temp[1]) {
            result.push(temp);
        }
    }
    return result;
}


// result
// [
//     ["вертикаль", "кильватер"],
//     ["апельсин", "спаниель"],
//     ["австралопитек", "ватерполистка"],
//     ["кластер", "сталкер", "стрелка"]
// ]
