import React from 'react';
import { render } from '@testing-library/react-native';

import { NetzerFloatingLabel } from '../netzer-floating-label.component';
import { setMockRequestAnimationFrame } from '##__test__/reanimated-helper';

describe('NetzerFloatingLabel', () => {
  const mock_font_size = 14;
  const mock_top_position = 15;
  const mockPlaceholder = 'test placeholder';
  const mockPlaceholderTextColor = '#767676';
  const mockInputStyle = {
    paddingTop: mock_top_position,
    fontSize: mock_font_size
  };
  const mockTestID = 'TEST_ID';

  beforeEach(() => {
    setMockRequestAnimationFrame();
  });

  it('Renders properly when inVisible', () => {
    const { toJSON } = render(<NetzerFloatingLabel placeholder={mockPlaceholder} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders properly if value sets null and isFocused sets false', () => {
    const { toJSON } = render(
      <NetzerFloatingLabel
        isVisible={true}
        isFocused={false}
        placeholder={mockPlaceholder}
        placeholderTextColor={mockPlaceholderTextColor}
        inputStyle={mockInputStyle}
        testID={mockTestID}
        value={null}
      />
    );
    // jest.runAllTimers();
    expect(toJSON()).toMatchSnapshot();
  });
});
