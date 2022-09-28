import { Pipe, PipeTransform } from "@angular/core";
import { TransactionInterface } from "../transaction/transaction.interface";

@Pipe({
    name: 'transactionPipe'
})

export class TransactionPipe implements PipeTransform {

    transform(json: TransactionInterface): string {
        var year = json['credit_card'].expiration_date_year.toString().replace('20','')
    
        return `Card number: ${json['credit_card'].card_number} | CSC: ${json['credit_card'].csc_code} | Owner: ${json['credit_card'].cardholder_name} | Expiration date: ${json['credit_card'].expiration_date_month}/${year} | Issuer: ${json['credit_card'].issuer}`
        
    }
}
