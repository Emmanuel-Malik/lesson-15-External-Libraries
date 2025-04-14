import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatsun from './15-exercises2.js';

const today = dayjs();
const date = today.add(5, 'days');
console.log(date.format('MMMM D'));

const month = today.add(1, 'month');
console.log(month.format('MMMM D'));

const prevMonth = today.subtract(1, 'month');
console.log(prevMonth.format('MMMM D'));

const tomorrow = today.add(1, 'days');
console.log(tomorrow.format('dddd'));


let theDate = dayjs();
console.log(theDate.format('dddd, MMMM D'));
console.log(isSatsun(theDate));

theDate = dayjs().add(2, 'day');
console.log(theDate.format('dddd, MMMM D'));
console.log(isSatsun(theDate));

theDate = dayjs().add(4, 'day');
console.log(theDate.format('dddd, MMMM D'));
console.log(isSatsun(theDate));

theDate = dayjs().add(6, 'day');
console.log(theDate.format('dddd, MMMM D'));
console.log(isSatsun(theDate));