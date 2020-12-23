import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    card_container: {
      marginTop: 5,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      marginTop: 20,
      width: '80%',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#939393',
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card_head: {
  
    },
    card_content: {
      width: '80%',
      marginTop: 10,
      color: '#EEEEEE',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    card_content_text: {
      color: '#939393',
      marginBottom: 10,
      textTransform: 'uppercase',
    },
});
export default style;