import {chessBoard} from './modules/task_1.js';
import {envelope} from './modules/task_2.js';
// import {sortTriangle} from './modules/task_3.js';
import {polindrom} from './modules/task_4.js';
import {luckyTickets} from './modules/task_5.js';
import {getNumbers} from './modules/task_6.js';
// import {fibRow} from './modules/task_7.js';

document.querySelectorAll('.nav-link').forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        let _this = e.target;
        $('.collapse').collapse('hide');
        $(_this.getAttribute('href')).collapse('show');
    });
});

//1 task
document.querySelector('#f0 button').addEventListener('click', e=>{
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f0 input').forEach(item=>{
        data[item.name] = item.value;
    });
    let result = chessBoard(Number(data.height), Number(data.width), data.char);
    if(result.reason){
        document.getElementById('0').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('0').innerHTML = result;
    }

});

//2 task
document.querySelector('#f1 button').addEventListener('click', e=>{
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f1 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = envelope({w: data.wOne, h: data.hOne}, {w: data.wTwo, h: data.hTwo});
    if(result.reason){
        document.getElementById('1').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else if (result !== 0) {
        document.getElementById('1').innerHTML = `Вложение возможно в конверт под номером: ${result}`;
    } else document.getElementById('1').innerHTML = `Вложение не возможно!`;
});

//3 task
let dataTask3 = [];
document.querySelector('#f2 button').addEventListener('click', e=>{
    e.preventDefault();
    let obj = {};
    obj['vertices'] = document.querySelector('#f2 input[name="vertices"]').value;
    obj[`${obj.vertices[0]}`] = Number(document.querySelector('#f2 input[name="tF"]').value);
    obj[`${obj.vertices[1]}`] = Number(document.querySelector('#f2 input[name="tS"]').value);
    obj[`${obj.vertices[2]}`] = Number(document.querySelector('#f2 input[name="tT"]').value);
    dataTask3.push(obj);
    document.getElementById('t-list').innerHTML += obj.vertices + ' ';
});
document.querySelector('#f2 a').addEventListener('click', e=>{
    e.preventDefault();
    let result = sortTriangle(dataTask3);
    if(result.reason){
        document.getElementById('2').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('2').innerHTML = `Отсортированые треугольники:\n[ `;
        result.forEach(item=>{
            document.getElementById('2').innerHTML += `${item} `;
        })
        document.getElementById('2').innerHTML += `]`;
    }
});

//4 task
document.querySelector('#f3 button').addEventListener('click', e => {
    e.preventDefault();
    let number = Number(document.querySelector('#f3 input[name="number"]').value);
    let result = polindrom(number);
    if(result.reason){
        document.getElementById('3').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('3').innerHTML = `Наибольший палендром -> ${result}`;
    }
});

//5 task
document.querySelector('#f4 button').addEventListener('click', e=> {
    e.preventDefault();
    let obj ={
        min: Number(document.querySelector('#f4 input[name="ticketMin"]').value),
        max: Number(document.querySelector('#f4 input[name="ticketMax"]').value),
    };
    let result = luckyTickets(obj);
    if(result.reason){
        document.getElementById('4').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('4').innerHTML = `Метод-победитель -> ${result.winner}\nКол-во счастливых билетов по простому способу -> ${result.simpleCount}\nКол-во счастливых билетов по сложному способу -> ${result.hardCount}`;
    }
});

//6 task
document.querySelector('#f5 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f5 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = getNumbers(data.length ,data.minPow);
    if(result.reason){
        document.getElementById('5').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('5').innerHTML = `Числовой ряд: ${result}`;
    }
});

//7 task
document.querySelector('#f6-1 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f6-1 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = fibRow(data);
    if(result.reason){
        document.getElementById('6').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('6').innerHTML = `Числовой ряд: \n`;
        result.forEach(item=>{
            document.getElementById('6').innerHTML += `${item} `
        })
    }
});
document.querySelector('#f6-2 button').addEventListener('click', e=> {
    e.preventDefault();
    let data = {};
    document.querySelectorAll('#f6-2 input').forEach(item=>{
        data[item.name] = Number(item.value);
    });
    let result = fibRow(data);
    if(result.reason){
        document.getElementById('6').innerHTML = `status: ${result.status} \nreason:${result.reason}`;
    }else{
        document.getElementById('6').innerHTML = `Числовой ряд: \n`;
        result.forEach(item=>{
            document.getElementById('6').innerHTML += `${item} `
        })
    }
});