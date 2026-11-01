export function getCategoryExpenses(expenseList , category) {
    let result = [];

    const noOfExpenses = expenseList.length;

    for(let i = 0 ; i < noOfExpenses ; i++) {
        const expense = expenseList[i];

        if(expense.category == category) {
            result.push(expense);
        }
    }

    return result;
}