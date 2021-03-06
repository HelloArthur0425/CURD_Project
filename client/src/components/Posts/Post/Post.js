import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import momnet from 'moment';
import useStyle from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../action/posts';

const Post = ({ post, setCurrentId }) => {
    const styles = useStyle();
    const dispatch = useDispatch();
    const handelDelete = () => {
        dispatch(deletePost(post._id));
        setCurrentId(null);
    }

    return (
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
            <div className={styles.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{momnet(post.createAt).fromNow()}</Typography>
            </div>
            <div className={styles.overlay2}>
                <Button
                    styles={{ color: 'white' }}
                    size="small"
                    onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="default" style={{ color: 'white' }} />
                </Button>
            </div>
            <div className={styles.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={styles.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => handelDelete()}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;