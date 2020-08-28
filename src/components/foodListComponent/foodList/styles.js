import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242,241,241)',
  },
  foodListContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  content: {
    flexDirection: 'row',
  },
  foodIcon: {
    width: 50,
    height: 30,
    alignSelf:'center'
  },
  downArrowIcon: {
    width: 20,
    height: 10,
    alignSelf: 'center',
    tintColor: 'black'
   },
  text: {
    fontSize: 14,
    alignSelf:'center'
  },
  padding: {
    padding:10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  quote: {
    marginVertical: 20,
    padding:10,
    alignSelf: 'center',
    backgroundColor: '#E7FCF2'
  },
  protip: {
    marginVertical: 20,
    padding: 5,
  },
  protipText: {
    color: 'white',
    fontSize: 12,
    padding: 5
  },
  list: {
    backgroundColor: 'white',
  },
  borderRadius: {
    borderRadius: 5,
    borderWidth:0.5,
  }
});

export default styles;
