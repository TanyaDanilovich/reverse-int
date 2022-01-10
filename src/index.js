module.exports = function reverse(n) {
	let str = '';
	n = String(n);
	if (n[0] != '-') {
		for (let i = n.length - 1; i >= 0; i--) {
			str = str + n[i]
		}
	} else {
		//str = '-'
		for (let i = n.length - 1; i > 0; i--) {
			str = str + n[i]
		}
	}
	return Number(str);
}
