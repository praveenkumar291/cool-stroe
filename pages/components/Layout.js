import React from 'react';
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Cool-Store</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>

          All rights reserved.Cool-store
        </Typography>
      </footer>

    </div>
  );
};

export default Layout
