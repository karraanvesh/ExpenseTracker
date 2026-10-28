export function isValidAmount(amount) {
    amount = Number(amount);

    return (amount < 0) ? false : true;
}