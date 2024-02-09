import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { View, Image } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]

export default function MyComponent() {

  return (
    <View>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={require('./app/assets/travel.jpg')}/>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider />
        {users.map((u, i) => {
            <View key={i} /*style={styles.user}*/>
              <Image
              style={{ width: 50, height: 50 }} // You can adjust the width and height as per your requirement
              resizeMode="cover"
              source={{ uri: u.avatar }}
              />
              <Text /*style={styles.name}*/>{u.name}</Text>
            </View>
          
        })}
      </Card>
    </View>
  );
}
