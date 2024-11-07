import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.child}>
            <View style={styles.header}>
                <Icon name={icon_name} size={24} color="black" />
                <Text style={styles.childText}>{name}</Text>
            </View>
            <Image source={poster} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

export default Boat;

const styles = StyleSheet.create({
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#CBC3E3',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    childText: {
        fontSize: 24,
        textAlign: 'center',
    },
    image: {
        width: 300, // Adjusted width
        height: 200,
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});
