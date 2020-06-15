import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

const Map = () => {
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);

    useEffect(() => {
        async function loadPosition() {
          const { status } = await Location.requestPermissionsAsync();
    
          if(status !== 'granted') {
            Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização');
            return;
          }
    
          const location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    
          const { latitude, longitude } = location.coords;
    
          setInitialPosition([ latitude, longitude ]);
        }
    
        loadPosition();
      }, []);

    return (
        <View style={styles.mapContainer} >{ 
            initialPosition[0] !== 0 && (
                <MapView style={styles.map} 
                initialRegion={{
                    latitude: initialPosition[0],
                    longitude: initialPosition[1],
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}>

                </MapView>
            )}
                <TextInput 
                style={styles.input}
                autoCorrect={false}
                placeholder="Busque seu barbeiro por bairro"
                />
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText} >Encontrar</Text>
                </RectButton>

            </View>
    )
}

export default Map;

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center'
      },

    map: {
        flex: 1,
        borderRadius: 25,
        marginVertical: 20
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Ubuntu_500Medium'
    },
    input: {
        height: 60,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 14,
        color: "#595959"
    },
})