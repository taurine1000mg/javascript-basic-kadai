console.log(new Date(8.64e5).toString());
console.log(new Date(8.64e15 + 1).toString());

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();


console.log (year + '年' + month + '月' + date + '日');