interface PostsPerUserChartProps {
  data: { name: string; posts: number }[];
}

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PostsPerUserChart: React.FC<PostsPerUserChartProps> = ({
  data,
}: PostsPerUserChartProps) => {
  const sortedData = [...data].sort((a, b) => b.posts - a.posts);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={sortedData}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis type="number" tickCount={6} domain={[0, "dataMax + 2"]} />
        <YAxis
          dataKey="name"
          type="category"
          tickMargin={20}
          width={100}
          tick={{ fill: "#666" }}
        />
        <Tooltip
          formatter={(value) => [`${value} posts`]}
          cursor={{ fill: "transparent" }}
        />
        <Bar dataKey="posts" fill="#8884d8" barSize={10} spacing={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PostsPerUserChart;
