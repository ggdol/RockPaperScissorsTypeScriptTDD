import { greeter } from "./greeter"

describe('greeter', ()=>{
    test('hellowWorld given defult should return `Hellow World!`', ()=>{
        //Arrange
        const expected = "Hello World!";
        const sut = greeter();
        //Act
        const actual = sut.helloWorld();
        //Assert
        expect(actual).toBe(expected);
    })

    test('hellowPerson given empty name should return `Hellow !`', ()=>{
        //Arrange
        const expected = "Hello Abdullah!";
        const input = "Abdullah";
        const sut = greeter();
        //Act
        const actual = sut.helloPerson(input);
        //Assert
        expect(actual).toBe(expected);
    })

})