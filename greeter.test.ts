import { greeter } from "./greeter"

describe('greeter', ()=>{
    test('hellowWorld given defult should return `Hellow World!`', ()=>{
        const sut = greeter();
        const actual = sut.helloWorld();
        expect(actual).toBe("Hello World!");
    })

})