export function findExpenseById(targetId , allExpenses) {

    const noOfExpenses = allExpenses.length;

    let result = -1;

    for(let i = 0 ; i < noOfExpenses ; i++) {
        const currentExpense = allExpenses[i];

        console.log(currentExpense.id);

        if(currentExpense.id == targetId) {
            result = i;
            break;
        }
    }

    return result;
}