function talk(lang, isPolite) {
  if (isPolite) {
    if (lang === "en") {
      return `Hello, I am ${this.name}`;
    } else if (lang === "it") {
      return `Ciao bella, Io sono ${this.name}`;
    }
  } else {
    if (lang === "en") {
      return `${this.name} what you want?`;
    } else if (lang === "it") {
      return `sono ${this.name} 😡`;
    }
  }
}

const me = {
  name: "Alex",
};

console.log(talk.call(me, "it", true));
console.log(talk.apply(me, ["it", true]));
console.log(window);
