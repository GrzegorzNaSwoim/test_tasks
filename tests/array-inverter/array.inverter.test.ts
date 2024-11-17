import {ArrayStringInverter} from "../../src/task-1/inverting-arrays/array.string.inverter";
import {expect} from "chai";
import {ArrayInverterTestData} from "./test-data/array.inverter.test.data";

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
    testFunctions.forEach(({name, method}): void => {
        describe(`test suite for reverse stings in array to method ${name}`, (): void => {
            const testData: ArrayInverterTestData = new ArrayInverterTestData();

            it(`Should be reversed array ${testData}`,
                (): void => {

                    const result: string[] = method(testData.BASE_INPUT_DATA);
                    expect(result).to.be.an(testData.EXPECTED_DATA_TYPE,
                        'Result should be array type')
                    expect(result).with.lengthOf(testData.TC_1_EXPECTED_DATA.length,
                        `Array should have size ${testData.TC_1_EXPECTED_DATA.length}`)
                    expect(result).to.deep.equal(testData.TC_1_EXPECTED_DATA,
                        `Expected result should be ${testData.TC_1_EXPECTED_DATA}`)

                })

            it("Should be empty array", (): void => {

                const result: string[] = method(testData.TC_2_INPUT_DATA);
                expect(result).to.be.an(testData.EXPECTED_DATA_TYPE,
                    'Result should be array type');
                expect(result).with.lengthOf(testData.TC_2_EXPECTED_DATA.length,
                    `Array should have size ${testData.TC_2_EXPECTED_DATA.length}`);
                expect(result).to.be.deep.equal(testData.TC_2_EXPECTED_DATA,
                    `Expected result should be ${testData.TC_2_EXPECTED_DATA}`);

            })
            it("Should be array with duplicated string values", (): void => {
                const result: string[] = method(testData.TC_3_INPUT_DATA);
                expect(result).to.be.an(testData.EXPECTED_DATA_TYPE,
                    'Result should be array type');
                expect(result).with.lengthOf(testData.TC_3_EXPECTED_DATA.length,
                    `Array should have size ${testData.TC_3_EXPECTED_DATA.length}`);
                expect(result).to.be.deep.equal(testData.TC_3_EXPECTED_DATA,
                    `Expected result should be ${testData.TC_3_EXPECTED_DATA}`);

            })

            it("Should be array with one string value", (): void => {
                let result: string[] = method(testData.TC_4_INPUT_DATA);
                expect(result).to.be.an(testData.EXPECTED_DATA_TYPE,
                    'Result should be array type');
                expect(result).with.lengthOf(testData.TC_4_EXPECTED_DATA.length,
                    `Array should have size ${testData.TC_4_EXPECTED_DATA.length}`);
                expect(result).to.be.deep.equal(testData.TC_4_EXPECTED_DATA,
                    `Expected result should be ${testData.TC_4_EXPECTED_DATA}`);

            })
            it("Should throw error due to invalid input data provided number instead string[]", (): void => {
                expect((): string[] => method(testData.TC_5_INPUT_DATA as any)).to.throws(
                    testData.INVALID_INPUT_EXPECTED_DATA, "Should throw error for invalid input type")
            })
            it("Should throw error due to invalid input data provided any[] instead string[]", (): void => {
                expect((): string[] => method(testData.TC_6_INPUT_DATA as any)).to.throws(
                    testData.INVALID_INPUT_EXPECTED_DATA, "Should throw error for invalid input type")
            })
            it("Should throw error due to invalid input data provided {[key: string]: string} instead string[]", (): void => {
                expect((): string[] => method(testData.TC_7_INPUT_DATA as any)).to.throws(
                    testData.INVALID_INPUT_EXPECTED_DATA, "Should throw error for invalid input type")
            })

        })
    })
})
