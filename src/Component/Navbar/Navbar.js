import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import * as action from '../../redux/login/Action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function Navbar(props) {
    const classes = useStyles();
    const [username, setUser] = useState('');

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.username);
        }

    }, []);

    const logOut = () => {
        props.logoutUser();
        props.history.push('/');
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Col className="col-md-2 col-sm-2 ml-auto">
                        <span className="user">
                            {username}
                        </span>&nbsp;&nbsp;
                        <span className="logout" onClick={() => logOut()}>
                            Logout
                        </span>
                    </Col>
                </Toolbar>
            </AppBar>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        loginData: state.login.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))

// export default withRouter(Navbar);
