import { Dimensions } from 'react-native';

export const useDimensions = () => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    return {
        windowHeight,
        windowWidth
    }
}
