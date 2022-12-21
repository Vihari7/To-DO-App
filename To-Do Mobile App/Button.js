import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,Button} from 'react-native';

const Button() {
	Show1=()=>
	{
		alert("Changes are saved");
	}
	Show2=()=>
	{
		alert("You are going to add a new task!");
	}
	render()
	{
		return(
			<View>
				<Button title="Button1" onPress={this.Show1}></Button>
				<Button title="Button2" onPress={this.Show2}></Button>
			</View>
		);
	}
}