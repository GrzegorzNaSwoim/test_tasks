export class ArrayInverterTestData {
    public readonly BASE_INPUT_DATA: string[] = ['asd', 'af', 'bb', 'a'];
    public readonly EXPECTED_DATA_TYPE: string = 'array';
    public readonly INVALID_INPUT_EXPECTED_DATA: string = "Invalid input: input must be an array of strings";
    public readonly TC_1_EXPECTED_DATA: string[] = ["a", "bb", "af", "asd"];
    public readonly TC_2_INPUT_DATA: string[] = [];
    public readonly TC_2_EXPECTED_DATA: string[] = [];
    public readonly TC_3_INPUT_DATA: string[] = ["abc", "abc", "abc"];
    public readonly TC_3_EXPECTED_DATA: string[] = ["abc", "abc", "abc"];
    public readonly TC_4_INPUT_DATA: string[] = ["single value"];
    public readonly TC_4_EXPECTED_DATA: string[] = ["single value"];
    public readonly TC_5_INPUT_DATA: number = 123;
    public readonly TC_6_INPUT_DATA: any[] = [123, "adsds", ArrayInverterTestData, "adsds", {"abc": "caaa"}];
    public readonly TC_7_INPUT_DATA: { [key: string]: string } = {'asd': 'af', 'bb': 'a'};

}