const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);



// const rev_numbers = [];
// for(const num of numbers) {
//     rev_numbers.unshift(num);
//     // rev_numbers.push(num);
// }
// console.log(rev_numbers);



// const reverse_num = [];
// for(let i = 0; i < numbers.length; i++){
//     const num =numbers[i];
//     reverse_num.unshift(num);
// }
// console.log(reverse_num);

const rev_reverse_num = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    rev_reverse_num.push(num);
}
console.log(rev_reverse_num);

