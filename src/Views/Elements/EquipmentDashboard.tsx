import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground } from "react-native";
import { AreaChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { Circle, G, Line, Rect } from 'react-native-svg'
import * as dateFns from 'date-fns'

const screenWidth = Dimensions.get("window").width;

export default class EquipmentDashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
            { value: 10, date: dateFns.setHours(new Date(2018, 1, 1), 6) },
            { value: 12, date: dateFns.setHours(new Date(2018, 1, 1), 7) },
            { value: 13, date: dateFns.setHours(new Date(2018, 1, 3), 8) },
            { value: 17, date: dateFns.setHours(new Date(2018, 1, 5), 11) },
            { value: 12, date: dateFns.setHours(new Date(2018, 1, 7), 8) },
            { value: 9, date: dateFns.setHours(new Date(2018, 1, 9), 23) },
            { value: 8, date: dateFns.setHours(new Date(2018, 1, 11), 11) },
            { value: 9, date: dateFns.setHours(new Date(2018, 1, 13), 12) },
            { value: 15, date: dateFns.setHours(new Date(2018, 1, 17), 10) },
            { value: 35, date: dateFns.setHours(new Date(2018, 1, 19), 12) },
            { value: 70, date: dateFns.setHours(new Date(2018, 1, 21), 11) },
            { value: 24, date: dateFns.setHours(new Date(2018, 1, 23), 10) },
            { value: 14, date: dateFns.setHours(new Date(2018, 1, 25), 16) },
            { value: 11, date: dateFns.setHours(new Date(2018, 1, 28), 16) },
            { value: 12, date: dateFns.setHours(new Date(2018, 1, 29), 13) }];

        const limit = 50;

        const data2 = [{ value: limit, date: data[0].date }, { value: limit + 1, date: data[data.length - 1].date }];

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 20, bottom: 10 }
        const xAxisHeight = 1

        return (
            <ImageBackground source={require("./../background-boats-sailing-flat-design.jpg")}
                imageStyle={{ resizeMode: 'cover', opacity: .3 }}
                style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>Equipement number 10:</Text>
                <View style={{ backgroundColor: "rgb(200, 200, 200)", flexDirection: 'row', padding: 20 }}>

                    <YAxis
                        yAccessor={({ item }) => item.value}
                        data={data}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, height: 300, marginLeft: 20, flexDirection: 'column' }}>
                        <AreaChart
                            style={{ flex: 1 }}
                            data={data}
                            yAccessor={({ item }) => item.value}
                            xAccessor={({ item }) => item.date}
                            xScale={scale.scaleTime}
                            contentInset={{ top: 20, bottom: 10 }}
                            svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                            curve={shape.curveLinear}
                        >
                            <Grid />
                        </AreaChart>
                        {/* <AreaChart
                            style={StyleSheet.absoluteFill}
                            data={data}
                            svg={{ fill: 'rgba(234, 128, 176, 0.5)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                            curve={shape.curveNatural}
                        /> */}
                        <XAxis
                            data={data}
                            svg={{
                                fill: 'black',
                                fontSize: 8,
                                fontWeight: 'bold',
                                rotation: 20,
                                originY: 30,
                                y: 5,
                            }}
                            xAccessor={({ item }) => item.date}
                            scale={scale.scaleTime}
                            numberOfTicks={6}
                            style={{ marginHorizontal: -15, height: 20 }}
                            contentInset={{ left: 10, right: 25 }}
                            formatLabel={(value) => dateFns.format(value, 'dd/MM/yyyy')}
                        />

                    </View>

                </View >
                <Text>Done</Text>
            </ImageBackground>
        )
    }
}