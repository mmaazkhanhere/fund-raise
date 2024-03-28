

import { IFundReceivedLog } from '@/interfaces-d';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data?: IFundReceivedLog[];
};

const DataChart = ({ data }: Props) => {

    const placeholderData = [
        { receivedAt: '2023-03-26', amount: 0 },
        { receivedAt: '2023-03-27', amount: 20 }];

    const chartData = data?.map(log => ({
        receivedAt: log.receivedAt,
        amount: log.amount,
    }));

    return (
        <section className='w-full border'>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={placeholderData}>
                    <CartesianGrid />
                    <XAxis
                        dataKey='receivedAt'
                        name='Date'
                    />
                    <YAxis

                    />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#81f08f"
                        fill="#81f08f"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default DataChart;
