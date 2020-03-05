import {testChessBoard} from './test.task1.js';
import {testEnvelope} from './test.task2.js';
import {testPolindrom} from './test.task4.js';
import {testLuckyTickets} from './test.task5.js';
import {testGetNumbers} from './test.task6.js';



//Настройка работы
mocha.setup('bdd');
const assert = chai.assert;

// тестирование самих функций
testEnvelope(assert);
testChessBoard(assert);
testPolindrom(assert);
testLuckyTickets(assert);
testGetNumbers(assert);

//запуск тестов
mocha.run();