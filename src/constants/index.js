export const NOTIFICATION_TYPES = {
    success: "success",
    error: "error"
}

export const ACCESS_TOKEN = 'access_token';

function formatNumberWithSeparator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default formatNumberWithSeparator;