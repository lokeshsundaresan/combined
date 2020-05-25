export class MessageModel
{
    _id:String;
    sender:String;
    receiver:String;
    date:Date;
    message:String;

    constructor(sender:String,receiver:String,message:String)
    {
        this.sender=sender;
        this.receiver=receiver;
        this.date=new Date();
        this.message=message;
    }
    
}