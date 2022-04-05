import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking, Image, ScrollView} from 'react-native';
 
export default class PlacesDetails extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };
 
  constructor(props) {
    super(props);
    let data = props.navigation.getParam('data');
    this.state = {
      nome: data.nome,
      descricao: data.descricao,
      foto: data.foto,
      cidade: data.cidade,
      endereco: data.endereco,
      telefone: data.telefone,
      horario: data.horario,
      site: data.site,
      preço: data.preço,

    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { nome, descricao, foto, cidade, endereco, telefone, horario, site, preço } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.cidade}>{cidade}</Text>
        <Image style={styles.image} source={{uri: foto}} />
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.infoName}>Informações</Text>
        <View style={styles.info}>
          <Text>Endereço: {endereco}</Text>
          <Text>Telefone: {telefone}</Text>
          <Text>Horário: {horario}</Text>
          <Text>Preço: {preço}</Text>
          <Text>Site: {site}</Text>
        </View>
        <Text style={styles.infoContact}>Contatos</Text>
        <View style={styles.button} >
          <Button title="Youtube" onPress={() => Linking.openURL(
              `https://www.youtube.com/results?search_query=${nome}`)} />
        </View>
        <View style={styles.button}>
          <Button title="Ligar" onPress={() => Linking.openURL(`tel:${telefone}`)} />
        </View>
        <View style={styles.button}>
          <Button title="Voltar" onPress={() => navigate('Home')} />
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#2c354a'
  },
  cidade: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 15,
    marginLeft: 10
  },
  image: {
    marginTop: 20,
    width: '95%',
    marginLeft: 10,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  descricao: {
    fontSize: 20,
    marginBottom: 10
  },
  info: {
    paddingTop: 10,
    fontSize: 10,
    paddingBottom: 5,
  },
  infoName: {
    fontWeight: 'bold',
    paddingTop: 10
  },
  infoContact: {
    fontWeight: 'bold',
    paddingTop: 10
  },
  button: {
    paddingTop: 10,
    width: 300,
    alignSelf: 'center',
    alignContent: 'space-between',
    paddingBottom: 10
  },
});