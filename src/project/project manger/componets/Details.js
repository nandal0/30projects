import React from 'react'
import {Card, CardContent, CardHeader} from '@material-ui/core'
import { DoughnutController } from 'chart.js'
import styleDetalis from './styleDetalis'
import useTrans from '../useTrans'
import { Doughnut } from 'react-chartjs-2';

const Details = ({title}) => {
    const classes=styleDetalis()
    const { total, chartData } = useTrans(title);

    return (
        <div>
            <Card className={title="Income"?classes.income:classes.expense}>
                <CardHeader title={title}/>
                <CardContent variant="h5" >{total}</CardContent>
                <Doughnut data={chartData} />
            </Card>
        </div>
    )
}

export default Details
