const {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
} = require('./homework');

describe('Задание №0 initVal', () => {
    test('Ошибок нет', () => {
        expect(initVal()).toBe(void 0);
    });
});

describe('Задание №1 getValue', () => {
    test('Число 42', () => {
        expect(stringToNumber('42')).toBe(42);
    });

    test('Число 042', () => {
        expect(stringToNumber('042')).toBe(42);
    });

    test('Число a42', () => {
        expect(stringToNumber('a42')).toBe(NaN);
    });

    test('Число 42and3', () => {
        expect(stringToNumber('42and3')).toBe(42);
    });
});

describe('Задание №2 checkValue', () => {
    describe('checkVal1', () => {
        test('42', () => {
            expect(checkVal1(42, false)).toBe(42);
        });
        test('0', () => {
            expect(checkVal1(0, false)).toBe(false);
        });
        test('-42', () => {
            expect(checkVal1(-42, false)).toBe(-42);
        });
    });
    describe('checkVal2', () => {
        test('42', () => {
            expect(checkVal2(42, false)).toBe(42);
        });
        test('0', () => {
            expect(checkVal2(0, false)).toBe(false);
        });
        test('-42', () => {
            expect(checkVal2(-42, false)).toBe(-42);
        });
    });
    describe('checkVal3', () => {
        test('42', () => {
            expect(checkVal3(42, false)).toBe(42);
        });
        test('0', () => {
            expect(checkVal3(0, false)).toBe(false);
        });
        test('-42', () => {
            expect(checkVal3(-42, false)).toBe(-42);
        });
    });
});

describe('Задание №3 renderItem', () => {
    test('Товар Шкаф 42 64 true', () => {
        expect(renderItem('Шкаф', 42, 64, true)).toBe('Товар Шкаф, шириной 42, высотой 64, коробка');
    });

    test('Товар Шкаф -42 64 true', () => {
        expect(renderItem('Шкаф', -42, 64, true)).toBe('Товар Шкаф, шириной -42, высотой 64, коробка');
    });

    test('Товар Стол 32 32 false', () => {
        expect(renderItem('Стол', 32, 32, false)).toBe('Товар Стол, шириной 32, высотой 32, не коробка');
    });

    test('Товар Стол 32 null false', () => {
        expect(renderItem('Стол', 32, null, false)).toBe('Товар Стол, шириной 32, высотой 0, не коробка');
    });

    test('Товар Стол null null false', () => {
        expect(renderItem('Стол', null, null, false)).toBe('Товар Стол, шириной 0, высотой 0, не коробка');
    });

    test('Товар', () => {
        expect(renderItem()).toBe('Товар , шириной 0, высотой 0, не коробка');
    });
})


describe('Задание №4 oddNum', () => {
    test('Не четные до 10', () => {
        expect(oddNum(10)).toBe('1 3 5 7 9');
    });

    test('Не четные до 1', () => {
        expect(oddNum(1)).toBe('1');
    });

    test('Не четные до -10', () => {
        expect(oddNum(-10)).toBe('');
    });
})

describe('Задание №5 factorial', () => {
    test('factorial 10', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('factorial 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial 5', () => {
        expect(factorial(5)).toBe(120);
    });
})
