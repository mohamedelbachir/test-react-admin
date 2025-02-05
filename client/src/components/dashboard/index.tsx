import type React from "react";
import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useGetList } from "react-admin";
import StatsCard from "./statsCard";
import PostsPerUserChart from "./postsPerUserChart";
import PostStatusChart from "./postStatusChart";

const DashboardContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ChartPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  height: 300,
}));

interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  status: "published" | "draft";
}

const Dashboard: React.FC = () => {
  const { data: users, isLoading: loadingUsers } = useGetList("users");
  const { data: posts, isLoading: loadingPosts } = useGetList("posts");

  const userRecords = users ?? [];
  const postRecords = posts ?? [];

  // Count number of posts per user
  const postsPerUser = userRecords.map((user) => ({
    name: user.name?.slice(0, 6),
    posts: postRecords.filter((post) => post.authorId === user.id).length,
  }));

  // Count Published vs Draft posts
  const publishedCount = postRecords.filter(
    (post) => post.status === "Published",
  ).length;
  const draftCount = postRecords.filter(
    (post) => post.status === "Draft",
  ).length;

  if (loadingUsers || loadingPosts) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "80vh", display: "flex" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <DashboardContainer maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StatsCard users={users?.length || 0} posts={posts?.length || 0} />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <ChartPaper>
            <Typography variant="h6">Posts per User</Typography>
            <PostsPerUserChart data={postsPerUser} />
          </ChartPaper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <ChartPaper>
            <Typography variant="h6">Post Status</Typography>
            <PostStatusChart
              data={{ draft: draftCount, published: publishedCount }}
            />
          </ChartPaper>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
