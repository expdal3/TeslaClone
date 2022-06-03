import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row', //display item in a same line
        justifyContent: 'space-between', //'spread the items out
        width: '100%',
        paddingHorizontal: 20, //add padding to either side of items to the screen edge
    },
    logo:{
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu:{
        width: 25,
        height:25,
        resizeMode: 'contain',
    },
});

export default styles;

