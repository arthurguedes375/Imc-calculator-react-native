import React, { useState } from 'react';

// Components React
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
} from 'react-native';


// Components Paper
import {
    TextInput,
    Button,
} from 'react-native-paper';


// Components
import Display from './components/Display';



const App = () => {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(null);

    const calcImc = () => {
        const alturaN = parseFloat(altura);
        const pesoN = parseFloat(peso);

        const alt = alturaN * alturaN;
        const imc = pesoN / alt;
        setImc(imc);
    };

    return (
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.imcText}>Seu IMC</Text>
                    <Display imc={imc} />
                </View>
                <View style={style.inputsContainer}>
                    <TextInput
                        label="Peso"
                        value={peso}
                        style={style.input}
                        placeholder="Digite o seu Peso..."
                        onChangeText={text => setPeso(text)}
                        onBlur={calcImc}
                    />
                    <TextInput
                        label="Altura"
                        value={altura}
                        style={style.input}
                        placeholder="Digite a sua Altura..."
                        onBlur={calcImc}
                        onChangeText={text => setAltura(text)}
                    />
                </View>
                <Button mode="contained" onPress={calcImc}>
                    Calcular
            </Button>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        width: "90%",

        alignItems: 'center',

        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    header: {
        width: "40%",
        height: 90,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    imcText: {
        fontWeight: '700',
        color: '#2A3F4F',
        fontSize: 20,
    },

    inputsContainer: {
        width: "90%",
        height: 300,

        flexDirection: "column",
        justifyContent: "space-evenly",
    },

    input: {
        width: '100%',
        height: 70,
    },

});

export default App;