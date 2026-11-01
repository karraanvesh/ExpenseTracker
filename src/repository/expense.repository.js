import fs from "fs";
import path from "path";
import { getTimeStamp } from "../utils/dateTime.js";
import { idGenerator } from "../utils/expenseIdGenerator.js";
import { findExpenseById } from "../utils/helpers/findExpense.js";
import { calculateExpenses } from "../utils/helpers/summaryOfExpenses.js";
import { getMonthlyExpenses } from "../utils/helpers/monthlyExpenses.js";
import { getCategoryExpenses } from "../utils/helpers/expenseCategory.js";
import { setMonthlyBudget } from "../utils/monthlyBudget.js";
import { monthlyBudgetCalculator } from "../utils/helpers/budgetCalculator.js";

const filePath = path.join(import.meta.dirname , "./../../logs/expenseTracker.txt");

export function addExpenseRepository(descriptionOfExpense , amountOfExpense , categoryOfExpense) {
    try {

        // 1. Check whether the filePath is valid or not 

        /**
         * fs.existSync(path of the file) : Checks whether the <path of the file> is valid or not.
         * If the path exist it returns true or else returns false.
         */
        if(fs.existsSync(filePath)) {
            
            /**
             * We are creating a new expense with all the properties
             */
            const newExpense = {
                id : idGenerator(),
                description : descriptionOfExpense,
                amount : amountOfExpense,
                createdAt : getTimeStamp(),
                updatedAt : getTimeStamp(),
                category  : categoryOfExpense,
            }

            const response = monthlyBudgetCalculator(amountOfExpense , false);

            if(!response) {
                return response;
            } else {
                let data = fs.readFileSync(filePath , 'utf8');

                if(!data) {
                    data = JSON.stringify([]);
                }

                const allExpenses = JSON.parse(data);

                // if(!Array.isArray(allExpenses)) {
                //     allExpenses = [allExpenses];
                // }

                allExpenses.push(newExpense);

                // writing the newly created expense into the file
                fs.writeFileSync(filePath , JSON.stringify(allExpenses , null , 2) , 'utf8');

                return newExpense;
            }
        } else {
            throw new Error("Unable to find a file or folder");
        }
    } catch (error) {
        console.log(error);
    }
}

export function updateExpenseRepository(expenseId , updateObj) {
    try {
        if(fs.existsSync(filePath)) {
            const expenses = fs.readFileSync(filePath , 'utf8');
            const expenseList = JSON.parse(expenses);

            // console.log(typeof expenseId , expenseList);

            const indOfExpense = findExpenseById(expenseId , expenseList);

            if(indOfExpense == -1) {
                throw new Error(`Unable to find the corresponding expense with id : ${expenseId}`);
            }

            let expenseToBeUpdated = expenseList[indOfExpense];

            if(updateObj.description) {
                expenseToBeUpdated.description = updateObj.description;
            }

            let response;

            if(updateObj.amount) {
                response = monthlyBudgetCalculator(expenseToBeUpdated.amount , true);

                expenseToBeUpdated.amount = updateObj.amount;
                
                response = monthlyBudgetCalculator(expenseToBeUpdated.amount , false);
            }

            if(!response) {
                return response;
            } else {
                expenseToBeUpdated.updatedAt = getTimeStamp();

                expenseList[indOfExpense] = expenseToBeUpdated;

                fs.writeFileSync(filePath , JSON.stringify(expenseList , null , 2) , 'utf8');

                return expenseToBeUpdated;
            }

            
        }
    } catch (error) {
        console.log(error);
    }
}

export function deleteExpenseRepository(expenseId) {
    try {

        if(fs.existsSync(filePath)) {

            const data = fs.readFileSync(filePath , 'utf8');
            const allExpenses = JSON.parse(data);

            const targetInd = findExpenseById(expenseId , allExpenses);

            if(targetInd == -1) {
                throw new Error(`Unable to find the corresponding expense with id : ${expenseId} `);
            }

            monthlyBudgetCalculator(Number(allExpenses[targetInd].amount) , true);

            allExpenses.splice(targetInd , 1);

            fs.writeFileSync(filePath , JSON.stringify(allExpenses , null , 2) , 'utf8');

            return true;
        }
    } catch (error) {
        console.log(error);
    }
}

export function getExpensesRepoistory() {
    try {

        if(fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath , 'utf8');

            const result = JSON.parse(fileContent);

            return result;
        } else {
            throw new Error("Unable to find a file or folder");
        }
    } catch (error) {
        console.log(error);
    }
}

export function getTotalExpensesRepository() {
    try {

        if(fs.existsSync(filePath)) {

            const data = fs.readFileSync(filePath , 'utf8');
            const listOfExpenses = JSON.parse(data);

            const totalExpenses = calculateExpenses(listOfExpenses);

            return totalExpenses;
        } else {
            throw new Error("Unable to find the file or folder");
        }
    } catch (error) {
        console.log(error);
    }
}

export function getExpensesByMonthRepository(month) {
    try {

        if(fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath , 'utf8');
            const expensesList = JSON.parse(data);

            const monthlyExpenses = getMonthlyExpenses(expensesList , month);

            return monthlyExpenses;
        } else {
            throw new Error("Unable to find the file or folder");
        }
    } catch (error) {
        console.log(error);
    }
}

export function getExpensesByCategoryRepository(category) {
    try {

        if(fs.existsSync(filePath)) {

            const data = fs.readFileSync(filePath , 'utf8');
            const expenseList = JSON.parse(data);

            const categoryExpenses = getCategoryExpenses(expenseList , category);

            return categoryExpenses;
        } else {
            throw new Error("NotFoundError : Unable to find the file or directory");
        }
    } catch (error) {
        console.log(error);
    }
}

export function setMonthlyBudgetRepository(budget) {
    try {
        const response = setMonthlyBudget(budget);

        return response;
    } catch (error) {
        console.log(error);   
    }
}