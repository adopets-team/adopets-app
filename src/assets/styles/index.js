import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
    },
    // Input
    input: {
        height: 41,
        margin: 10,
        borderWidth: 1,
        borderColor: '#D9DBDB',
        borderRadius: 15,
        padding: 10,
    },
    // Button
    circledButton: {
        height: 41,
        width: 143,
        borderRadius: 15,
        backgroundColor:'#74B9FF',
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    textOnButton: {
        color: '#FFFFFF',
        fontSize: 16
    },
    // Texts
    errorMessage: {
        marginLeft: 10,
        fontSize: 14,
        color: '#E9514C',
    }
})