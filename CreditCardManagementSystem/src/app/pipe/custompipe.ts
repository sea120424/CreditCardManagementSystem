import { Pipe, PipeTransform } from "@angular/core";
import { TransactionInterface } from "../transaction/transaction.interface";

@Pipe({
    name: 'transactionPipe'
})

export class TransactionPipe implements PipeTransform {

    transform(json: TransactionInterface): string {
        var year = json['credit_card'].expiration_date_year.toString().replace('20','')
        var month = json['credit_card'].expiration_date_month.toString().length == 1 ? "0" + json['credit_card'].expiration_date_month.toString() : json['credit_card'].expiration_date_month.toString()
    
        return `${month}/${year}`
        
    }
}
