import {
  PaymentMethod,
  Cash,
  CreditCard,
  BankTransfer,
  QRCode,
} from "./payment-methods.ts";

function main() {
  let paymentMethod: PaymentMethod;

  paymentMethod = new Cash();
  paymentMethod.pay();

  paymentMethod = new CreditCard();
  paymentMethod.pay();

  paymentMethod = new BankTransfer();
  paymentMethod.pay();

  paymentMethod = new QRCode();
  paymentMethod.pay();
}

main();
