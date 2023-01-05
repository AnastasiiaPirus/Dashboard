import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [    
    {
        name: 'COLD',
        uv: 3000,
    },
    {
        name: 'WARM',
        uv: 1420,
    },
    {
        name: 'CLEAN',
        uv: 2780,
    },
    {
        name: 'CRIME',
        uv: 1000,
    },
    {
        name: 'GRAPHICS',
        uv: 1790,
    },
    {
        name: 'OCEANS',
        uv: 2000,
    },
    {
        name: 'LAND',
        uv: 5090,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

    render() {
        return (
            <ResponsiveContainer width="100%" height="95%">
                <AreaChart
                    
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <defs>
                        <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ffd480" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff7d67" stopOpacity={0.7} />
                        </linearGradient>
                        
                    </defs>
                    <XAxis dataKey="name" tick={{ fill: '#dcc4c4' }} tickLine={{ stroke: '#dcc4c4' }}/>
                    {/* <YAxis tick={{ fill: '#dcc4c4' }} tickLine={{ stroke: '#dcc4c4' }} /> */}
                    <Tooltip />
                    <Area  dataKey="uv" stroke="#dcc4c4" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
