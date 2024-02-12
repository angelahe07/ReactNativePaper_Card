import * as React from "react";
import { Avatar, Button, Card, Text} from "react-native-paper";
import Constants from 'expo-constants';
import { View, Image, StyleSheet, Alert, ScrollView} from "react-native";
import colors from "./app/config/colors";
const LeftContent = (props) => <Avatar.Icon {...props} icon="map" />;

const onSave = (placeName) => {
  alert("You saved " + placeName + " into your bucket list!");
}

const onLike = (placeName) => {
  alert("You liked " + placeName);
}

const onPressCard = () => {
  Alert.alert("Learn More?", "You will be prompted to a new page", [
    {text: "yes", onPress: (() => console.log("Pressed yes"))},
    {text: "no", onPress: () => console.log("Pressed no")}
  ]);
}

const onLongPressCard = (placeName) => {
  Alert.alert("Love this place?", "You have saved and liked " + placeName);
  console.log("onLongPress")
}
export default function App() {

  return (
    <View >
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title
              titleStyle={styles.cardTitle}
              subtitleStyle={styles.cardSubtitle}
              title="Travel"
              subtitle="places to go on the best vacation"
              left={LeftContent}
            />
          </Card>
          <Card 
            style={styles.card} 
            onPress={() => onPressCard()}
            mode="outlined">
            {/* The Card.Content, Card.Cover, and Card.Actions are all children of the Card component that adds customization to card*/}
            <Card.Content>
              <Text style= {styles.text} variant="titleLarge">Thailand</Text>
              <Text style= {styles.text} variant="bodyMedium" marginBottom = {10} >Abundance of Activities</Text>
            </Card.Content>
            <Card.Cover source={require('./app/assets/travel.jpg')}/>
            <Card.Actions>
              <Button onPress={() => onSave("Thailand")}>Save</Button>
              <Button onPress={() => onLike("Thailand")}>Like</Button>
            </Card.Actions>
          </Card>
          
          <Card 
            style={styles.card}
            onLongPress={() => onLongPressCard("Greece")}>
            {/* The Card.Content, Card.Cover, and Card.Actions are all children of the Card component that adds customization to card*/}
            <Card.Content>
                <Text style= {styles.text} variant="titleLarge">Greece</Text>
                <Text style= {styles.text} variant="bodyMedium" marginBottom = {10} >Beautiful Scenary</Text>
            </Card.Content>
            <Card.Cover source={{uri: "https://travel.usnews.com/dims4/USNEWS/5a2511b/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-462922955_BDSjPTe.jpg"}}/>
              {/* <Card.Divider /> */}
            <Card.Actions>
              <Button onPress={() => onSave("Greece")}>Save</Button>
              <Button onPress={() => onLike("Greece")}>Like</Button>
            </Card.Actions>
          </Card>

          <Card 
              style={styles.card}
              onLongPress={() => onLongPressCard("Italy")}
              mode="contained">
              {/* The Card.Content, Card.Cover, and Card.Actions are all children of the Card component that adds customization to card*/}
              <Card.Content>
                  <Text style= {styles.text} variant="titleLarge">Italy</Text>
                  <Text style= {styles.text} variant="bodyMedium" marginBottom = {10} >Full of History</Text>
              </Card.Content>
              <Card.Cover source={{uri: "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg"}}/>
                {/* <Card.Divider /> */}
              <Card.Actions>
                <Button onPress={() => onSave("Italy")}>Save</Button>
                <Button onPress={() => onLike("Italy")}>Like</Button>
              </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </View>
  );

  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "primary",
      padding: 8,
    },
    card: {
      marginTop: 10, 
      backgroundColor: colors.lightPink,
    },
    cardTitle: {
      fontSize: 20,
      color: colors.darkPurple,
      marginBottom: 3,
    },
    cardSubtitle: {
      color: colors.darkPurple,
    },
    text: {
      color: colors.darkPurple,
    }
  })
