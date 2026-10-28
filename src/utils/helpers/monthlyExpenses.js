export function getMonthlyExpenses(expensesList , month) {
    const date = new Date();

    const year = date.getFullYear();

    const strPattern = `${month}-${year}`;

    let noOfExpenses = expensesList.length;

    let monthlyExpenses = [];

    for(let i = 0 ; i < noOfExpenses ; i++) {
        const currentExpense = expensesList[i];

        const createdAtStr = currentExpense.createdAt;

        const isSubstring = createdAtStr.includes(strPattern);

        if(isSubstring) {
            monthlyExpenses.push(currentExpense);
        }
    }

    return monthlyExpenses;
}