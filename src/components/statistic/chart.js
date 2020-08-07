import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';



export default function Chart() {

    const [amounts, setAmounts] = useState([]);
    const [name, setName] = useState('Iphone XS Max')

    const productName = useSelector(state => state.statistic.productName)

    useEffect(() => {
        setName(productName)
        console.log("product:", productName)

    }, [productName])


    useEffect(() => {
        getList(name)
        console.log("name:",name)
    }, [name])

    const getList = (productName) => {
        const url = `https://5f1fcb4dfba6d400169d4393.mockapi.io/statistic?productName=${productName}`;
        axios.get(url)
            .then(res => {
                setAmounts(res.data);
            })
            .catch(error => console.log(error));
    }

    const  options = {


        chart: {
            type: 'column'
        },
        title: {
            text: 'Total of products sold out 2020'
        },

        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Amount (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total : <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ...(amounts.map(amount =>

                    ( [`${amount.month}`, amount.amount])
                ))

            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]

    }

    // console.log(options)
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    )
};

