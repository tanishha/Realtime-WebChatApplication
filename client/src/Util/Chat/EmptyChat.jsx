import { Box, makeStyles, Typography, Divider } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    background: "#f8f9fa",
    padding: "50px 0",
    textAlign: "center",
    height: "100%",
  },
  container: {
    padding: "0 200px",
  },
  image: {
    width: 320,
  },
  title: {
    fontSize: 56,
    fontWeight: 500,
    color: "#525252",
    marginTop: 200,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 34,
    color: "rgba(0, 0, 0, 0.45)",
  },
  divider: {
    margin: "30px 0",
  },
});

const EmptyChat = () => {
  const style = useStyle();
  return (
    <Box className={style.component}>
      <Box className={style.container}>
        <Typography className={style.title}>Hello!!</Typography>
        <Typography className={style.subTitle}>Start Conversation</Typography>
        <Divider className={style.divider} />
      </Box>
    </Box>
  );
};

export default EmptyChat;
