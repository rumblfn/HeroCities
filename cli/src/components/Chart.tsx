import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS: string[] = [
    "var(--secondary-opc)",
    "var(--secondary-opc-ttl)"
]

const Chart = (prop: number) => {

    const data = [
        { name: 'true', value: prop },
        { name: 'false', value: 100 - prop }
    ];

    return (
        <div>
            <PieChart width={200} height={200} style={{width: '100%'}}>
                <Pie
                    data={data}
                    cx={95}
                    cy={95}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <text
                    x='50%'
                    y='50%'
                    dy={+8}
                    dx={+4}
                    style={{ fontSize: 22, fontWeight: 'bold', fill: 'var(--primary)' }}
                    width={100}
                    textAnchor='middle'
                >
                    {prop}%
                </text>
            </PieChart>
        </div>
    )
}

export default Chart