import { addExpenseRepository, deleteExpenseRepository, exportExpensesToCSVRepository, getExpensesByCategoryRepository, getExpensesByMonthRepository, getExpensesRepoistory, getTotalExpensesRepository, setMonthlyBudgetRepository, updateExpenseRepository } from "../repository/expense.repository.js";

export function addExpenseService(description , amount , category) {
    const expense = addExpenseRepository(description , amount , category);

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

export function getExpensesByCategoryService(category) {
    const categoryExpenses = getExpensesByCategoryRepository(category);

    return categoryExpenses;
}

export function setMonthlyBudgetService(budget) {
    const response = setMonthlyBudgetRepository(budget);

    return response;
}

export function exportExpensesToCSVService() {
    const result = exportExpensesToCSVRepository();

    return result;
}