import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {

    return (
        <>
            <View style={styles.constainer}>
                <Text>Componente Home</Text>
            </View>
        </>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})