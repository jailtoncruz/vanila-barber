import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>Module de Signin</Text>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center'
    }
})