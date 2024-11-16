import {ArrayStringInverter} from "../../src/task-1/inverting-arrays/arrays.inverter";
import {expect} from "chai";

describe('Test Suite for Functions which returns the same result but has diff implementation ', () => {
    let arrayStringInverter: ArrayStringInverter;
    before((): void => {
        arrayStringInverter = new ArrayStringInverter();
    });
    const testFunctions = [
        {name: 'arrayStringInvert', method: (input: string[]) => arrayStringInverter.arrayStringInvert(input)},
        {
            name: 'arrayStringInvertWithLoop',
            method: (input: string[]) => arrayStringInverter.arrayStringInvertUsingLoop(input)
        }
    ];
    testFunctions.forEach(({name, method}) => {
        describe(`test suite for reverse stings in array to method ${name}`, (): void => {
            const testData: string [] = ['asd', 'af', 'bb', 'a'];
            const expectedReverseData: string[] = ["a", "bb", "af", "asd"];
            let arrayStringInverter: ArrayStringInverter;


            it(`positive reversing string in array for expected data ${expectedReverseData} and input data ${testData}`, (): void => {
                expect(arrayStringInverter).to.not.be.null;
                let result: string[] = method(testData);
                expect(result).to.be.an('array')
                expect(result).with.lengthOf(expectedReverseData.length)
                expect(result).to.deep.equal(expectedReverseData)


            })
            it(`Negative scenario reversing strings in array for input value and expected value ${testData}`, (): void => {
                expect(arrayStringInverter).to.not.be.null;
                let negResult: string[] = method(testData);
                expect(negResult).to.be.an('array')
                expect(negResult).with.lengthOf(expectedReverseData.length)
                expect(negResult).to.be.not.deep.equal(testData)


            })
            it("Empty array reverse scenario", (): void => {
                expect(arrayStringInverter).to.not.be.null;
                let result: string[] = method([]);
                expect(result).to.be.an('array');
                expect(result).with.lengthOf(0);
                expect(result).to.be.deep.equal([]);

            })
            it("Array with the duplicated values reverse", (): void => {
                expect(arrayStringInverter).to.not.be.null;
                let result: string[] = method(["abc", "abc", "abc"]);
                expect(result).to.be.an('array');
                expect(result).with.lengthOf(3);
                expect(result).to.be.deep.equal(["abc", "abc", "abc"]);

            })

            it("Array with single value reverse", (): void => {
                expect(arrayStringInverter).to.not.be.null;
                let result: string[] = method(["single value"]);
                expect(result).to.be.an('array');
                expect(result).with.lengthOf(1);
                expect(result).to.be.deep.equal(["single value"]);

            })
            it("Provided number datatype instead string []", (): void => {
                expect(() => method(123 as any)).to.throw(
                    "Invalid input: input must be an array of strings")
            })
            it("Provided list of various datatypes instead string []", (): void => {
                expect(() => method([123, "adsds", testData,"adsds", {"abc":"caaa"}]as any)).to.throw(
                    "Invalid input: input must be an array of strings")
            })
            it("Provided list of objects datatypes instead string []", (): void => {
                expect(() => method({'asd': 'af', 'bb': 'a'} as any)).to.throw(
                    "Invalid input: input must be an array of strings")
            })

        })
    })
})
