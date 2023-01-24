import React from 'react';
import { render } from '@testing-library/react-native';

import { OrderPrescription } from '../order-prescription.component';

describe('<OrderPayment />', () => {
  const prescriptions = [];

  it('renders', () => {
    const { toJSON } = render(<OrderPrescription prescriptions={prescriptions} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
