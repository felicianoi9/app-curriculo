import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/img/foto.jpeg';
import Card from './Components/Card';

const App = () => {
  function handleRedeSocial(rede_social){
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/felicianoi9');
        break;

      case 'facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/feliciano.professor');
        break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/felicianoi9');
        break;
    }
  }
  return (
    <>
      <SafeAreaView>
      <ScrollView>
      <View style={style.page}>
        
        <View style={style.container_head}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Rogério Feliciano</Text>
          <Text style={style.funcao}>Desenvolvedor Fullstack</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Esperiência Profissional">
          <Text style={style.card_content_text}>Feliciano i9</Text>
          <Text style={style.card_content_text}>Start You Up</Text>
          <Text style={style.card_content_text}>Rede Uniceeb</Text>
        </Card>
        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>IFES</Text>
          <Text style={style.card_content_text}>UFES</Text>
          <Text style={style.card_content_text}>CEFOR</Text>
        </Card>
        
      </View>
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: '#E7E7E7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_head: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  nome: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  funcao: {
    fontSize: 14,
    color: '#939393',
    fontStyle: 'italic',
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 15,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

export default App;
