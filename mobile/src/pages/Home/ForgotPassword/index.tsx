import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <Text>Module esqueceu a senha</Text>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})