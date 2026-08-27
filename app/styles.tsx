import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea:{
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaeaff',
        padding: 20
    },
    titulo:{
        fontSize: 34,
        fontWeight: "bold",
        color: '#2c61b6ff',
        marginBottom: 10
    },
    descricao:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20
    },
    logo:{
        width: 140,
        height: 140,
        marginBottom: 20
    },
    card:{
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#2563eb',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    textoBotao: {
        color: '#ffffff',
        fontFamily: 'bold',
        fontSize: 18,
    },
    botaoPressionado:{
        // opacity: 0.7,
        backgroundColor: '#000',
        transform: [{ scale: 1.05}]
    }
});

