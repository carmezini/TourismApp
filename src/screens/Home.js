import * as React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Atrações Turísiticas Santa Catarina'
  };

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    const { navigation } = this.props

    this.focusListener = navigation.addListener('didFocus', () => {
      const jsonContent = require('../services/data.json')
      this.setState(
        {
          isLoading: false,
          data: jsonContent
        },
        function () {}
      )
    })
  }

  componentWillUnmount() {
    this.focusListener.remove()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { navigate } = this.props.navigation
    return (


        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.inputArea}>
              <Feather
              name="search"
              size={24}
              color="black"
              />
              <TextInput
              placeholder='Digite a cidade que deseja.'
              style={styles.input}
              />
            </View>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigate('PlacesDetails', { data: item })}>
                <View style={styles.component}>
                  <View style={styles.containerTitle}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text> - </Text>
                    <Text style={styles.subTitle}>{item.cidade}</Text>
                  </View>
                  <View style={styles.containerImage}>
                    <Image style={styles.imageView} source={{ uri: item.foto }} />
                  </View>
                  <View style={styles.minidescricao}>
                    <Text>{item.miniDescricao}</Text>
                  </View>
                  <Feather style={styles.heart} name="heart" size={24} color={"red"}/>
                </View>
                </TouchableOpacity>
            )}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#2c354a',
    height: '100%'
  },
  component: {
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 280,
    width: 310,
    alignSelf: 'center',
    elevation: 2,
    borderRadius: 10,
    padding: 6,
    marginBottom: 10
  },
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20
  },
  heart: {
    paddingLeft: 240
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  imageView: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c354a'
  },
  subTitle: {
    color: '#2c354a',
    fontSize: 14,
  },
  minidescricao: {
    color: '#2c354a',
    fontSize: 10,
    paddingTop: 1,
    alignItems: 'center'
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20
  }
})