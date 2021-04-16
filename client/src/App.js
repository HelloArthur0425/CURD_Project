import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyle from './styles';

const App = () => {
  const styles = useStyle();

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography className={styles.heading} variant="h2" align="center">Memories</Typography>
        <img className={styles.image} src={memories} alt="memories" height="60" width="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="strench" spacing={3}>
            <Grid item xx={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xx={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
