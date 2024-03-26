import { IFundReceivedLog } from '@/interfaces-d';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data?: IFundReceivedLog[]
}

const DataChart = ({ data }: Props) => {

    const chartData = data?.map(log => ({
        receivedAt: log.receivedAt,
        amount: log.amount,
    }));

    console.log(chartData);
    console.log(data);

    return (
        <section
            className='w-full border'
        >
            <ResponsiveContainer width={500} height={300} style={{ border: 1 }}>
                <LineChart data={chartData}>
                    <XAxis />
                    <YAxis />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="fundsReceived"
                        stroke="#8884d8"
                    />

                </LineChart>
            </ResponsiveContainer>
        </section>

    )
}

export default DataChart