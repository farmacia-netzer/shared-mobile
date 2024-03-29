import React, { useContext } from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { ThemeContext } from '../context/theme/theme-context';

export const EmptyBoxSVG = (props) => {
  const { theme } = useContext(ThemeContext)
  const lineColor = "#CACACA";

  return (
    <Svg width="117" height="128" viewBox="0 0 117 128" fill="none" {...props}>
      <G clipPath="url(#clip0_98_18414)">
        <Path
          d="M114.66 81.5005C110.04 96.5805 91.14 100.501 78.23 107.321C65.32 114.141 55.65 114.151 40.57 109.531C25.49 104.911 13.5 101.631 6.64 88.7205C-0.219997 75.8105 -2.08998 62.2305 2.53002 47.1505C7.15002 32.0705 17.87 24.8305 30.79 17.9705C43.71 11.1105 57.3 1.08052 72.38 5.70052C87.46 10.3205 97.55 23.8905 104.38 36.8005C111.21 49.7105 119.28 66.4205 114.66 81.5005Z"
          fill={theme.colors.card}
        />
        <Path
          d="M13.01 11.3906H6.03002C5.09113 11.3906 4.33002 12.1517 4.33002 13.0906V20.0706C4.33002 21.0095 5.09113 21.7706 6.03002 21.7706H13.01C13.9489 21.7706 14.71 21.0095 14.71 20.0706V13.0906C14.71 12.1517 13.9489 11.3906 13.01 11.3906Z"
          stroke={lineColor}
          strokeWidth="3.4"
          stroke-miterlimit="10"
        />
        <Path
          d="M87.03 115.47L80.28 118.59C80.01 118.716 79.778 118.911 79.607 119.155C79.436 119.399 79.3322 119.684 79.3058 119.98C79.2795 120.277 79.3316 120.576 79.457 120.846C79.5823 121.116 79.7764 121.349 80.02 121.52L86.09 125.8C86.3334 125.972 86.6176 126.076 86.9139 126.103C87.2103 126.13 87.5086 126.078 87.7789 125.954C88.0492 125.829 88.2821 125.636 88.4542 125.393C88.6264 125.15 88.7318 124.867 88.7599 124.57L89.43 117.17C89.457 116.874 89.4055 116.575 89.2808 116.305C89.1562 116.034 88.9626 115.801 88.7196 115.629C88.4766 115.457 88.1925 115.352 87.896 115.324C87.5995 115.296 87.3008 115.347 87.03 115.47V115.47Z"
          stroke={lineColor}
          strokeWidth="3.4"
          strokeMiterlimit="10"
        />
        <Path
          d="M103.55 12.0792C106.416 12.0792 108.74 9.75558 108.74 6.88922C108.74 4.02286 106.416 1.69922 103.55 1.69922C100.684 1.69922 98.36 4.02286 98.36 6.88922C98.36 9.75558 100.684 12.0792 103.55 12.0792Z"
          stroke={lineColor}
          strokeWidth="3.4"
          stroke-miterlimit="10"
        />
        <Path
          d="M59.32 32.0195L96.56 52.9695V94.8595L59.32 115.8L22.08 94.8595V52.9695L59.32 32.0195Z"
          fill={theme.colors.background}
          stroke={lineColor}
          strokeWidth="5.1"
          stroke-miterlimit="10"
        />
        <Path d="M59.32 73.9107L96.56 52.9707" stroke={lineColor} strokeWidth="5.1" stroke-miterlimit="10" />
        <Path d="M59.32 73.9102V115.8" stroke={lineColor} strokeWidth="5.1" stroke-miterlimit="10" />
        <Path d="M59.32 73.9107L22.08 52.9707" stroke={lineColor} strokeWidth="5.1" stroke-miterlimit="10" />
        <Path
          d="M59.32 32.0202L47.81 19.2402L10.18 39.5802L22.08 52.9702L59.32 32.0202Z"
          fill={theme.colors.background}
          stroke={lineColor}
          strokeWidth="5.1"
          stroke-miterlimit="10"
        />
        <Path
          d="M59.32 32.0202L70.83 19.2402L108.46 39.5802L96.56 52.9702L59.32 32.0202Z"
          fill={theme.colors.background}
          stroke={lineColor}
          strokeWidth="5.1"
          stroke-miterlimit="10"
        />
        <Path
          d="M22.08 52.9707L7.13 65.3507L43.33 85.8007L59.32 73.9107L22.08 52.9707Z"
          fill={theme.colors.background}
          stroke={lineColor}
          strokeWidth="5.1"
          stroke-miterlimit="10"
        />
        <Path
          d="M96.56 52.9707L109.81 65.3507L73.61 85.8007L59.32 73.9107L96.56 52.9707Z"
          fill={theme.colors.background}
          stroke={lineColor}
          strokeWidth="5.1"
          stroke-miterlimit="10"
        />
        <Path d="M27.46 52.9395L59.31 70.9495L91.24 52.9395L59.31 35.0195L27.46 52.9395Z" fill={theme.colors.card} />
      </G>
      <Defs>
        <ClipPath id="clip0_98_18414">
          <Rect width="116.03" height="127.82" fill={theme.colors.background} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
