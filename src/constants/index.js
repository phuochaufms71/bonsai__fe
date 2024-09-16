export const NOTIFICATION_TYPES = {
    success: "success",
    error: "error"
}

export const ACCESS_TOKEN = 'access_token';

function formatNumberWithSeparator(num, separator = ',') {
    const numStr = num;
    const parts = numStr.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    
    // Thay đổi dấu phân cách cho phần nguyên
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    
    return formattedInteger + decimalPart;
}

export default formatNumberWithSeparator;