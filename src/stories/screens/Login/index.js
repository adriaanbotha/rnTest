import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Footer } from "native-base";

export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {

	clickMe() {
        this.props.onLogin();
	}

	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
                        <Image style={{width: 260, height: 80}} source={require("../../../../assets/site-logo.png")} />

						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Improving mental health and wellbeing
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.clickMe()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
                        <Title>Neaminational.org.au</Title>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
