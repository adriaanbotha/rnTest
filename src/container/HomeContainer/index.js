// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { formValueSelector } from "redux-form";
import { fetchLoginDetails } from "./actions";

export interface Props {
	navigation: any,
    fetchLoginDetails: Function,
    uname: string
}
export interface State {}

class HomeContainer extends React.Component<Props, State> {
	render() {
		return <Home navigation={this.props.navigation} uname={this.props.uname} />;
	}
}

function bindAction(dispatch) {
	return {
        fetchLoginDetails: uname => dispatch(fetchLoginDetails(uname)),
	};
}

const mapStateToProps = state => ({
    uname: formValueSelector("login")(state, "uname"),
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);

