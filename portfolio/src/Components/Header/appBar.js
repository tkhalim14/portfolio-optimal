
import React from 'react';
import { makeStyles,AppBar, Toolbar, Typography,Button} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(67, 129, 168,0.5)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67, 129, 168)'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarTransparent}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <Button color="black">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}