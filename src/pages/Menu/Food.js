import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert 
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import Button from '../../components/Button'


export class Food extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : []
    };
  }

  componentDidMount(){
    this.getDataMakanan();
  }

  getDataMakanan = async () => {
    const makanan = await firestore().collection('Foods').get();
    const allData = makanan.docs.map((doc) => doc.data());
    this.setState({data: allData});
    console.log(allData);
  }
  

  sendData = (name) => {
    firestore()
    .collection('Orders')
    .add({
        name: name,
    })
    .then(() => {
        console.log(name);
    });
}

  renderItem = ({ item }) => {
    
    return (
      
        <LinearGradient
          colors={['#337091', '#338dbd', '#2eb6ff']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.item}>
          <View style={styles.image_container}>
            <Image style={styles.image} source={{uri:'https://placeimg.com/100/100/nature'}}/>
          </View>
            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.price_container}>
                <View style={styles.price}>
                  <Text style={styles.textPrice}>{item.price}</Text>
                </View>
              </View>
            </View>
         
         <TouchableOpacity onPress={() => Alert.alert('Anda Telah Pesan', item.name)} onPressIn={() => this.sendData(item.name)}>
            <Text>PESAN</Text>
         </TouchableOpacity>

        </LinearGradient>    
    );
  };

  ItemSeparatorComponent = () => {
    return <View style={{ height: 10 }} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatList}>
          <FlatList            
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tambah: {
    fontSize: 20,
    width : 30,
    height : 30,
    borderWidth : 1,
    borderRadius : 30 / 2,
    position : 'relative',

  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
});
