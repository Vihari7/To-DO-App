import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button} from 'react-native';
import Task from './Task';

export default function App() {
	  return (
    <View style={styles.container}>
	<View style={styles.text}>
	<Text style={styles.header}>To Do List</Text>
	</View>
      <View style={styles.image}>
        <Image source={{
			width: 200,
            height: 250,
            marginBottom: 50,
            padding: 50,
            border: 1,
            alignItems: 'center',
            uri: "https://static.vecteezy.com/system/resources/previews/003/472/630/non_2x/task-done-concept-with-a-young-girl-feeling-excited-raising-arms-vector.jpg",
            }}
        /> 
        </View>	
		<View style={styles.items}> 
		{/*Task 1 */} 
		<Task text={'Task 1'} />
		<Task text={'Task 2'} />
		<Task text={'Task 3'} />
		<Task text={'Task 4'} />
		<Task text={'Task 5'} />
		</View>
	</View>
	
	);
	
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'rgb(214, 235, 243)',
    },
    header: {
        fontSize: 30,
        textAlign: 'left',
        margin: 10,
        color: 'blue',
        fontFamily: 'Calibri'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    },
	items:{
		marginTop:30,
	},

});