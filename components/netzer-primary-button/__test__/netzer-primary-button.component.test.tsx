import React from 'react';

import { NetzerPrimaryButton } from '../netzer-primary-button.component';
import { render } from '@testing-library/react-native';

describe('<LoadingButton />', () => {
  const onPressMock = jest.fn();
  beforeEach(() => {});

  it('renders correctly', () => {
    const { toJSON } = render(<NetzerPrimaryButton onPress={onPressMock} text={'Accept'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
