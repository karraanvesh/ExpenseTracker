import { addExpenseService, deleteExpenseService, getExpensesService, updateExpenseService } from "../services/expense.service.js";

export function addExpenseController(description , amount) {
    const expenseResponse = addExpenseService(description , amount);

    console.log(`Expense is successfully created : `);
    console.log(expenseResponse);
}

export function deleteExpenseController(expenseId) {
    const expenseResponse = deleteExpenseService(expenseId);

    console.log(`Expense with id : ${expenseId} has been deleted successfully`);
}

export function updateExpenseController(expenseId , fieldsToBeUpdated , updateObj) {
    const expenseResponse = updateExpenseService(expenseId , fieldsToBeUpdated , updateObj);

    console.log(`Expense with id : ${expenseId} has been updated successfully`);
    console.log(expenseResponse);
}

export function getAllExpensesController() {
    const expensesResponse = getExpensesService();

    console.log(expensesResponse);
}