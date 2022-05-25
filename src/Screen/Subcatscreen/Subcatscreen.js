import React from 'react';
import { View, StyleSheet, Pressable, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header/Header';
import  categoryName from '../../../assets/data/subCategoryName.json'

function Subcatscreen() {
    return (
        <SafeAreaView>
            <Header title={"Select Category"} />
            <FlatList
                data={categoryName}
                renderItem={({ item }) => (
                    <Pressable>
                        <View style={Styles.container}>
                            <View style={Styles.subCatName}>
                                <Text style={{fontSize:17}}>{item.subCatName}</Text>
                            </View>
                            <View style={Styles.totalQuestions}>
                                <Text style={{ fontSize: 12 }}>0 out of {item.totalQuestions}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
                ItemSeparatorComponent={() => (<View style={Styles.seperator}></View>)}
                keyExtractor={(item, index) => index.toString()}
            >
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:23,
    },
    subCatName: {
        marginLeft: 20,
    },
    totalQuestions: {
        marginRight:50
    },
    subCatQuestionIndex:{}
})

export default Subcatscreen