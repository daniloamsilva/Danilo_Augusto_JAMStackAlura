import React from 'react';

import Box from '../src/components/foundation/Box';
import Menu from '../src/components/commons/Menu';
import Cover from '../src/components/commons/Cover';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover>
        <Menu />
      </Cover>
    </Box>
  );
}
