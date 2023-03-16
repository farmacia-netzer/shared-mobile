import React, { useContext } from 'react'
import Svg, { Circle } from 'react-native-svg'
import { ThemeContext } from '../context/theme/theme-context';

export const RadioCheckSVG = ({ width = 22, height = 22, ...props }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <Circle cx="12" cy="12" r="12" fill={theme.secondary} />
            <Circle cx="12" cy="12" r="4" fill={theme.colors.background} />
        </Svg>
    )
}
