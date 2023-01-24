import React from 'react';
import { render } from '@testing-library/react-native';

import { ICON_GLYPH_MAP } from '##component/netzer-icon/netzer-icon.constant';

import { NetzerIconButton } from '../netzer-icon-button.component';

describe('<NetzerIconButton />', () => {
  it('renders', () => {
    const { toJSON } = render(
      <NetzerIconButton glyph={ICON_GLYPH_MAP.HOME} testID={'WLICON-BUTTON'} labelKey={'WLICON-BUTTON'} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  // it('renders without caption', () => {
  //   const { queryByTestId } = render(
  //     <WLIconButton glyph={WLICON_GLYPH_MAP.MENU} testID={'WLICON-BUTTON'} labelKey={'WLICON-BUTTON'} />
  //   );
  //   const element = queryByTestId('WLICON-BUTTON');
  //   expect(element).not.toBeNull();
  //   const iconElement = queryByTestId('WLICON-BUTTON-ICON');
  //   expect(iconElement).not.toBeNull();
  //   const textElement = queryByTestId('WLICON-BUTTON-TEXT');
  //   expect(textElement).toBeNull();
  // });

  // it('renders with caption', () => {
  //   const { queryByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       isCaptioned={true}
  //     />
  //   );
  //   const element = queryByTestId('WLICON-BUTTON');
  //   expect(element).not.toBeNull();
  //   const iconElement = queryByTestId('WLICON-BUTTON-ICON');
  //   expect(iconElement).not.toBeNull();
  //   const textElement = queryByTestId('WLICON-BUTTON-TEXT');
  //   expect(textElement).not.toBeNull();
  // });

  // it('renders additional props as provided', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       onPress={() => {}}
  //     />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.onPress).toBeTruthy();
  // });

  // it('overrides styles when given', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       textStyle={{ color: 'red' }}
  //       iconStyle={{ color: 'blue' }}
  //       buttonStyle={{ backgroundColor: 'green' }}
  //       isCaptioned={true}
  //     />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.style.backgroundColor).toBe('green');
  //   const WLICON = getByTestId('WLICON-BUTTON-ICON').props.children.props;
  //   expect(WLICON.style.color).toBe('blue');
  //   const WLTEXT = getByTestId('WLICON-BUTTON-TEXT').props;
  //   expect(WLTEXT.style.color).toBe('red');
  // });

  // it('overrides props when given', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       accessibilityLabel={'ABC'}
  //       accessible={false}
  //     />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.accessible).toBe(false);
  //   expect(element.props.accessibilityLabel).toBe('ABC');
  // });

  // it('appends FAB styles when isFAB is true', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       styleName={'FAB'}
  //     />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   const buttonWidth = element.props.style.width;
  //   expect(element.props.style.borderRadius).toBe(buttonWidth / 2);
  // });

  // test('default FAB style passes Accessbility Color Test', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton
  //       glyph={WLICON_GLYPH_MAP.MENU}
  //       testID={'WLICON-BUTTON'}
  //       labelKey={'WLICON-BUTTON'}
  //       styleName={'FAB'}
  //     />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   const backgroundColor = element.props.style.backgroundColor;
  //   const WLICON = getByTestId('WLICON-BUTTON-ICON').props.children.props;
  //   isA11yColorTestPassed(backgroundColor, WLICON.color, WLICON.size);
  // });

  // it('has default accessibility props and uses labelKey for accessibility label', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton glyph={WLICON_GLYPH_MAP.MENU} testID={'WLICON-BUTTON'} labelKey={'WLICON-BUTTON'} />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.accessible).toBe(true);
  //   expect(element.props.accessibilityLabel).toBe('WLICON-BUTTON');
  //   expect(element.props.accessibilityRole).toBe('button');
  // });

  // it('renders fallback label when labelKey is an empty string', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton glyph={WLICON_GLYPH_MAP.MENU} testID={'WLICON-BUTTON'} labelKey={''} />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.accessibilityLabel).toBe('WLICONBUTTON_LABEL');
  // });

  // it('renders correct accessibilityLabel value when given', () => {
  //   const { getByTestId } = render(
  //     <WLIconButton glyph={WLICON_GLYPH_MAP.MENU} testID={'WLICON-BUTTON'} labelKey={''} accessibilityLabel={'ABC'} />
  //   );
  //   const element = getByTestId('WLICON-BUTTON');
  //   expect(element.props.accessibilityLabel).toBe('ABC');
  // });
});
