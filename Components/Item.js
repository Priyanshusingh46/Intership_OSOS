import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.urlToimage }} style={styles.image} />
      </View>

      {/*Text*/}

      <View style={styles.textcontainer}>
        <Text style={styles.text} numberOfLines={1}>
          {" "}
          Title : {props.title}
        </Text>

        {/* category*/}
        <Text style={styles.text} numberOfLines={1}>
          {" "}
          Categories : {props.category}
        </Text>

        {/* Cost */}
        <Text style={styles.text} numberOfLines={1}>
          {" "}
          Cost : {props.price}$
        </Text>


        {/* Units Left*/}
        <Text style={styles.text} numberOfLines={1}>
          {" "}
          units Left : {props.units}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "grey",
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
  },
  textcontainer: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  text: {},
});
export default Item;
