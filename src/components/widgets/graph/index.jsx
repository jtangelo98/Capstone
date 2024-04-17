import { Line } from 'react-chartjs-2';

export function Chart(){
    // Sample data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <h2>Line Chart Example</h2>
            <div style={{ width: '80%', margin: 'auto' }}>
                <Line data={data} />
            </div>
        </div>
    );
};

export default Chart;
