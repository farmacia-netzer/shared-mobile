import React from 'react';
import { render } from '@testing-library/react-native';
import { ICON_GLYPH_MAP } from '../netzer-icon.constant';

import { NetzerIcon } from '../netzer-icon.component';

describe('<NetzerIcon />', () => {
  it('renders', () => {
    const { toJSON } = render(<NetzerIcon glyph={ICON_GLYPH_MAP.HOME} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

it('returns correct glyph name, color, size when provided', () => {
  const { getByTestId } = render(
    <NetzerIcon glyph={ICON_GLYPH_MAP.HOME} size={21} color={'#000'} testID="ICON_TESTID" />
  );

  const element = getByTestId('ICON_TESTID');
  expect(element).toBeTruthy();
});
