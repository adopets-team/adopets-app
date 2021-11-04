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
    // Modal
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    // Texts
    errorMessage: {
        marginLeft: 10,
        fontSize: 14,
        color: '#E9514C',
    }
})