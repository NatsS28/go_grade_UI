import React from 'react';
import { View, StyleSheet, Pressable, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header/Header';
import mainCat from '../../../assets/data/mainCat.json'

function MainCatScreen() {
    return (
        <SafeAreaView>
            <Header title={"Accompaniment Report"} />
            <FlatList data={mainCat}
                renderItem={({ item }) => (<Pressable>
                    <View style={Styles.container}>
                        <View style={Styles.left}>
                            <Image
                                style={Styles.image}
                                source={require('../../../assets/data/smartDSR.png')}
                            /><Text style={Styles.mainCatName}>{item.name}</Text>
                        </View>
                        <View style={Styles.right}>
                            <Pressable style={Styles.remarkLink}><Text style={{ color: '#4e0d94', textDecorationLine: 'underline' }}>View Previous Remark</Text></Pressable>
                            <Pressable style={[Styles.button]}><Text style={{ color: 'white' }}>Enter Remarks</Text></Pressable>
                        </View>
                    </View>
                </Pressable>)}
                ItemSeparatorComponent={() => (<View style={Styles.seperator}></View>)}>

            </FlatList>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    seperator: {
        backgroundColor: '#d4d0cf',
        width: '100%',
        height: 1
    },
    container: {
        flex:1,
        flexDirection:'row'
    },
    left: {
        flex: 0.5,
        flexDirection: 'column',
    },
    right: {
        flex:1,
    },
    image: {
        left:25,
        height: 150,
        width: 150,
    },
    mainCatName: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 53,
        marginVertical:15,
    },
    button: {
        backgroundColor: '#4e0d94',
        padding: 10,
        borderRadius: 5,
        width:'50%',
        left: 80,
        top:120,
    },
    remarkLink: {
        left: 70,
        top: 100,
    }

})

export default MainCatScreen