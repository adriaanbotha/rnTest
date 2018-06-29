import reducer from "../reducer";

describe("list reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
            uname: "",
			isLoading: true,
		});
	});
	it("should handle FETCH_LOGIN_SUCCESS", () => {
		expect(
			reducer([], {
				type: "FETCH_LOGIN_SUCCESS",
                uname: "",
			})
		).toEqual({
            uname: "",
		});
	});
	it("should handle LOGIN_IS_LOADING", () => {
		expect(
			reducer([], {
				type: "LOGIN_IS_LOADING",
				isLoading: false,
			})
		).toEqual({
			isLoading: false,
		});
	});
});


