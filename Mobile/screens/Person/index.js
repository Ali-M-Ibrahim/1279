import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import styles from './styles'
const Person = (props) => {
    // const name = props.name;
    const [flag, setFlag] = useState(false);
    const { name, age } = props;
    return (
        <View style={{ backgroundColor: 'lightblue', border: '1px solid gray' }}>
            <Text style={styles.class1}>I am person and my name is {name} and age is: {age} </Text>
            {flag ? <Text style={[styles.class2, styles.class3]} >Flag is true</Text> : <Text>Flag is false</Text>}
            <Button title='press me' onPress={() => setFlag(!flag)}></Button>

        </View>
    )
}

export default Person;


