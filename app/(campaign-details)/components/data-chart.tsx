import { IFundReceivedLog } from '@/interfaces-d';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data?: IFundReceivedLog[];
};

const DataChart = ({ data }: Props) => {

    const formatDate = (receivedAt: Date) => {
        const date = new Date(receivedAt);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding padding if needed
        const day = date.getDate().toString().padStart(2, '0'); // Adding padding if needed
        return `${year}-${month}-${day}`;
    };

    console.log(data)

    const placeholderData = [
        { receivedAt: '2023-03-26', amount: 0 }
    ];

    const chartData = data?.map(log => ({
        receivedAt: formatDate(log.receivedAt),
        amount: log.amount,
    })) || placeholderData;

    console.log(chartData);

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
