/**
 * Bank to bank debt
 */
export default class Debt {

  private readonly _debtor: string;
  private readonly _payee: string;
  private readonly _amount: number;

  /**
   * 
   * @param debtor The bank which owes money
   * @param payee  Creditor bank
   * @param amount Amount of debt
   */
  constructor(debtor: string, payee: string, amount: number) {
    if (amount < 0) {
      this._debtor = payee;
      this._payee = debtor;
      this._amount = -amount;
    } else {
      this._debtor = debtor;
      this._payee = payee;
      this._amount = amount;
    }
  }

  public get debtor(): string {
    return this._debtor;
  }

  public get payee(): string {
    return this._payee;
  }

  public get amount(): number {
    return this._amount;
  }
}
