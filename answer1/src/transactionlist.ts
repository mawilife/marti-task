import Transaction from "./transaction";
import Debt from "./debt";
class TransactionList {
  private _transactions: Transaction[];
  /**
   * @param transactions List of transactions which can be empity array by default
   */
  constructor(transactions: Array<Transaction> = new Array<Transaction>()) {
    this._transactions = transactions;
  }

  /**
   * @param transaction Transaction to be insert to main array
   */
  public insertTransaction(transaction: Transaction) {
    this._transactions.push(transaction);
  }

  /**
   * @returns Dept results of all transactions
   */
  public getDepts(): Array<Debt> {

    let result = new Array<Debt>();
    let groupedTransactions = this.groupTransactions();
    let firstSender: string;
    let firstReceiver: string;
    let totalAmount: number;

    //Procces to sum dept of gropped transactions
    groupedTransactions.forEach((transactions: Array<Transaction>) => {

      firstSender = transactions[0].sender;
      firstReceiver = transactions[0].receiver;
      totalAmount = 0;
      
      for (const transaction of transactions) {
        totalAmount +=
          transaction.sender == firstSender
            ? transaction.amount
            : -transaction.amount;
      }

      if (totalAmount != 0)
        result.push(new Debt(firstReceiver, firstSender, totalAmount));
    });

    return result;
  }
  /**
   * @returns Group by sender and receiver banks name
   */
  private groupTransactions(): Map<number, Transaction[]> {
    let map = new Map<number, Transaction[]>();
    for (const transaction of this._transactions) {
      let key = transaction.getBankinHashCode();
      let collection = map.get(key);
      if (!collection) map.set(key, [transaction]);
      else collection.push(transaction);
    }
    return map;
  }
}

export default TransactionList;
