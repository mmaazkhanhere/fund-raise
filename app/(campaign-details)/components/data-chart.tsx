/*A react component that render a data visualization chart using data passed 
through props */


import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { IFundReceivedLog } from '@/interfaces-d';

type Props = {
    data?: IFundReceivedLog[];
};

const DataChart = ({ data }: Props) => {

    /*function to format date in the format 'Year- Month - Date'. It takes a
    Date object as input and returns a formatted string  */
    const formatDate = (receivedAt: Date) => {
        const date = new Date(receivedAt);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    const chartData = data?.map(log => ({
        receivedAt: formatDate(log.receivedAt),
        amount: log.amount,
    })) //get required data from the data passed in the props

    return (
        <section className='w-full border'>

            <ResponsiveContainer width={'99%'} height={400}>
                <AreaChart data={chartData}>
                    <XAxis
                        dataKey='receivedAt'
                        name='Date'
                    />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#3a5846"
                        fill='#81f08f'
                        activeDot={{ r: 8 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default DataChart;
