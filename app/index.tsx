import { Image, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useState} from 'react';

export default function Home() {
        const [pressionado, setPressionado] = useState(false)

    function iniciarAplicacao(){
        console.log("O botão foi pressionado!")
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.titulo}>TaskFlow</Text>

                    <Text style={styles.descricao}>
                        Organize sua tarefas de forma simples
                    </Text>

                    <Pressable onPress={iniciarAplicacao} 
                    onPressIn={() => setPressionado(true)}
                    onPressOut={() => setPressionado(false)}
                    style={({pressed}) => [styles.botao, 
                        pressed && styles.botaoPressionado
                    ]}
                    >
                        <Text style={styles.textoBotao}>
                            Começar
                            {pressionado ? "Carregando..." : "Começar"}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

