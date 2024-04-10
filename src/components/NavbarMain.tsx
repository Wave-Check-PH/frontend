import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import NavItem from '../interfaces/NavItem';
import { useNavigate } from 'react-router-dom';
import { signOut,getAuth } from "firebase/auth";

interface Props {
    window?: () => Window;
    loggedIn?: boolean;
}

const drawerWidth = 240;

const navItems: NavItem[] = [{
    text: 'Home',
    path: '/'
}, {
    text: 'History',
    path: '/history'
}, {
    text: 'About',
    path: '/about'
},{
    text: 'Instructor',
    path: '/instructor'
}];


export default function DrawerAppBar(props: Props) {
    const { window,loggedIn } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
const auth = getAuth();


    const handleOnLinkClick = (link: string) => navigate(link);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Wave Check PH
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem onClick={() => handleOnLinkClick(item.path)} key={item.path} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* {loggedIn ? (
          <Button onClick={() => signOut(auth)}>
            Sign Out
          </Button>
        ) : (
          <Button >
            Sign In
          </Button>
        )} */}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <span>Wave Check PH 🇵🇭</span>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => { navigate(item.path) }} key={item.path} sx={{ color: '#fff' }}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                                        {/* {loggedIn ? (
                    <Button sx={{ color: '#fff' }} onClick={() => signOut(auth)}>
                        Sign Out
                    </Button>
                ) : (
                    <Button sx={{ color: '#fff' }} onClick={() => { navigate('/login') }}>
                        Sign In
                    </Button>
                )} */}
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}