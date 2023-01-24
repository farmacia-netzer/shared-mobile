import React from 'react';
import { render } from '@testing-library/react-native';

import { OrderPayment } from '../order-payment.component';

describe('<OrderPayment />', () => {
  const payments = [];
  const orderId = 'UUID';
  const summary: any = { total: 'RDS 10' };

  it('renders', () => {
    const { toJSON } = render(<OrderPayment payments={payments} orderId={orderId} summary={summary} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
