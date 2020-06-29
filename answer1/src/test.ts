import TransactionList from "./transactionlist";
import Transaction from "./transaction";
import testInputs from "../input/testInputs.json";

let transactionList = new TransactionList();

//insert all test inputs to transaction list
for (const input of testInputs) {
  transactionList.insertTransaction(
    new Transaction(input.sender, input.receiver, parseFloat(input.amount))
  );
}

let result = transactionList.getDepts();

for (const dept of result) {
  console.log(`${dept.debtor} owes ${dept.payee} ${dept.amount}`);
}
