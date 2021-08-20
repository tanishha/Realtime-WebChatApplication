import { useState } from 'react';
import { Box } from "@material-ui/core";

//components
import Header from "../../Util/Menu/Header";
import Search from "../../Util/Menu/Search";
import Friends from "../../Util/Menu/Friends";

const Menu = () => {
  const [text, setText] = useState('');
  return (
    <Box>
      <Box>
        <Header />
        <Search setText={setText}/>
        <Friends text={text}/>
      </Box>
    </Box>
  );
};

export default Menu;
