// var addDigits = function(num) {
//     while(num >= 10) {
//         num = num.toString();
//         // console.log(num[1])
//         let total = 0
//         for(let i = 0; i < num.length; i++) {
//             total += parseInt(num[i]);
//             // console.log(total);
//         }
//         // console.log(total);
//         num = total;
//     }
//     return num;
// };

// console.log(addDigits(13));

// let inputString = "The earth is round"

// function returnLastWord(inputString) {
//     let splitString = inputString.split(" ")
//     let reverseArray = splitString.reverse()
//     let lastWord = reverseArray[0]
//     let lastWordLength = lastWord.length

//     return(`the last word is ${lastWord} and it is ${lastWordLength} characters long`)
// }

// console.log(returnLastWord(inputString))

// const arrOne = ["mass","ma", "as", "sass", "hero", "superhero"]
// const arrTwo = ["leetcode", "et", "code"]
// const arrThree = ["blue", "green", "bu"]


// function stringMatch(arr) {
//     let output = []
//     for (let i = 0; i < arr.length; i++){
//       for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[j].indexOf(arr[i]) !== -1) {
//             output.push(arr[i])
//         }
//       }
//     } 
//     return (output)
// }
// console.log(stringMatch(arrOne))




// function phoneNumber(nums) {
//     nums.splice(0, 0, "(")
//     nums.splice(4, 0, ")")
//     nums.splice(8, 0, "-")
//     nums.join('')
//     let nums2 = nums.toString()
//     console.log(nums2)
// }

// phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// function isValid(s) {
//     let ans = "true"
//     let newS = s.split("")
//     for (let i = 1; i < newS.length; i += 2) {
//         if (newS[i] == ")" && newS[i - 1] == "(" || newS[i] == "}" && newS[i - 1] == "{" || newS[i] == "]" && newS[i - 1] == "["){
//         } else {ans = "false"}
//         if (ans === "false") {return ans}
//     }
//     return ans
// }

// console.log(isValid("(){}[]"))
// console.log(isValid("(){)[]"))
// console.log(isValid("()"))
// console.log(isValid("(]"))
// console.log(isValid("([])"))

// function isValid2(s) {
//     let pArr = 0
//     let bArr = 0
//     let cArr = 0
//     let cpArr = 0
//     let cbArr = 0
//     let ccArr = 0
//     let allArr = [pArr, bArr, cArr, cpArr, cbArr, ccArr] 
//     let ans = "true"
//     let newS = s.split("")
//     for (let i = 0; i < newS.length; i++) {
//         if (newS[i] === "(") {
//             console.log("wow")
//             pArr = pArr + 1
//         }
//         if (newS[i] === "[") {
//             console.log("wow")
//             bArr = bArr+1
//         }
//         if (newS[i] === "{") {
//             console.log("wow")
//             cArr = cArr+1
//         }
//         if (newS[i] === ")") {
//             console.log("wow")
//             cpArr = cpArr+1
//         }
//         if (newS[i] === "]") {
//             console.log("wow")
//             cbArr = cbArr+1
//         }
//         if (newS[i] === "}") {
//             console.log("wow")
//             ccArr = ccArr+1
//         }
//     }
//     console.log(allArr)
//     if (pArr === cpArr && bArr === cbArr && cArr === ccArr){
//         return ans
//     } else {let ans = "false"}
//     return ans
// }
// console.log(isValid2("(){}[]"))
// console.log(isValid2("(){)[]"))
// console.log(isValid2("()"))
// console.log(isValid2("(]"))
// console.log(isValid2("([])"))
// console.log(isValid2('[({}[])]'))


// function painInAss(arr) {
//     let arr2 = arr.split('')
//     arr2.forEach(i => {
//         console.log(i)
//         if(i === '(') {
//             console.log('open p')
//         }if (i === ')') {
//             console.log('close p')
//         }if (i === '[') {
//             console.log('open b')
//         }if (i === '] ') {
//             console.log('close b')
//         }if (i === '{') {
//             console.log('open c')
//         }if (i === '}') {
//             console.log('close c')
//         }
//     })
// }

// painInAss("(]")
// painInAss('[]')
// painInAss('[({}[])]')
// painInAss("(){}[]")

// function twoSum(nums, target) {
//     let index = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (i != index) {
//             if (nums[i] + nums[index] === target) {
//                 console.log(nums[i], nums[index])
//             } else { index = index + 1 }
//         }
//     }
// }

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)

