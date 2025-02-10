import { FizzBuzz } from "../src/FizzBuzz";

const fizzBuzz= new FizzBuzz();
let result:number|string;
it("Un argument de 1 retourne 1", () =>{
  result= fizzBuzz.answerFor(1);
    expect(result).toEqual(1);
});

// un argument de 2 retourne 2
it("Un argument de 2 retourne 2", () =>{
    result= fizzBuzz.answerFor(2);
    expect(result).toEqual(2);
})

//Un argument de 3 retourne Fizz
it("Un argument de 2 retourne 2", () =>{
    result= fizzBuzz.answerFor(3);
    expect(result).toEqual("Fizz");
})

//Un argument de 3 retourne Fizz
it("Un argument de 6 retourne Fizz", () =>{
    result= fizzBuzz.answerFor(6);
    expect(result).toEqual("Fizz");
}) 

it("Un argument de 5 retourne Buzz", () =>{
    result= fizzBuzz.answerFor(5); 
    expect(result).toEqual("Buzz");
})

it("Un argument de 10 retourne Buzz", () => {
    result = fizzBuzz.answerFor(10);
    expect(result).toEqual("Buzz");
});

it("Un argument de 15 retourne FizzBuzz", () => {
    result = fizzBuzz.answerFor(15);
    expect(result).toEqual("FizzBuzz");
});

it("Un argument de 30 retourne FizzBuzz", () => {
    result = fizzBuzz.answerFor(30);
    expect(result).toEqual("FizzBuzz");
});

it("Un argument de 13 retourne Fizz", () => {
    result = fizzBuzz.answerFor(13);
    expect(result).toEqual("Fizz");
});

it("Un argument de 59 retourne Buzz", () => {
    result = fizzBuzz.answerFor(59);
    expect(result).toEqual("Buzz");
});

it("Un argument de 53 retourne FizzBuzz", () => {
    result = fizzBuzz.answerFor(53);
    expect(result).toEqual("FizzBuzz");
});