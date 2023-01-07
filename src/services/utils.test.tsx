import {isObjectEmpty, getHeadingFromLocation} from './utils';

describe('Utils functions', () => {
  describe('isObjectEmpty', () => {
    it('should return true', () => {
      const obj = {};
      expect(isObjectEmpty(obj)).toBe(true);
    });

    it('should return false', () => {
      const obj = {
        prop: 'teste',
      };
      expect(isObjectEmpty(obj)).toBe(false);
    });
  });

  describe('getHeadingFromLocation', () => {
    it('should return true', () => {
      const locationX = {
        latitude: -22.90483,
        longitude: -43.16713,
      };
      const locationY = {
        latitude: -22.9068467,
        longitude: -43.1728965,
      };
      expect(getHeadingFromLocation(locationX, locationY)).toBe(
        119.95597789968792,
      );
    });
  });
});
