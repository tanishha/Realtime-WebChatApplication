import { EmojiEmotions, AttachFile, Mic } from "@material-ui/icons";
import { Box, makeStyles, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "55px",
    background: "#ededed",
    position: "absolute",
    width: "100%",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "&  >*": {
      margin: 5,
      color: "#919191",
    },
  },
  search: {
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    width: "59%",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 25,
    fontSize: 14,
    height: 20,
    width: "100%",
  },
  clipIcon: {
    transform: "rotate(40deg)",
  },
}));

const Footer = ({ sendText, value, setValue }) => {
  const style = useStyles();

  return (
    <Box className={style.footer}>
      <EmojiEmotions />
      <AttachFile className={style.clipIcon} />

      <Box className={style.search}>
        <InputBase
          placeholder="Type a message"
          classes={{
            root: style.inputRoot,
            input: style.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Box>

      <Mic />
    </Box>
  );
};

export default Footer;
