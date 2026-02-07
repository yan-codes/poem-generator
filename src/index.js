function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "A university degree, four books, and hundreds of articles and I still make mistakes when reading, You write to me 'good morning' and I read it as, 'I love you'.",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
