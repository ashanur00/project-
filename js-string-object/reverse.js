const sentence = 'I am learning Web dev.';
// const result = '.veD beW gninrael ma I';

let reverse = ''
for(const letter of sentence){
    // console.log(letter)
    reverse = letter + reverse;
}
console.log(reverse);