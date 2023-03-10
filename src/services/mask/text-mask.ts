const getMaskedText = ({ text, mask }) => {
  if (!text) {
    return { masked: '', unmasked: '' };
  }
  if (!mask) {
    return {
      masked: text || '',
      unmasked: text || ''
    };
  }

  let maskArray = mask.split('').map((c) => {
    switch (c) {
      case '9':
        return /\d/;
      case 'A':
        return /[a-zA-Z]/;
      default:
        return c;
    }
  });

  let masked = '';
  let unmasked = '';

  let maskIndex = 0;
  let textIndex = 0;

  for (let i = 0; i < maskArray.length; i++) {
    if (maskIndex === maskArray.length || textIndex === text.length) {
      break;
    }

    const maskChar = maskArray[maskIndex];
    const textChar = text[textIndex];

    if (maskChar === textChar) {
      masked += maskChar;
      textIndex++;
      maskIndex++;
    } else {
      const unmaskedTextChar = text[textIndex];

      if (typeof maskChar === 'object') {
        textIndex++;
        const maskCharRegex = maskChar;
        const matchRegex = RegExp(maskCharRegex).test(textChar);
        if (matchRegex) {
          masked += textChar;
          unmasked += unmaskedTextChar;
          maskIndex++;
        }
      } else {
        masked += maskChar;
        maskIndex++;
      }
    }
  }

  return { masked, unmasked };
};

const maskedText = (text = '', mask = '') => {
  return getMaskedText({ text, mask }).masked;
};

const maskedInputText = (text = '', mask = '') => {
  return getMaskedText({ text, mask });
};

export { maskedText, maskedInputText };
