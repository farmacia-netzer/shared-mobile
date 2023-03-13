import {
    notificationService, googleMapsService,
    isIos,
    isIosPlatformVersionLowerThan,
    isAndroid,
    isTabletDevice,
    isAndroidPlatformVersionLowerThan,
    platformSelect,
    getUuid,
    getDeviceFontSize,
} from './src/services'
import { createSharedElementStackNavigator } from './src/libs'
import FlashMessage from 'react-native-flash-message';
import { NativeModules } from 'react-native';

import {
    permissionInitState,
    PermissionsContext,
    PermissionsProvider
} from './src/context';

import {
    getAddressAndPosition,
    callNumber,
    formatAmount,
    dateFormats,
    getKeysWithValues,
    getParams,
    textShorter,
} from './src/helpers'

import {
    useDebounce,
    useDimensions,
    useIsMountedRef,
    useLocation,
    usePagination,
    useAnimation,
} from './src/hooks'

import {
    CircleBackground,
    NetzerAlert,
    NetzerCardLayout,
    NetzerCard,
    NetzerCheckboxToggle,
    NetzerCounterBadge,
    NetzerListItemDivider,
    NetzerFloatingLabel,
    NetzerField,
    NetzerForm,
    NetzerCheckbox,
    NetzerIconButton,
    NetzerIcon,
    NetzerImage,
    NetzerInfo,
    NetzerInfoButton,
    NetzerInputPhoto,
    NetzerListEmpty,
    NetzerFieldInput,
    NetzerList,
    NetzerLoading,
    NetzerMap,
    NetzerModal,
    NetzerPermissions,
    NetzerFabButton,
    WLRadioButton,
    NetzerText,
    NetzerTextInput,
    NetzerPrimaryButton,
    NetzerTextInputMask,
    IFieldsForm,
    ICON_GLYPH_MAP,
} from './src/components'


export {
    FlashMessage,
    notificationService,
    googleMapsService,
    isIos,
    isIosPlatformVersionLowerThan,
    isAndroid,
    isTabletDevice,
    isAndroidPlatformVersionLowerThan,
    platformSelect,
    getUuid,
    getDeviceFontSize,


    // hooks
    useDebounce,
    useDimensions,
    useIsMountedRef,
    useLocation,
    usePagination,
    useAnimation,

    // helpers
    getAddressAndPosition,
    callNumber,
    formatAmount,
    dateFormats,
    getKeysWithValues,
    getParams,
    textShorter,


    // context
    permissionInitState,
    PermissionsContext,
    PermissionsProvider,

    // components
    ICON_GLYPH_MAP,
    NetzerPrimaryButton,
    CircleBackground,
    NetzerAlert,
    NetzerCardLayout,
    NetzerCard,
    NetzerCheckbox,
    NetzerFieldInput,
    NetzerCheckboxToggle,
    NetzerCounterBadge,
    NetzerListItemDivider,
    NetzerFloatingLabel,
    NetzerField,
    NetzerForm,
    NetzerIconButton,
    NetzerIcon,
    NetzerImage,
    NetzerInfo,
    NetzerInfoButton,
    NetzerInputPhoto,
    NetzerListEmpty,
    NetzerList,
    NetzerLoading,
    NetzerMap,
    NetzerModal,
    NetzerPermissions,
    NetzerFabButton,
    WLRadioButton,
    NetzerText,
    NetzerTextInput,
    NetzerTextInputMask,


    // libs 
    createSharedElementStackNavigator,

    // interfaces
    IFieldsForm
}


export default NativeModules.RNChanges