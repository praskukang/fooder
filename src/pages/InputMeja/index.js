import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Icon } from '../../assets'
import * as Animatable from 'react-native-animatable';

const InputMeja = ({ navigation }) => {
    const [form, setForm] = useState(
        {
            noMeja: '',
        }
    );

    const onInputChange = (value) => {
        setForm({
            ...form,
            noMeja: value,
        });
    };


    return (
        <View style={style.container}>
            <Animatable.View style={style.header} animation="bounceIn" duration={1500}>
                <Image source={Icon} style={style.icon} />
            </Animatable.View>
            <Animatable.View style={style.footer} animation="fadeInUpBig">
                <Text style={style.text}>Silahkan Masukkan Nomer Meja</Text>
                <View style={style.inputbutton}>
                    <Input
                        placeholder="Nomer Meja"
                        value={form.noMeja}
                        onChangeText={value => onInputChange(value)}
                    />
                    <Button onPress={() => navigation.replace('Tabbar')}
                    />
                </View>
            </Animatable.View>
        </View >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#337091'
    },
    inputbutton: {
        marginBottom: 200
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'normal',
        marginTop: 110,
    },
    icon: {
        width: 200,
        height: 200,
    },
    header: {
        backgroundColor: '#337091',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50,
    }


})

export default InputMeja
