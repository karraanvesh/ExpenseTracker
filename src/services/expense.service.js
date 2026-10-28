import { addExpenseRepository, deleteExpenseRepository, getExpensesByMonthRepository, getExpensesRepoistory, getTotalExpensesRepository, updateExpenseRepository } from "../repository/expense.repository.js";

export function addExpenseService(description , amount) {
    const expense = addExpenseRepository(description , amount);

    return expense;
}

export function deleteExpenseService(expenseId) {
    const result = deleteExpenseRepository(expenseId);

    return result;
}

export function updateExpenseService(expenseId , updateObj) {
    const expense = updateExpenseRepository(expenseId , updateObj);

    return expense;
}

export function getExpensesService() {
    const expenses = getExpensesRepoistory();

    return expenses;
}

export function getTotalExpensesService() {
    const totalExpenses = getTotalExpensesRepository();

    return totalExpenses;
}

export function getExpensesByMonthService(month) {
    const monthlyExpenses = getExpensesByMonthRepository(month);

    return monthlyExpenses;
}