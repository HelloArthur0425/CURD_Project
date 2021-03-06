import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyle from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const styles = useStyle();
    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={styles.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => {
                        return (
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    );
}

export default Posts;