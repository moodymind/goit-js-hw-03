`use strict`;

function slugify(title) {
  const titleLowCase = title.toLowerCase();
  const splitWords = titleLowCase.split(" ");
  const slug = splitWords.join("-");
  return slug;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
