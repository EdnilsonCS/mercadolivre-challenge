import { formatCondition } from './formatCondition';

describe('test to util formatCondition of item', () => {
  it('should return a formatted value with string "new"', () => {
    const value = formatCondition('new');

    expect(value).toEqual('Nuevo');
  });

  it('should return a formatted value with string "Articule usado" to value "used"', () => {
    const value = formatCondition('used');

    expect(value).toEqual('Artículo usado');
  });
  it('should return a formatted value with string "No especificado" to "not_specified"', () => {
    const value = formatCondition('not_specified');

    expect(value).toEqual('No especificado');
  });
});
