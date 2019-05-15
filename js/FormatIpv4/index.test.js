/**
 * @author Jerry-FD
 * @create date 2019-05-15 14:28:21
 * @desc unit test
 */
import { format, dig2t10, dig10t2 } from "./index";

describe("format", () => {
	test("should return number correctly", () => {
		expect(format("172.168.5.1")).toBe(2896692224);
		expect(format("172.  168.5.1")).toBe(2896692224);
		expect(format("172.168.5.  1")).toBe(2896692224);
	});
	test("should throw 'invalid input' as an error", () => {
		try {
			format("172.16 8.5.1");
		} catch (e) {
			const error = new Error("invalid input");
			expect(e).toMatchObject(error);
		}
	});
});

describe("dig2t10", () => {
	test("should return decimal number correctly", () => {
		expect(dig2t10(10010011)).toBe(147);
		expect(dig2t10("10010011")).toBe(147);
	});
});

describe("dig10t2", () => {
	test("should return binary number correctly", () => {
		expect(dig10t2(172)).toBe("10101100");
		expect(dig10t2("168")).toBe("10101000");
	});
});