// function fizzBuzz(n) {
//     for (let i = 0; i < n; i++) {
//         if ((i % 5) === 0 && (i % 3) === 0) {
//             console.log([i, 'FizzBuzz'])
//         }else if((i % 3) === 0){
//             console.log([i, 'Fizz'])
//         } else if ((i % 5) === 0 ) {
//             console.log([i, 'Buzz'])
//         }
//     }
// }
// fizzBuzz(15)

// function maxProfit(p) {
//     let index = 0
//     let highest = 0
//     let ans = []
//     for (let i = index; i < p.length; i++) {
//         let profit = (p[i] - p[index])
//         console.log(`buying on day ${index + 1} for ${p[index]} and selling on day ${i + 1} for ${p[i]}`)
//             if (profit > p[index] && profit > highest) {
//                 highest = profit
//                 ans.push([p[index], index+1, p[i], i+1])
//             }
//         if (index != p.length && i === p.length - 1) {
//             index = index + 1
//             i = index; continue;
//         }
//     }
//     if (highest){console.log(`you should buy on day ${ans[ans.length-1][1]} for ${ans[ans.length-1][0]} and sell on day ${ans[ans.length-1][3]} for ${ans[ans.length-1][2]} for a profit of ${highest} `)}
//     else {console.log('dont buy, there is no possible profit')}
// }

// maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([7, 6, 4, 3, 1])
// maxProfit([6,1,5,9,2,7,4,1,6,8])
// maxProfit([])

// function countTriples(num) {
//     let n = num+1
//     let index = 1
//     let nums = []
//     const square = (n) => n**2;
//     for (let i = 0; i < n; i++) {
//        if (i+1 === n){
//         index = index + 1;
//         i = -1; continue;
//        } else if(index === n){break;}
//        if(Number.isInteger(Math.sqrt(square(index) + square(i+1))) === true && Math.sqrt(square(index) + square(i+1)) <= num){
//         nums.push(Math.sqrt(square(index) + square(i+1)))
//        }
//     }
//     console.log(nums.length)
//     return(nums.length)
// }

// countTriples(12)
// countTriples(17)


//function that takes in your ds3 vitality level and tells you the max light/med/heavy/max load
// function vitalityInfo(n) {
//     let equipLoad = n + 40
//     let lightLoad = equipLoad * .299
//     let mediumLoad = equipLoad * .699
//     let heavyLoad = equipLoad * .999
//     console.log(`your max carry weight is ${equipLoad.toFixed(2)}, max weight for light load is ${lightLoad.toFixed(2)}, max weight for medium load is ${mediumLoad.toFixed(2)}, max weight for heavy load is ${heavyLoad.toFixed(2)}`)
// }
// vitalityInfo(30)

//function that takes in ds3 equip load and tells you the required stats to carry at different loads
// function canICarryIt(n){
//     let lightLoad = (n / .299).toFixed(0) - 39
//     let mediumLoad = (n / .699).toFixed(0) - 39
//     let heavyLoad = (n / .999).toFixed(0) - 39
//     console.log(`if your equipment load is ${n}, you need ${lightLoad} vitality for light load, ${mediumLoad} for medium load, and ${heavyLoad} for heavy load`)
// }
// canICarryIt(55)
// canICarryIt(30)

// function twoSum(arr, targ) {
//     let index = 0
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i] + arr[index]
//         if (i + 1 === arr.length) {
//             index = index + 1
//             i = 0;
//             continue;
//         } else if (index > arr.length) { break; }
//         if (sum === targ) {
//             console.log([i, index])
//             break;
//         }
//     }
// }

// twoSum([2, 7, 11, 15], 9)


// function singleNum(arr) {
//     let index = 0
//     let pairs = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[index] && index != i) {
//             pairs.push(arr[i])
//         }
//         if (i + 1 == arr.length) {
//             index = index + 1
//             i = 0
//             continue;
//         } else if (index === arr.length) {
//             break;
//         }
//     }
//     for (let i = 0; i < arr.length; i++){
//         if (pairs.includes(arr[i]) === false){
//             console.log(arr[i])
//         }
//     }
// }
// singleNum([1,2,3,4,5,6,1,2,3,4,5,6,7])
// singleNum([1,1,2,2,3,3,4,4,5])
// singleNum([4, 1, 2, 1, 2])


function singleNumber(nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        console.log(`${nums[i]} to ${nums[index]}`)
        if(nums[i] === nums[index] && i != index){
            console.log('bruh')
            i = -1
            index = index+1
            continue;
        }
        if(i === nums.length-1){
            console.log(nums[index])
        }
    }
}
singleNumber([2, 3, 2, 4, 3, 4, 5])
singleNumber([2, 3, 2, 6, 4, 3, 4, 5, 6, 5 , 7, 8, 8])