import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './action/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyle from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const styles = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography className={styles.heading} variant="h2" align="center">MyBlod</Typography>
        <img className={styles.image} src={memories} alt="memories" height="60" width="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container className={styles.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xx={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xx={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
