import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App(){
    const [img, setImg] = useState(require('@/assets/imgs/biscoito.png'))
    const [phrase, setPhrase] = useState('');

    const phrases = [
        "Não dê atenção às palavras vãs de más línguas.",
        "Seja orgulhoso, porém tolerante e generoso.",
        "Uma boa época para terminar tarefas antigas.",
        "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.",
        "Quando a coceira é dentro da bota, coçar o lado de fora não alivia muito.",
        "Más companhias são como um mercado de peixes: acaba-se acostumando com o mal cheiro.",
        "O cordeiro ajoelha-se para mamar.",
        "As pessoas acham difícil resistir ao seu jeito persuasivo de ser.",
        "Se o braço estiver quebrado, mantenha-o sob a manga.",
        "Você terá sorte em muitas coisas.",
        "Não tenha o olho maior do que o estômago.",
        "Se comermos menos, degustaremos mais.",
        "Não aja como uma rã sentada no fundo do poço.",
        "Pratique esportes, mas não em excesso.",
        "Pense antes de falar, mas não fale tudo o que pensar.",
        "Se o problema tem solução, não esquente a cabeça, porque tem solução. Se não tem solução, não esquente a cabeça, porque não tem solução.",
        "Dando sempre, você terá sempre.",
        "Aquele que ronca mais alto adormece primeiro.",
        "Amigos há muito distantes estarão retornando a você.",
        "Um antigo amor virá assombrar a sua vida."
    ]
    const breakCookie = () => {
        setImg(require('@/assets/imgs/biscoitoAberto.png'));
        const randomNumber = Math.floor(Math.random() * phrases.length);
        setPhrase(`"${phrases[randomNumber]}"`);
    }

    const restoreCookie = () => {
        setImg(require('@/assets/imgs/biscoito.png'));
        setPhrase('');
    }
    return(
        <View style={styles.container}>
            <Image
                source={img}
                style={styles.image}
            />
            <Text style={styles.phrase}>{phrase}</Text>
            <TouchableOpacity style={styles.button} onPress={breakCookie}>
                <View style={styles.buttonArea}>
                    <Text style={styles.buttonText}>Quebra biscoito</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: "#121212"}]}
            onPress={restoreCookie}>
                <View style={styles.buttonArea}>
                    <Text style={[styles.buttonText, {color: "#121212"}]}>Restaurar biscoito</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        width: 230,
        height: 230
    },
    phrase:{
        fontSize: 20,
        color: "#dd7b22",
        margin: 30,
        fontStyle: 'italic',
        textAlign:'center'
    },
    button: {
        width: 230,
        height: 50,
        borderColor: "#dd7b22",
        borderWidth: 2,
        borderRadius: 25
    },
    buttonArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#dd7b22",
        textAlign: 'center'
    }
})