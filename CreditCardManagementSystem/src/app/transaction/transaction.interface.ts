import { CardInterface } from "../credit-card/card.interface"

export interface TransactionInterface {
    credit_card: CardInterface
    uid: string,
    amount: number,
    comment: string,
    date: number,
    currency: string
}
