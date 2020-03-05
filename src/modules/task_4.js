export function polindrom(number) {
    number = Math.abs(number);
    let result = validationPalindrom(number);

    if (typeof (result) === 'object') {
        return result;
    }

    let str = number.toString();
    let maxPoli = '';

    for (let i = str.length; i >= 0; i--) {
        for (let j = 0; j <str.length; j++) {
            if (str.slice(j,i).length <= maxPoli.length + 1) {break;} //  если мы перебираем отрезки меньшие чем уже найденный полиндром, прерываем цикл
            if (str.slice(j, i) === str.slice(j, i).split('').reverse().join('') &&
                str.slice(j,i).length > 1) { // если не найдено ни одного полиндрома, то поиск возможен для чисел > 9
                maxPoli = str.slice(j,i);
            }
        }
    }
    maxPoli = (!maxPoli) ? 0 : maxPoli;
    
    return maxPoli;
}

function validationPalindrom (number) {
    //проверка на число
    if (isNaN(number)) {
        return { 
            status: "failed", 
            reason: "Введите число"
        };  
    }
    //проверка на целое число число
    if (!Number.isInteger(number)) {
        return { 
            status: "failed", 
            reason: "Введите целое число"
        };  
    }
    // проверка на нулевое значение
    if (number == 0) {
        return { 
            status: "failed", 
            reason: "Введите ненулевые данные"
        }; 
    }
    // проверка на диапазон
    if (number <= 9) {
        return {
            status: "failed", 
            reason: "Введите число большее 10"
        };
    }
    // проверка на наличие необходимых аргументов
    if (arguments.length === 0) {
        return {
            status: 'failed', 
            reason: "Введены не все данные"
        };
    }
}

//console.log('poli = ', polindrom(1234599999998744789));
 //console.log('poli = ', polindrom(123459998744789));
//console.log('poli = ', polindrom(123321));
//console.log('poli = ', polindrom(568744789));
 //console.log('poli = ', polindrom('vzdcz')); //  число
//console.log('poli = ', polindrom(null)); //число
//console.log('poli = ', polindrom(''));  // число
// console.log('poli = ', polindrom([]));  // число
// console.log('poli = ', polindrom('[]'));  // число
//console.log('poli = ', polindrom(NaN));  // число
//console.log('poli = ', polindrom(10.255));  //целое число
//console.log('poli = ', polindrom(-123));  // 0
//  console.log('poli = ', polindrom(4));  // > 10
//  console.log('poli = ', polindrom(0));  //не ноль
//  console.log('poli = ', polindrom());  //не ноль