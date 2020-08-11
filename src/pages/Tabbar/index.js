import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Food from '../Menu/Food';
import Drink from '../Menu/Drink';


const Tabbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
                <ScrollableTabView
                    initialPage={0}
                    tabBarActiveTextColor="#337091"
                    renderTabBar={() =>
                        <DefaultTabBar
                            underlineStyle={{
                                backgroundColor: '#337091'
                            }} />}  >
                    <Food tabLabel="Food" />
                    <Drink tabLabel="Drink" />
                </ScrollableTabView>
            </View>
        </View>

    )
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tabbar: {
        flex: 1,
        marginTop: width * 0.1,
        paddingHorizontal: 30
    },
})

export default Tabbar