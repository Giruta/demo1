import {envelope} from '../../modules/task_2.js';

export function testEnvelope(assert) {
    describe('Tests for Task_2', () => {
        it('should return  1 if envelope called { w: 100, h: 80 }, { w: 20, h: 60 }', function () {
            //Given
            const obj1 = { w: 100, h: 80 };
            const obj2 = { w: 20, h: 60 };
            const expected = 1;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  1 if envelope called { w: "35", h: 71 }, { w: 4, h: 6 }', function () {
            //Given
            const obj1 = { w: '35', h: 71 };
            const obj2 = { w: 4, h: 6 };
            const expected = 1;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  1 if envelope called { w: 10.56, h: 80.5 }, { w: 10.3, h: -80 }', function () {
            //Given
            const obj1 = { w: 10.56, h: 80.5 };
            const obj2 = { w: 10.3, h: -80 };
            const expected = 1;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  2 if envelope called { w: 2, h: 12 }, { w: 9, h: 80 }', function () {
            //Given
            const obj1 = { w: 2, h: 12 };
            const obj2 = { w: 9, h: 80 };
            const expected = 2;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  0 if envelope called { w: 20, h: 60 }, { w: -100, h: 15 }', function () {
            //Given
            const obj1 = { w: 20, h: 60 };
            const obj2 = { w: -100, h: 15 };
            const expected = 0;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return  0 if envelope called { w: 20, h: 20 }, { w: 20, h: 20 }', function () {
            //Given
            const obj1 = { w: 20, h: 20 };
            const obj2 = { w: 20, h: 20 };
            const expected = 0;
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.equal(actual, expected);
        });
        it('should return "Введите ненулевые данные" if envelope called { w: 88, h: null }, { w: 45, h: 60 }', function () {
            //Given
            const obj1 = { w: 88, h: null };
            const obj2 = { w: 45, h: 60 };
            const expected = {
                status: "failed", 
                reason: "Введите ненулевые данные"
            };
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return "Введите ненулевые данные" if envelope called { w: 0, h: 80 }, { w: 20, h: 0 }', function () {
            //Given
            const obj1 = { w: 0, h: 80 };
            const obj2 = { w: 20, h: 0 };
            const expected = {
                status: "failed", 
                reason: "Введите ненулевые данные"
            };
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return "Введённые данные не являются числовыми значениями" if envelope called { w: "sdfsd", h: 15.4 }, { w: 20, h: 60 }', function () {
            //Given
            const obj1 = { w: 'sdfsd', h: 15.4 };
            const obj2 = { w: 20, h: 60 };
            const expected = {
                status: "failed", 
                reason: "Введённые данные не являются числовыми значениями"
            };
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return "Введённые данные не являются числовыми значениями" if envelope called { w: "20,3", h: 15.4 }, { w: 45, h: 30 }', function () {
            //Given
            const obj1 = { w: '20,3', h: 15.4 };
            const obj2 = { w: 45, h: 30 };
            const expected = {
                status: "failed", 
                reason: "Введённые данные не являются числовыми значениями"
            };
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.deepEqual(actual, expected);
        });
        it('should return "Введённые данные не являются числовыми значениями" if envelope called { w: 88, h: undefined }, { w: 45, h: 60 }', function () {
            //Given
            const obj1 = { w: 88, h: undefined };
            const obj2 = { w: 45, h: 60 };
            const expected = {
                status: "failed", 
                reason: "Введённые данные не являются числовыми значениями"
            };
        
            //When
            let actual = envelope(obj1, obj2);
        
            //Then
            assert.deepEqual(actual, expected);
        });
    });
}