import operate from '../logic/operate';

describe('Check Calculator Operations', () => {
  describe('Check Addition', () => {
    const add = operate(11, 5, '+');
    test('11 + 6 = 16', () => {
      expect(add).toBe('16');
    });
  });

  describe('Check Subtraction', () => {
    const subtract = operate(11, 6, '-');
    test('11 - 6 = 5', () => {
      expect(subtract).toBe('5');
    });
  });

  describe('Check Multiplication', () => {
    const multiply = operate(3, 3, 'x');
    test('3 x 3 = 9', () => {
      expect(multiply).toBe('9');
    });
  });

  describe('Check Division', () => {
    const divide = operate(30, 5, '÷');
    test('30 ÷ 5 = 6', () => {
      expect(divide).toBe('6');
    });
  });
});
