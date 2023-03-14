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
import {
    createSharedElementStackNavigator,
    Marker,
    PROVIDER_GOOGLE,
    MapPressEvent,
    MarkerDragStartEndEvent,
    MapView

} from './src/libs'
import FlashMessage from 'react-native-flash-message';
import { NativeModules } from 'react-native';

import {
    permissionInitState,
    PermissionsContext,
    PermissionsProvider,
    NetzerThemeProvider
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
    LocationPosition
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
    NetzerThemeProvider,

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
    Marker,
    PROVIDER_GOOGLE,
    MapPressEvent,
    MarkerDragStartEndEvent,
    MapView,

    // interfaces
    IFieldsForm
}


export default NativeModules.RNChanges