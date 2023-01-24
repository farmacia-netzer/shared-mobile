import React from 'react';
import { View } from 'react-native';

import { render } from '@testing-library/react-native';
import { NetzerCard } from '../netzer-card.component';

describe('<NetzerCard />', () => {
  it('renders', () => {
    const { toJSON } = render(
      <NetzerCard>
        <View />
      </NetzerCard>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
