import { maskedText, maskedInputText } from '../text-mask';

describe('textMask', () => {
  const mockPhoneNumber = '1112223333';
  const mockPhoneMask = '(999) 999-9999';
  const expectedPhoneText = '(111) 222-3333';
  const expectedPhoneTextForInput = {
    masked: expectedPhoneText,
    unmasked: mockPhoneNumber
  };
  const mockPostalCode = 'M2M4L3';
  const mockPostalCodeMask = 'A9A 9A9';
  const exptedtedPostalCodeText = 'M2M 4L3';
  const exptedtedPostalCodeTextForInput = {
    masked: exptedtedPostalCodeText,
    unmasked: mockPostalCode
  };

  describe('maskedText', () => {
    it('returned masked text by given cellphone number mask', () => {
      const maskedResult = maskedText(mockPhoneNumber, mockPhoneMask);
      expect(maskedResult).toEqual(expectedPhoneText);
    });

    it('returned masked text by given cellphone number mask even input is exceeded', () => {
      const maskedResult = maskedText(mockPhoneNumber + '1', mockPhoneMask);
      expect(maskedResult).toEqual(expectedPhoneText);
    });

    it('returned masked text by given postal code mask', () => {
      const maskedResult = maskedText(mockPostalCode, mockPostalCodeMask);
      expect(maskedResult).toEqual(exptedtedPostalCodeText);
    });

    it('returned masked text by given postal code mask even input is exceeded', () => {
      const maskedResult = maskedText(mockPostalCode + 'Z', mockPostalCodeMask);
      expect(maskedResult).toEqual(exptedtedPostalCodeText);
    });
  });

  describe('maskedInputText', () => {
    it('returned masked/unmasked text by given cellphone number mask', () => {
      const maskedResult = maskedInputText(mockPhoneNumber, mockPhoneMask);
      expect(maskedResult).toEqual(expectedPhoneTextForInput);
    });

    it('returned masked/unmasked text by given cellphone number mask even input is exceeded', () => {
      const maskedResult = maskedInputText(mockPhoneNumber + '1', mockPhoneMask);
      expect(maskedResult).toEqual(expectedPhoneTextForInput);
    });

    it('returned masked/unmasked text by given postal code mask', () => {
      const maskedResult = maskedInputText(mockPostalCode, mockPostalCodeMask);
      expect(maskedResult).toEqual(exptedtedPostalCodeTextForInput);
    });

    it('returned masked/unmasked text by given postal code mask even input is exceeded', () => {
      const maskedResult = maskedInputText(mockPostalCode + 'Z', mockPostalCodeMask);
      expect(maskedResult).toEqual(exptedtedPostalCodeTextForInput);
    });

    it('returned masked/unmasked text by given cellphone number mask even input is invalid', () => {
      const maskedResult = maskedInputText('1112223A', mockPhoneMask);
      expect(maskedResult).toEqual({ masked: '(111) 222-3', unmasked: '1112223' });
    });

    it('returned masked/unmasked text by given postal code mask even input is invalid', () => {
      const maskedResult = maskedInputText('M2M45', mockPostalCodeMask);
      expect(maskedResult).toEqual({ masked: 'M2M 4', unmasked: 'M2M4' });
    });
  });
});
