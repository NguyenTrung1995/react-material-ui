import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';

const styles = {
    button: {
      margin: 10,
    },
    leftIcon: {
      marginRight: 8,
    },
    rightIcon: {
      marginLeft: 8,
    },
    iconSmall: {
      fontSize: 20,
    },
};

class Buttons extends React.Component<any, any> {
    public render() {
        return (
            <Button variant="contained" color="secondary" style={styles.button}>
                Delete
                <DeleteIcon style={styles.rightIcon}/>
            </Button>
        );
    }
}

export default Buttons;