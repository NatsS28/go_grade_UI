import React from 'react'
import { View, StyleSheet, Pressable,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

function Header({ title}) {

    const navigation = useNavigation();

    const goBack = () => {
        console.log("sds")
        navigation.pop();
    }
    return (
        <View style={styles.header}>
            <Pressable onPress={() => goBack()} style={styles.backButton}>
                <Ionicons name='chevron-back' size={20} color="white" />
            </Pressable>
            <Text style={styles.appTitle}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:60,
        backgroundColor: '#b50b22',
        marginVertical: 10,
        textAlignVertical:'center',
    },
    backButton: {
        textAlignVertical: 'center',
        marginTop:10,
    },
    appTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Header