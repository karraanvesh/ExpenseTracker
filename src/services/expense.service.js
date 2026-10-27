import { addExpenseRepository, deleteExpenseRepository, getExpensesRepoistory, updateExpenseRepository } from "../repository/expense.repository.js";

export function addExpenseService(description , amount) {
    const expense = addExpenseRepository(description , amount);

    return expense;
}

export function deleteExpenseService(expenseId) {
    const result = deleteExpenseRepository(expenseId);

    return result;
}

export function updateExpenseService(expenseId , fieldsToBeUpdated , updateObj) {
    const expense = updateExpenseRepository(expenseId , fieldsToBeUpdated , updateObj);

    return expense;
}

export function getExpensesService() {
    const expenses = getExpensesRepoistory();

    return expenses;
}