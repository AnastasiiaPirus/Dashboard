import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#6bfdd0', '#523941', '#a277fb'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 600 },
  { name: 'Group C', value: 200 },
];

const data01 = [
    { name: 'Group A', value: 400 },

  ];


const renderActiveShape = (props) => {

  const { cx, cy,  innerRadius, outerRadius, startAngle, endAngle, fill, payload, } = props;


  return (
    <g>
      <text x={cx} y={cy-10} dy={60} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

    </g>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart width={400} height={400} style={{
                fontSize: '0.6rem',
                fontFamily: 'Roboto Mono, monospace'
            }}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={20}
            outerRadius={30}
            paddingAngle={5}
            // fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
            stroke="none"
          >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
            ))}
            
            </Pie>
        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={20} innerRadius={10} fill="#ffa455" stroke="#ffa455"/>
        </PieChart>
      </ResponsiveContainer>

    );
  }
}


