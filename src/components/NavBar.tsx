import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

class NavBar extends React.Component<any, any> {
    public render() {
        const { text } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <Typography variant="title" color="inherit">
                            { text }
                        </Typography>
                    </ToolBar>
                </AppBar>
                <Button color="primary" variant="contained" className="btn-test">Hello world</Button>
            </div>
        );
    }
}

export default NavBar;