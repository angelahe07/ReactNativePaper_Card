import * as React from "react";
import { Avatar, Button, Card, Text} from "react-native-paper";
import Constants from 'expo-constants';
import { View, Image, StyleSheet } from "react-native";
import colors from "./app/config/colors";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// const users = [
//   {
//      name: 'brynn',
//      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//   },
// ]
const onSave = () => {
  
}
export default function App() {

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Travel"
          subtitle="places to go on the best vacation"
          left={LeftContent}
          style={styles.cardTitle}
        />
      </Card>
      <Card style={styles.card}>
        <Card.Content>
            <Text variant="titleLarge">Beach</Text>
            <Text variant="bodyMedium">Abundance of Activities</Text>
          </Card.Content>
          <Card.Cover source={require('./app/assets/travel.jpg')}/>
          <Card.Actions>
            <Button onPress={() => console.log("Clicked Save")}>Save</Button>
            <Button onPress={() => console.log("Clicked Like")}>Like</Button>
          </Card.Actions>
      </Card>
      <Card style={styles.card}>
      
        <Card.Content>
          <Text variant="titleLarge">Greece</Text>
          <Text variant="bodyMedium">Beautiful Scenary</Text>
        </Card.Content>
        <Card.Cover source={{uri: "https://travel.usnews.com/dims4/USNEWS/5a2511b/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-462922955_BDSjPTe.jpg"}}/>
        {/* <Card.Divider /> */}
        <Card.Actions>
          <Button onPress={() => console.log("Clicked Save")}>Save</Button>
          <Button onPress={() => console.log("Clicked Like")}>Like</Button>
        </Card.Actions>
      
    </Card>
    </View>
  );

  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 3 ,
      //flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "primary",
      padding: 6,
    },
    card: {
      marginTop: 2, 
      backgroundColor: colors.lightPink,
    },
    cardTitle: {
      fontSize: 10,
      fontColor: colors.darkPink,
      marginBottom: 10,
    }
  })
