import React from 'react';
import { render } from '@testing-library/react-native';
import { NetzerText } from '../netzer-text.component';

describe('<NetzerText />', () => {
  const testText = 'test text';

  it('renders correctly', () => {
    const { toJSON } = render(<NetzerText text={testText} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
