export class MessageModel
{
    _id:string;
    sender:string;
    receiver:string;
    date:Date;
    message:string;

    constructor(sender:string,receiver:string,message:string)
    {
        this.sender=sender;
        this.receiver=receiver;
        this.date=new Date();
        this.message=message;
    }
    
}