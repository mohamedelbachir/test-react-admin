import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PostStatusChartProps {
  data: {
    published: number;
    draft: number;
  };
}

const COLORS = ["#0088FE", "#00C49F"];

const PostStatusChart: React.FC<PostStatusChartProps> = ({
  data,
}: PostStatusChartProps) => {
  const chartData = [
    { name: "Published", value: data.published },
    { name: "Draft", value: data.draft },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PostStatusChart;
