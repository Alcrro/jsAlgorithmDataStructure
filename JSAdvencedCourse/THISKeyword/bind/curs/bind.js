function talk(lang) {
  if (lang === "en") {
    return `I am ${this.name}`;
  } else if (lang === "it") {
    return `Io sono ${this.name}`;
  }
}

const me = {
  name: "Alex",
};

talk.call(me, "it");
