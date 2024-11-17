export class ArrayStringInverter {
    public arrayStringInvert(inputArrayOfString: string[]): Array<string> {
        this.inputDataValidation(inputArrayOfString);
        return [...inputArrayOfString].reverse();
    }
    public arrayStringInvertUsingLoop(inputArrayOfString: string[]): Array<string> {
        let result: string[] = [];
        this.inputDataValidation(inputArrayOfString);
        if (inputArrayOfString.length > 0) {
            for (let index = inputArrayOfString.length - 1; index >= 0; index--) {
                result.push(inputArrayOfString[index]);
            }
        }
        return result;
    }
    public inputDataValidation(inputArrayOfString: any) {
        if (!Array.isArray(inputArrayOfString) || !inputArrayOfString.every(item => typeof item === 'string')) {
            throw new Error("Invalid input: input must be an array of strings");
        }
    }
}