export function loginIsLoading(bool: boolean) {
	return {
		type: "LOGIN_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchLoginSuccess(uname: String) {
	return {
		type: "FETCH_LOGIN_SUCCESS",
		uname
	};
}
export function fetchLoginDetails(uname: String) {
	return dispatch => {
		dispatch(fetchLoginSuccess((uname)));
		dispatch(loginIsLoading(false));
	};
}
