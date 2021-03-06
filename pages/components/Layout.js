import React from 'react';
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../../utils/style';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Cool-Store</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved.Cool-store</Typography>
      </footer>
    </div>
  );
};

export default Layout
