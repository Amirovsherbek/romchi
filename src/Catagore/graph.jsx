import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     { uv: Data[1], name: '4000', amt: 9000 },
//     { uv: Data[2], uname: '4000', amt: 4010 },
//     { uv: Data[3], name: '2000', amt: 2290 },
//     { uv: Data[4], name: '2780', amt: 2000 },
//     { uv: Data[5], name: '1890', amt: 2181 },
//     { uv: Data[6], name: '2390', amt: 2500 },
//     { uv: Data[7], name: '3490' },
//   ];
const Graph = () => {
    const [Data,setData]=useState({
        '1':'40',
        '2':'256',
        '3':'240',
        '4':'110',
        '5':'490',
        '6':'600',
        '7':'1000',
   })
    const data = [
        { uv: Data[1], name: '4000', amt: 9000 },
        { uv: Data[2], uname: '4000', amt: 4010 },
        { uv: Data[3], name: '2000', amt: 2290 },
        { uv: Data[4], name: '2780', amt: 2000 },
        { uv: Data[5], name: '1890', amt: 2181 },
        { uv: Data[6], name: '2390', amt: 2500 },
        { uv: Data[7], name: '3490' },
      ];
    return (
      <LineChart className='anim' width={800} height={330} data={data} style={{ backgroundColor: 'black',borderRadius:'15px' ,paddingTop:'10px'}}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  };
  
  export default Graph;