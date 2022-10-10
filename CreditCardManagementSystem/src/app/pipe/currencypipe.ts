import { Pipe, PipeTransform } from "@angular/core";
import { TransactionInterface } from "../transaction/transaction.interface";

@Pipe({
    standalone: true,
    name: 'currencyCustomPipe'
})

export class CurrencyCustomPipe implements PipeTransform {

    transform(json: TransactionInterface): string {
        return `${json.amount.toFixed(2)}`
        
    }
}
