import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { Grid, Paper, styled, Typography } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

const StatItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const StatIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  marginRight: theme.spacing(2),
  color: theme.palette.common.white,
}));

interface StatsCardProps {
  users: number;
  posts: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  users,
  posts,
}: StatsCardProps) => {
  return (
    <StyledPaper>
      <Typography variant="h6" gutterBottom>
        Quick Stats
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StatItem>
            <StatIcon>
              <PeopleIcon />
            </StatIcon>
            <div>
              <Typography variant="h4">{users}</Typography>
              <Typography variant="body2" color="textSecondary">
                Total Users
              </Typography>
            </div>
          </StatItem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatItem>
            <StatIcon>
              <ArticleIcon />
            </StatIcon>
            <div>
              <Typography variant="h4">{posts}</Typography>
              <Typography variant="body2" color="textSecondary">
                Total Posts
              </Typography>
            </div>
          </StatItem>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default StatsCard;
