import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground, Button } from "react-native";
import { AreaChart, Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { Circle, G, Line, Rect } from 'react-native-svg'
import * as dateFns from 'date-fns'

const screenWidth = Dimensions.get("window").width;

export default class EquipmentDashboard extends React.Component {
    constructor(props) {
        super(props)
        //console.log(props.route.params);
    }

    render() {
        const dates = [
            dateFns.setHours(new Date(2018, 1, 1), 6),
            dateFns.setHours(new Date(2018, 1, 1), 7),
            dateFns.setHours(new Date(2018, 1, 3), 8),
            dateFns.setHours(new Date(2018, 1, 5), 11),
            dateFns.setHours(new Date(2018, 1, 7), 8),
            dateFns.setHours(new Date(2018, 1, 9), 23),
            dateFns.setHours(new Date(2018, 1, 11), 11),
            dateFns.setHours(new Date(2018, 1, 13), 12),
            dateFns.setHours(new Date(2018, 1, 17), 10),
            dateFns.setHours(new Date(2018, 1, 19), 12),
            dateFns.setHours(new Date(2018, 1, 21), 11),
            dateFns.setHours(new Date(2018, 1, 23), 10),
            dateFns.setHours(new Date(2018, 1, 25), 16),
            dateFns.setHours(new Date(2018, 1, 28), 16),
            dateFns.setHours(new Date(2018, 1, 29), 13)];

        let data = []

        for (var i = 0; i < Math.min(dates.length, this.props.route.params.values.length); i++) {
            data.push({ value: this.props.route.params.values[i], date: dates[i] })
        }

        const limit = 50;

        const data2 = [{ value: limit, date: data[0].date }, { value: limit + 1, date: data[data.length - 1].date }];

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 20, bottom: 10 }
        const xAxisHeight = 1

        return (
            <View>
                <Text style={{ fontSize: 20, backgroundColor: "grey", textAlign: 'center' }}>{`Valeur des capteurs de ${this.props.route.params.name}`}:</Text>
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
                {Math.max(...this.props.route.params.values) >= this.props.route.params.max_val ?
                    <Text style={{
                        fontSize: 20,
                        backgroundColor: "rgba(186, 13, 39, .94)",
                        textAlign: 'center'
                    }}>{`Valeur du capteur anormale, seuil limite autorisé à ${this.props.route.params.max_val}`}</Text>
                    :
                    <Text style={{
                        fontSize: 20,
                        backgroundColor: "rgba(22, 171, 9, .94)",
                        textAlign: 'center'
                    }}>{`Pas d'anomalies, seuil limite autorisé à ${this.props.route.params.max_val}`}:</Text>

                }


                <Button title="Retour" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}