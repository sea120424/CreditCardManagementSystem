import { CardInterface } from "../credit-card/card.interface"

export interface TransactionInterface {
    card: CardInterface
    uid: string,
    amount: number,
    comment: string,
    date: number,
    currency: string
}
