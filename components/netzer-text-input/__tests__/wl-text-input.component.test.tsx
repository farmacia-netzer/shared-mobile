import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NetzerTextInput } from '../netzer-text-input.component';
import { setMockRequestAnimationFrame } from '##__test__/reanimated-helper';

console.error = (error, ...args) => {
  let errorMessage = typeof error === 'string' ? error : error.message;
  args.forEach((argument) => {
    errorMessage = errorMessage.replace(/%(s|d|i|o|O)/, argument);
  });
  throw new Error(errorMessage);
};

const onChange = jest.fn();

describe('<NetzerTextInput />', () => {
  beforeEach(() => {
    setMockRequestAnimationFrame();
    jest.clearAllMocks();
  });

  const testID = 'MyTextInput';

  it('Renders Properly', () => {
    const { toJSON } = render(<NetzerTextInput value={'Test'} isFloatingLabel={false} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Test Props are correct', () => {
    const props: any = {
      allowFontScaling: true,
      rejectResponderTermination: true,
      autoComplete: 'email',
      autoCorrect: true,
      autoCapitalize: 'words',
      testID: 'MyTextInput',
      textContentType: 'URL',
      placeholderTextColor: 'green',
      secureTextEntry: false,
      keyboardType: 'ascii-capable',
      value: 'Test'
    };

    const { getByTestId } = render(<NetzerTextInput {...props} />);
    const input = getByTestId(testID);

    expect(props.value).toEqual(input.props.value);
    expect(props.allowFontScaling).toEqual(input.props.allowFontScaling);
    expect(props.rejectResponderTermination).toEqual(input.props.rejectResponderTermination);
    expect(props.autoComplete).toEqual(input.props.autoComplete);
    expect(props.autoCorrect).toEqual(input.props.autoCorrect);
    expect(props.autoCapitalize).toEqual(input.props.autoCapitalize);
    expect(props.testID).toEqual(input.props.testID);
    expect(props.textContentType).toEqual(input.props.textContentType);
    expect(props.placeholderTextColor).toEqual(input.props.placeholderTextColor);
    expect(props.secureTextEntry).toEqual(input.props.secureTextEntry);
    expect(props.keyboardType).toEqual(input.props.keyboardType);
  });

  it('Test Props are change correctly', () => {
    let props: any = {
      autoComplete: 'email',
      autoCorrect: true,
      autoCapitalize: 'words',
      testID: 'MyTextInput',
      textContentType: 'URL',
      placeholderTextColor: 'green',
      secureTextEntry: false,
      keyboardType: 'ascii-capable',
      value: 'Test'
    };

    const { getByTestId, rerender } = render(<NetzerTextInput {...props} />);
    let input = getByTestId(testID);

    expect(props.value).toEqual(input.props.value);
    expect(props.autoComplete).toEqual(input.props.autoComplete);
    expect(props.autoCorrect).toEqual(input.props.autoCorrect);
    expect(props.autoCapitalize).toEqual(input.props.autoCapitalize);
    expect(props.testID).toEqual(input.props.testID);
    expect(props.textContentType).toEqual(input.props.textContentType);
    expect(props.placeholderTextColor).toEqual(input.props.placeholderTextColor);
    expect(props.secureTextEntry).toEqual(input.props.secureTextEntry);
    expect(props.keyboardType).toEqual(input.props.keyboardType);

    props = {
      autoComplete: 'username',
      autoCorrect: false,
      autoCapitalize: 'characters',
      testID: 'NewTestID',
      textContentType: 'name',
      placeholderTextColor: 'blue',
      secureTextEntry: true,
      keyboardType: 'email-address',
      value: 'test@test.com'
    };

    rerender(<NetzerTextInput {...props} />);

    input = getByTestId(props.testID);

    expect(props.value).toEqual(input.props.value);
    expect(props.autoComplete).toEqual(input.props.autoComplete);
    expect(props.autoCorrect).toEqual(input.props.autoCorrect);
    expect(props.autoCapitalize).toEqual(input.props.autoCapitalize);
    expect(props.testID).toEqual(input.props.testID);
    expect(props.textContentType).toEqual(input.props.textContentType);
    expect(props.placeholderTextColor).toEqual(input.props.placeholderTextColor);
    expect(props.secureTextEntry).toEqual(input.props.secureTextEntry);
    expect(props.keyboardType).toEqual(input.props.keyboardType);
  });

  it('onChange email pattern', () => {
    const { getByTestId } = render(
      <NetzerTextInput patternType={'email'} placeholder={'Email'} onChange={onChange} testID={testID} value="" />
    );
    const input = getByTestId(testID);
    const email = 'test@mail.ca';

    fireEvent(input, 'onChangeText', email);

    expect(onChange).toHaveBeenCalledWith(email);
  });

  it('onChange email wrong pattern', () => {
    const { getByTestId } = render(
      <NetzerTextInput patternType={'email'} onChange={onChange} testID={testID} value="" />
    );
    const input = getByTestId(testID);
    const email = 't@t.c';

    fireEvent(input, 'onChangeText', email);

    expect(onChange).toHaveBeenCalledWith(email);
  });

  it('onChange password pattern', () => {
    const { getByTestId } = render(
      <NetzerTextInput patternType={'password'} onChange={onChange} testID={testID} value="" />
    );
    const input = getByTestId(testID);
    const password = '_-1Masdg1s';

    fireEvent(input, 'onChangeText', password);

    expect(onChange).toHaveBeenCalledWith(password);
  });

  it('onChange no pattern bad', () => {
    const { getByTestId } = render(<NetzerTextInput onChange={onChange} testID={testID} value="" />);
    const input = getByTestId(testID);
    const name = 'ˆ%&$&ˆ@&Gbhjvdasdj';

    fireEvent(input, 'onChangeText', name);

    expect(onChange).toHaveBeenCalled();
  });

  it('renders with icon', () => {
    const { getByTestId } = render(
      <NetzerTextInput
        icon={'HOME'}
        onIconPress={jest.fn}
        iconAccessibilityLabel={'Test'}
        iconTestID={'iconTestID'}
        onChange={onChange}
        testID={testID}
      />
    );
    const input = getByTestId(testID);
    expect(input).toBeTruthy();
  });

  it('renders with icon Throwing iconAccessibilityLabel error', () => {
    const { getByTestId } = render(
      <NetzerTextInput icon={'HOME'} onIconPress={jest.fn} onChange={onChange} testID={testID} />
    );
    const input = getByTestId(testID);
    expect(input).toBeTruthy();
  });

  it('does not allow spaces when specify', () => {
    const { getByTestId } = render(
      <NetzerTextInput allowSpaces={false} onChange={onChange} testID={testID} value="" />
    );
    const input = getByTestId(testID);
    const name = ' ';

    fireEvent(input, 'onChangeText', name);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders with icon Throwing iconTestID error', () => {
    const { getByTestId } = render(
      <NetzerTextInput
        icon={'HOME'}
        onIconPress={jest.fn}
        iconAccessibilityLabel={'icon'}
        onChange={onChange}
        testID={testID}
      />
    );
    const input = getByTestId(testID);
    expect(input).toBeTruthy();
  });
});
