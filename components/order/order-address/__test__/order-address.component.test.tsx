import React from 'react';
import { render } from '@testing-library/react-native';

import { OrderAddress } from '../order-address.component';

describe('<OrderAddress />', () => {
  it('renders', () => {
    const { toJSON } = render(<OrderAddress address={{} as any} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
