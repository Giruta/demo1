import {getNumbers} from '../../modules/task_6.js';

export function testGetNumbers(assert) {
    describe('Tests for Task_6', () => {
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called lengs = 0, num = 0', function () {
            //Given
            const lengs = 0;
            const num = 0;
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called lengs = NaN, num = 0', function () {
            //Given
            const lengs = NaN;
            const num = 0;
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called lengs = 8, num = null', function () {
            //Given
            const lengs = 8;
            const num = null;
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введите ненулевые данные"} if polindrom called lengs = undefined, num = 50', function () {
            //Given
            const lengs = undefined;
            const num = 50;
            const expected = {status: "failed", reason: "Введите ненулевые данные"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются числовыми значениями"} if polindrom called lengs = "ggg", num = 50', function () {
            //Given
            const lengs = 'ggg';
            const num = 50;
            const expected = {status: "failed", reason: "Введённые данные не являются числовыми значениями"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются числовыми значениями"} if polindrom called lengs = "", num = [50, 1]', function () {
            //Given
            const lengs = '';
            const num = [50, 1];
            const expected = {status: "failed", reason: "Введённые данные не являются числовыми значениями"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return {status: "failed", reason: "Введённые данные не являются целыми числами"} if polindrom called lengs = 8.4, num = 50.6666', function () {
            //Given
            const lengs = 8.4;
            const num = 50.6666;
            const expected = {status: "failed", reason: "Введённые данные не являются целыми числами"};
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return [8, 9, 10, 11, 12, 13, 14, 15] if polindrom called lengs = -84, num = 50', function () {
            //Given
            const lengs = -8;
            const num = -50;
            const expected = [8, 9, 10, 11, 12, 13, 14, 15];
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return [23, 24] if polindrom called lengs = 2, num = 500', function () {
            //Given
            const lengs = 2;
            const num = 500;
            const expected = [23, 24];
        
            //When
            let actual = getNumbers(lengs, num);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        
    })
}