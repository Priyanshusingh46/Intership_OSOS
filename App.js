import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import Item from "./Components/Item";
import axios from "axios";
const App = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  let b = StatusBar.currentHeight;
  const [articles, setArticles] = useState([]);
  const getClothes = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setArticles(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getClothes();
  }, []);
  return (
    <View style={{ marginTop: b }}>
      <View>
        <View
          style={styles.outerView}
        >
          <Text
            style={styles.heading}
          >
            Shopping
          </Text>
        </View>
        <FlatList
          data={articles}
          renderItem={({ item, index }) => (
            <Item
              urlToimage={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              price={item.price}
              onPress={() => {
                setVisible(() => true);
                setData(() => item);
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {data && (
          <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
            <View>
            <Image source={{ uri: data.image }} style={styles.image}/>
            <Text style={{fontSize:18,fontWeight:"bold",color:"blue"}}>Description : </Text>
            <Dialog.Title title={data.description} />
            </View>

            <View style={styles.container}>
              <TouchableOpacity>
            <View style={styles.cart}>
              <Text style={styles.text}>Add to Cart</Text>
            </View>
              </TouchableOpacity>

            <TouchableOpacity
            onPress={toggleDialog}
            >
            <View style={styles.cart1}>
              <Text style={styles.text}>Close</Text>
            </View>
            </TouchableOpacity>

            </View>
            
          </Dialog>
        )}
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  image:{
    width:140,
    height:140,
    alignSelf:"center"
  },
  text:{
    fontSize:16,
    fontWeight:"500",
    textAlign:"center"
  },
  cart:{
    backgroundColor:"orange",
    width:90,
    height:30,
    justifyContent:"center"

  },

  cart1:{
    backgroundColor:"grey",
    width:90,
    height:30,
    justifyContent:"center"
  },
  container:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  heading:{
    textAlign: "center", 
    fontWeight: "500", 
    fontSize: 28
  },
  outerView:{
    marginBottom: 10,
    margingLeft: 20,
    marginRight: 10,
    borderRadius: 10,
  }
})