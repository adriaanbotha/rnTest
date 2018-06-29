const initialState = {
	isLoading: true,
	uname: ""
};

export default function(state: any = initialState, action: Function) {

	if (action.type === "FETCH_LOGIN_SUCCESS") {
		return {
			...state,
            uname: action.uname,
		};
	}
	if (action.type === "LOGIN_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
