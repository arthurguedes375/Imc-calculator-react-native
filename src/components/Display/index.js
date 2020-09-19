import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const Display = (props) => {


    const imcData = {
        default: {
            colors: {
                bgc: "#B9C2C4",
                brc: "#999FA0",
                color: "#000",
            },
            title: '',
        },
        magro: {
            colors: {
                bgc: "#3498db",
                brc: "#65b2e6",
                color: "#fff",
            },
            title: "Magreza",
        },
        normal: {
            colors: {
                bgc: "#16f776",
                brc: "#5de396",
                color: "#000",
            },
            title: "Normal",
        },
        sobrepeso: {
            colors: {
                bgc: "#ffa502",
                brc: "#ffa454",
                color: "#fff"
            },
            title: "Sobrepeso",
        },
        obesidade: {
            colors: {
                bgc: "#f39c12",
                brc: "#f0ba65",
                color: "#fff",
            },
            title: "Obesidade",
        },
        obesidadeGrave: {
            colors: {
                bgc: "#ff4d4d",
                brc: "#ff9191",
                color: "#fff",
            },
            title: "Obesidade Grave",
        },
    }

    const [bg, setBg] = useState(imcData.default.colors);
    const [imc, setImc] = useState(imcData.default);

    const showText = (imc) => {
        imc = parseFloat(imc);

        if (imc < 18.5) {
            setBg(imcData.magro.colors);
            setImc({
                ...imcData.magro,
                imcValue: imc.toFixed(1)
            });
        } else if (imc > 18.5 && imc < 24.9) {
            setBg(imcData.normal.colors);
            setImc({
                ...imcData.normal,
                imcValue: imc.toFixed(1)
            });
        } else if (imc > 24.9 && imc < 29.9) {
            setBg(imcData.sobrepeso.colors);
            setImc({
                ...imcData.sobrepeso,
                imcValue: imc.toFixed(1)
            });
        } else if (imc > 29.9 && imc < 39.9) {
            setBg(imcData.obesidade.colors);
            setImc({
                ...imcData.obesidade,
                imcValue: imc.toFixed(1)
            });
        } else if (imc > 39.9) {
            setBg(imcData.obesidadeGrave.colors);
            setImc({
                ...imcData.obesidadeGrave,
                imcValue: imc.toFixed(1)
            })
        } else {
            setBg(imcData.default.colors);
            setImc({
                ...imcData.obesidadeGrave,
                imcValue: ''
            })
        }
    }

    useEffect(() => {
        showText(props.imc);
    }, [props.imc]);


    const style = StyleSheet.create({
        display: {
            width: "100%",
            height: "90%",

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: bg.bgc,

            borderColor: bg.brc,
            borderStyle: "solid",
            borderWidth: 1,

            borderRadius: 7,

        },

        result: {
            color: bg.color,
            fontSize: 22,
            fontWeight: '700',
        },

        diag: {
            color: bg.color,
            fontSize: 16,
        },
    });

    return (
        <View style={style.display}>
            {props.imc ? (
                <>
                    <Text style={style.result}>{imc.imcValue}</Text>
                    <Text style={style.diag}>{imc.title}</Text>
                </>
            ) : (
                    <></>
                )}
        </View>
    );
}



export default Display;