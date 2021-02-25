import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import appTheme from "../src/themes";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    overflow: "hidden",
    background: "#c1c1c1",
  },
}));

export default function App({ Component, pageProps }) {
  const classes = useStyles();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Bin2Dec</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={appTheme()}>
        <CssBaseline />
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={6}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
