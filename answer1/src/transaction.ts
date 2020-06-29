import toHashCode from "./hashcode";
/**
 * Bank to bank money transaction
 */
class Transaction {

  private readonly _sender: string;
  private readonly _receiver: string;
  private readonly _amount: number;

  /**
   * @param sender Sender bank's name
   * @param receiver Receiver bank's name
   * @param amount Amount of money sent
   */
  constructor(sender: string, receiver: string, amount: number) {
    this._sender = sender;
    this._receiver = receiver;
    this._amount = amount;
  }
  
  /**
   * @returns Hash code which produced with sender and receiver bank's name
   */
  public getBankinHashCode(): number {
    return toHashCode(this.sender) ^ toHashCode(this.receiver);
  }

  //Getters

  public get sender(): string {
    return this._sender;
  }

  public get receiver(): string {
    return this._receiver;
  }

  public get amount(): number {
    return this._amount;
  }
}

export default Transaction;
