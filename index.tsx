import { notificationService } from './src/services/toast-notification'
import { NetzerPrimaryButton } from './src/components/netzer-primary-button/netzer-primary-button.component'
import FlashMessage from 'react-native-flash-message';
import { NativeModules } from 'react-native';

export {
    FlashMessage,
    notificationService,
    NetzerPrimaryButton,
}


export default NativeModules.RNChanges