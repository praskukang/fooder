import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ placeholder, ...rest }) => {
    return (
        <View>
            <TextInput
                style={style.textinput}
                placeholder={placeholder}
                keyboardType="number-pad"
                {...rest}
            />
        </View>
    )
}

export default Input

const style = StyleSheet.create({
    textinput: {
        marginTop: 70,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#337091',
        borderRadius: 25,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 15,

    },
})
