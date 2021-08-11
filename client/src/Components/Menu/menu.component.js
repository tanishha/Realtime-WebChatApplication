// import { useState } from 'react';
import { Box } from "@material-ui/core";

//components
import Header from "../../Util/Menu/Header";
import Search from "../../Util/Menu/Search";
import Conversations from "../../Util/Menu/Conversations";

const Menu = () => {
  // const [text, setText] = useState('');
  return (
    <Box>
      <Box>
        <Header />
        <Search />
        <Conversations />
      </Box>
    </Box>
  );
};

export default Menu;
