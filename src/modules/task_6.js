export function getNumbers(lengs, number) {
    let resultVal = validationTickets(lengs, number);

    if (typeof (resultVal) === 'object') {
        return resultVal;
    }
    
    lengs = Math.abs(lengs);
    number = Math.abs(number);

    let res = [];
    let count = 0;
    let num = Math.ceil(Math.sqrt(number));
    
    do {
        count++;
        res.push(num);
        num++;
    } while (count < lengs)

    return res;
}

function validationTickets (lengs, number) {

    // проверка на наличие необходимых аргументовна, пустые строки и нули
    if (arguments.length < 2 || lengs == undefined || number == undefined || lengs === 0 || number === 0) {
        return {
            status: 'failed', 
            reason: "Введите ненулевые данные"
        };
    }
    // являются ли введенные данные числами
    if (typeof lengs != "number" || typeof number != "number" || isNaN(lengs) || isNaN(number)) {
        return { 
             status: "failed", 
             reason: "Введённые данные не являются числовыми значениями"
        };
    }
    // являются ли введенные данные целыми числами
    if (!Number.isInteger(lengs) || !Number.isInteger(number)) {
        return {
            status: "failed", 
            reason: "Введённые данные не являются целыми числами"
        }; 
    }
}
// console.log('res = ', getNumbers()); //не ноль
// console.log('res = ', getNumbers(0, 0)); //не ноль
// console.log('res = ', getNumbers(8, null)); // null
// console.log('res = ', getNumbers(undefined, 50)); // null
//console.log('res = ', getNumbers('ggg', 50)); //num
//console.log('res = ', getNumbers('', [1,1])); //num
//console.log('res = ', getNumbers(8.4, 50.6)); [8,9,10,11,12,13,14,15]
//console.log('res = ', getNumbers(-8, -50)); [8,9,10,11,12,13,14,15]
//console.log('res = ', getNumbers(2, 500)); [23,24]
//console.log('res = ', getNumbers(5, 134, 7)); [12, 13, 14, 15, 16]
