import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

// const Task = (props) => {
//     return (
//         <View style={styles.item}>
//             <View style={styles.itemLeft}>
//                 <View style={styles.square}></View>
//                 <Text style={styles.itemText}>hello</Text>
//             </View>
//             <View style={styles.circular}></View>
//         </View>
//     )
// }
<Text>Hellow</Text>

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,  
        elevation: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Imoje;