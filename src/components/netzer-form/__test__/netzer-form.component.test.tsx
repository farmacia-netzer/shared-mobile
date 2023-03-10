import React from 'react';
import { render } from '@testing-library/react-native';

import { NetzerForm } from '../netzer-form.component';

describe('<NetzerForm />', () => {
  it('renders', () => {
    const { toJSON } = render(<NetzerForm buttons={[]} fields={[]} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
