
import moment from 'moment';
import 'moment/src/locale/es';

moment.locale(['es']);

const formatDate = (_date: Date) => {
    const date = moment(_date);
    return date.calendar();
};

export const dateFormats = {
    formatDate
}