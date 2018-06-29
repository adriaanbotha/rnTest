import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Footer
} from "native-base";

import styles from "./styles";
import variables from "../../../theme/variables/platform";
export interface Props {
  navigation: any;
}

export interface State {}
class Home extends React.Component<Props, State> {
  render() {
      return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent>
                  <Icon style={{ color: variables.brandPrimary }}
                    active
                    name="menu"
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}
                  />
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>
          <Content>
              <View padder>
                  <Text>welcome {this.props.uname || "NO NAME FOUND"}</Text>
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

export default Home;
