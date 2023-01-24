import React from 'react';
import { render } from '@testing-library/react-native';

import { OrderCustomer } from '../order-customer.component';

describe('<OrderCustomer />', () => {
  it('renders', () => {
    const { toJSON } = render(
      <OrderCustomer
        profile={{
          firstName: '',
          lastName: '',
          fullName: '',
          cellphone: '',
          email: '',
          id: ''
        }}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
