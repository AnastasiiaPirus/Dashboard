import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

// export default function Child() {
//   return (
//     <div>Child</div>
//   )
// }

const COLORS = ['#6bfdd0', '#523941', '#a277fb'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 600 },
  { name: 'Group C', value: 200 },
];

const data01 = [
    { name: 'Group A', value: 400 },
    // { name: 'Group B', value: 300 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];
  // const data02 = [
  //   { name: 'A1', value: 100 },
  //   { name: 'A2', value: 300 },
  //   { name: 'B1', value: 100 },
  //   { name: 'B2', value: 80 },
  //   { name: 'B3', value: 40 },
  //   { name: 'B4', value: 30 },
  //   { name: 'B5', value: 50 },
  //   { name: 'C1', value: 100 },
  //   { name: 'C2', value: 200 },
  //   { name: 'D1', value: 150 },
  //   { name: 'D2', value: 50 },
  // ];

const renderActiveShape = (props) => {
  // const RADIAN = Math.PI / 180;
  const { cx, cy,  innerRadius, outerRadius, startAngle, endAngle, fill, payload, } = props;
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 30) * cos;
  // const my = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ey = my;
  // const textAnchor = cos >= 0 ? 'start' : 'end';

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
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#dcc4c4">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text> */}
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


