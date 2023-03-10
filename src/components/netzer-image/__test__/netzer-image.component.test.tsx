import React from 'react';
import { render } from '@testing-library/react-native';

import { NetzerImage } from '../netzer-image.component';

describe('<NetzerImage />', () => {
  it('renders', () => {
    const { toJSON } = render(<NetzerImage uri="" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
