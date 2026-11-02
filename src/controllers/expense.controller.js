import { addExpenseService, deleteExpenseService, exportExpensesToCSVService, getExpensesByCategoryService, getExpensesByMonthService, getExpensesService, getTotalExpensesService, setMonthlyBudgetService, updateExpenseService } from "../services/expense.service.js";

export function addExpenseController(description , amount , category) {
    const expenseResponse = addExpenseService(description , amount , category);

    if(expenseResponse) {
        console.log(`Expense is successfully created : `); 
    } 

    console.log("response : " , expenseResponse);
}

export function deleteExpenseController(expenseId) {
    const expenseResponse = deleteExpenseService(expenseId);

    console.log(`Expense with id : ${expenseId} has been deleted successfully`);
}

export function updateExpenseController(expenseId , updateObj) {
    const expenseResponse = updateExpenseService(expenseId , updateObj);

    if(expenseResponse) {
         console.log(`Expense with id : ${expenseId} has been updated successfully`);
    }

    console.log(expenseResponse);
}

export function getAllExpensesController() {
    const expensesResponse = getExpensesService();

    console.log(expensesResponse);
}

export function getTotalExpensesController() {
    const expenseResponse = getTotalExpensesService();

    console.log(`Total expenses : $${expenseResponse}`);
}

export function getExpensesByMonthController(month) {
    const expenseResponse = getExpensesByMonthService(month);

    console.log(`${month} month expenses : \n` , expenseResponse);
}

export function getExpensesByCategoryController(category) {
    const expenseResponse = getExpensesByCategoryService(category);

    console.log(`${category} expenses are : `);
    console.log(expenseResponse);
}

export function setMonthlyBudgetController(budget) {
    const response = setMonthlyBudgetService(budget);

    console.log(response);
}

export function exportExpensesToCSVController() {
    const response = exportExpensesToCSVService();

    console.log(response);
}