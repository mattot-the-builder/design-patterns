interface PaymentMethod {
  pay(): void;
}

class Cash implements PaymentMethod {
  pay() {
    console.log("Cash payment");
  }
}

class CreditCard implements PaymentMethod {
  pay() {
    console.log("Credit card payment");
  }
}

class BankTransfer implements PaymentMethod {
  pay() {
    console.log("Bank transfer payment");
  }
}

class QRCode implements PaymentMethod {
  pay() {
    console.log("QR code payment");
  }
}

export { PaymentMethod, Cash, CreditCard, BankTransfer, QRCode };
