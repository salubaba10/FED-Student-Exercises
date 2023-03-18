// 3rd party package from https://www.npmjs.com/package/faker
import { faker } from "@faker-js/faker";

// function that accepts a parameter of numberOfWords with a default value of 10
export const getRandomWords = (numberOfWords = 10) => {
  // use the random words method from faker-js to generate a string of random words
  const words = faker.random.words(numberOfWords);

  // convert the string of random words to an array and return the list if random words
  return words.split(" ").map((word) => word.toUpperCase());
};
