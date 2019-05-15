/**
 * @author Jerry-FD
 * @create date 2019-05-15 13:28:21
 * @desc [ipv4 => number]
 */

/**
 *
 * @param {String} input ipv4 格式 ip 地址
 * return Number 返回十进制数
 */
const format = input =>
	dig2t10(
		String(input)
			.split(".")
			.map(i => dig10t2(i.trim()))
			.reduce((sum, cur) => String(sum) + cur)
	);

/**
 *
 * @param {Number|String} input 10进制输入
 * return 8 位 2 进制数（字符串）
 */
const dig10t2 = input => {
	if (isNaN(Number(input))) {
		throw Error("invalid input");
	}
	let _input = input;
	const result = Array(8).fill(0);
	for (let i = 7; i > 0; i--) {
		if (_input >= Math.pow(2, i)) {
			_input -= Math.pow(2, i);
			result[i] = 1;
		}
	}
	return result.reverse().join("");
};

/**
 *
 * @param {Number|String} input 2 进制输入
 * return 10 进制数
 */
const dig2t10 = input =>
	String(input)
		.split("")
		.reverse()
		.reduce((sum, cur, index) => +sum + Math.pow(2, index) * cur);

export { format, dig10t2, dig2t10 };
