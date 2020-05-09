describe("My test suite", () => {
	it("My test case", () => {
		expect(true).toEqual(true);
	});
});

describe("testing array", () => {
	it("Should be true for arrays", () => {
		expect([]).toBeInstanceOf(Array);
	});
});
