import TransactionList from "./transactionlist";
import Transaction from "./transaction";
import testInputs from "../input/testInputs.json";
let tlist=new TransactionList()
debugger;
for (const input of testInputs) {
    tlist.insertTransaction(new Transaction(input.sender,input.receiver,parseFloat(input.amount)))
}
let result =tlist.getDepts();
for (const dept of result) {
    console.log(`${dept.debtor} owes ${dept.payee} ${dept.amount}`)
}