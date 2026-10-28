export function calculateExpenses(expensesList) {
    let totalCostOfExpenses = 0;
    let noOfExpenses = expensesList.length;

    for(let i = 0 ; i < noOfExpenses ; i++) {
        const currentExpense = expensesList[i];

        totalCostOfExpenses += (Number(currentExpense.amount));
    }

    return totalCostOfExpenses;
}