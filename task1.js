import {expenses} from "./Data/expenses.js"

//1st function - to find specific id
function findExpenseById(id){
    const expenseId = expenses.find((expense)=>{
        return expense.id===id;
    });
    return expenseId;
}
console.log(findExpenseById("10"));

//2nd function - to get specific category with its total amount of expense
function findExpenseByCategory(category){
    const filterExpenses = expenses.filter(expense => expense.category===category);
    const totalExpense = filterExpenses.reduce((total,expense) => total + expense.amount,0);
    return {
        filterExpenses,
        totalExpense,
    }
}
console.log(findExpenseByCategory("Travel"));

//3 function - to update expense with spicific id
function updateExpenseById(id,updateObject){
    const index = expenses.findIndex((expense)=>expense.id === id);
    console.log(index);
    if(index !== -1){
        //Restricting updating id property
            if(updateObject.hasOwnProperty("id")){
                delete updateObject.id;
            }
            expenses[index] = {...expenses[index], ...updateObject};
            return true;//successful update
    }
    return false;//expense not found
}
console.log("Update expense by id:", updateExpenseById("1", { category: "Updated Category",amount:500 }));
console.log("After update:", expenses);

//4 function - to delete expense object by id
function deleteExpenseById(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
        expenses.splice(index, 1);
        return true; // successful deletion
    }
    return false; //  id not found
}

console.log("Delete expense by id:", deleteExpenseById("7"));
console.log("After deletion:", expenses);

//5 function - that will take a date range and return the total expenses incurred in that duration
function totalExpensesInDateRange(startDate, endDate){
    const filteredExpenses = expenses.filter(expense => expense.date >= startDate && expense.date <= endDate);
    const totalExpense = filteredExpenses.reduce((total, expense) => total + expense.amount,0);
    return totalExpense;
}
console.log("Total expenses in date range:", totalExpensesInDateRange(new Date("2024-04-01"),new Date("2024-05-10")));