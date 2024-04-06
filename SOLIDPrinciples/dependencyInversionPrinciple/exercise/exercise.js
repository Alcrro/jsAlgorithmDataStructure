/*

! Dependency Inversion principle

?	 High level classes are not dependent by low level classes


*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made payment $${amountInCents / 100} with Stripe`);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor("Gigel"));
const store2 = new Store(new PaypalPaymentProcessor("Cristi"));
store.purchaseBike(2);
store.purchaseHelmet(2);
store2.purchaseBike(3);
store2.purchaseHelmet(3);
