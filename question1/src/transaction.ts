
import toHashCode from "./hashcode";

class Transaction {
    private readonly _sender:string;
    private readonly _receiver:string;
    private readonly _amount:number;

    constructor(sender:string,receiver:string,amount:number) {
        this._sender=sender;
        this._receiver=receiver;
        this._amount=amount;
    }

    public get sender() : string {
        return this._sender;
    }

    public get receiver() : string {
        return this._receiver;
    }

    public get amount() : number {
        return this._amount;
    }
    public getBankinHashCode():number{
        return toHashCode(this.sender)^toHashCode(this.receiver);
    }
    
    
}

export default Transaction;