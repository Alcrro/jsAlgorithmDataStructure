/*
! Dependency Inversion Principle

?			The dependency injection principle states that high level code should never depend on low level 
?		interfaces, and should instead use abstractions. It’s all about decoupling code.

*/

//! Implementation

//! WRONG way
class StoreBad {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  purchaseBike(quantity) {
    this.stripe.makePayment(200 * quantity * 100);
  }
  purchaseHelmet(quantity) {
    this.stripe.makePayment(15 * quantity * 100);
  }
}

class StripeBad {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(`${this.user} made payment $${amountInCents / 100} with Stripe`);
  }
}
class PaypalBad {
  constructor(user) {
    this.user = user;
  }
  makePayment(user, amountInDollars) {
    console.log(`${this.user} made payment $${amountInCents} with Paypal`);
  }
}

// const store = new Store("John");
// store.purchaseBike(2);
// store.purchaseHelmet(2);

//? GOOD way

class StoreGood {
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
    this.user = user;
    this.stripe = new StripeGood(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new PaypalGood();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class StripeGood {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(`${this.user} made payment $${amountInCents / 100} with Stripe`);
  }
}
class PaypalGood {
  makePayment(amountInCents) {
    console.log(`${this.user} made payment $${amountInCents} with Paypal`);
  }
}

const store = new StoreGood(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
