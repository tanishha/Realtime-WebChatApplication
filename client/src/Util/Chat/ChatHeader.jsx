import { Box, Typography, makeStyles } from "@material-ui/core";
import { Search, MoreVert } from "@material-ui/icons";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    display: "flex",
    padding: "10px 16px",
    alignItems: "center",
  },
  displayPicture: {
    width: 37,
    height: 37,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 2px",
  },
  name: {
    marginLeft: 10,
  },
  rightContainer: {
    marginLeft: "auto",
    "& > *": {
      padding: 8,
      fontSize: 22,
      color: "#919191",
    },
  },
  status: {
    fontSize: 12,
    color: "rgb(0, 0, 0, 0.6)",
    marginLeft: 10,
  },
});

function ChatHeader({ person }) {
  const style = useStyles();

  return (
    <Box className={style.header}>
      <img src={person.imageUrl} alt="DP" className={style.displayPicture} />
      <Box>
        <Typography className={style.name}>{person.name}</Typography>
        <Typography className={style.status}>
          {/* {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'} */}
        </Typography>
      </Box>
      <Box className={style.rightContainer}>
        <Search />
        <MoreVert />
      </Box>
    </Box>
  );
}

export default ChatHeader;
