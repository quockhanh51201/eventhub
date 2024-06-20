import { showMessage, MessageOptions } from 'react-native-flash-message';
import { appColor } from '../constants/appColors';
import { appFontFamilies } from '../constants/appFontFamilies';

interface Props extends MessageOptions {
    message: string;
    description?: string;
}

function showToastMsg(props: Props) {
    const { message, description = '', type = 'info', ...rest } = props;

    const options: MessageOptions = {
        message: message,
        description: description,
        titleStyle: { color: appColor.white, fontWeight: '700', fontSize: 14 },
        textStyle: { paddingRight: 5, fontFamily: appFontFamilies.bold },
        type: type,
        ...rest, // Truyền các thuộc tính còn lại từ props xuống showMessage
    };

    showMessage(options);
}

export default showToastMsg;
