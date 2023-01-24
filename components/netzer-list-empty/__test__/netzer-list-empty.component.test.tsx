import { render } from '@testing-library/react-native';
import React from 'react';

import { NetzerListEmpty } from '../netzer-list-empty.component';

describe('<NetzerListEmpty />', () => {
  it('renders', () => {
    const { toJSON } = render(<NetzerListEmpty Image={null} text="hello" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
