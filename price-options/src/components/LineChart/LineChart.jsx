import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "John", math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: "Emma", math: 78, physics: 70, chemistry: 85 },
        { id: 3, name: "Michael", math: 92, physics: 90, chemistry: 88 },
        { id: 4, name: "Sophia", math: 65, physics: 72, chemistry: 68 },
        { id: 5, name: "William", math: 70, physics: 65, chemistry: 75 },
        { id: 6, name: "Olivia", math: 88, physics: 85, chemistry: 90 },
        { id: 7, name: "James", math: 75, physics: 78, chemistry: 72 },
        { id: 8, name: "Amelia", math: 82, physics: 80, chemistry: 85 },
        { id: 9, name: "Benjamin", math: 90, physics: 88, chemistry: 92 },
        { id: 10, name: "Isabella", math: 79, physics: 72, chemistry: 78 }
      ];
      
      
    return (
        <div>
            <LChart width={900} height={500} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
                <Line dataKey={'chemistry'}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;