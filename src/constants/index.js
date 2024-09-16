export const NOTIFICATION_TYPES = {
    success: "success",
    error: "error"
}

export const ACCESS_TOKEN = 'access_token';

function formatNumberWithSeparator(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// function formatNumber(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

// // Ví dụ sử dụng
// const number = 700000;
// const formattedNumber = formatNumber(number);
// console.log(formattedNumber); // Kết quả: "700 000"

export default formatNumberWithSeparator;