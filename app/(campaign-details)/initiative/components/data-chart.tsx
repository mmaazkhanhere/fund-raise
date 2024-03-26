import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data?: {
        date: string,
        amount: number,
    }[];
}

const DataChart = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data!}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="fundsReceived"
                    stroke="#8884d8"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default DataChart