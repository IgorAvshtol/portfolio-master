import style from './Nav.module.scss';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-scroll";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


const Nav = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    return (


        <div className={style.nav}>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="#4e93e6"
                onClick={handleClick}
            >
                Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<Link to="main" smooth={true}>Main</Link>}/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<Link to="skills" smooth={true}>Skills</Link>}/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<Link to="projects" smooth={true}>Projects</Link>}/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<Link to="contacts" smooth={true}>Contacts</Link>}/>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    )

}

export default Nav;
