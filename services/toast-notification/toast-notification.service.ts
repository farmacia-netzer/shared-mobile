import { MessageOptions, showMessage } from 'react-native-flash-message';

const BASE_DURATION = 3000;

export const notificationService = {
  showSuccessToast: (description, options?: MessageOptions) => {
    showMessage({
      ...options,
      description,
      message: 'Información',
      type: 'success',
      duration: getDuration(options?.duration || 0)
    });
  },
  showErrorToast: (description, options?: MessageOptions) => {
    showMessage({
      ...options,
      message: 'Error',
      description,
      type: 'danger',
      duration: getDuration(options?.duration || 0)
    });
  },
  showWarningToast: (description, options?: MessageOptions) => {
    showMessage({
      ...options,
      description,
      message: 'Alerta',
      type: 'warning',
      duration: getDuration(options?.duration || 0)
    });
  }
};

const getDuration = (duration: number) => {
  return (duration || 1500) > BASE_DURATION ? duration : BASE_DURATION;
};
