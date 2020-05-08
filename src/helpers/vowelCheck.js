export const doesWordStartWithVowel = (word) => {
	let letter = word.charAt(0).toLowerCase();
	if (["a", "e", "i", "o", "u"].includes(letter)) {
		return "an";
	} else {
		return "a";
	}
};
