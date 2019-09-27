// I run via the command-line by: yarn run test --watchAll
import { testNameToKey } from "jest-snapshot/build/utils";

const add =(a,b) =>  a+b;
const generateGreeting = (name ='Anonymous')=> `Hello ${name}!`;
test('should add two numbers', ()=>{
    expect(add(3,4)).toBe(7);
});

test('should generate greeting from name', ()=>{
    expect(generateGreeting('Jeff')).toBe('Hello Jeff!');
});

test('should generate greeting for no name', ()=>{
    expect(generateGreeting()).toBe('Hello Anonymous!');
});