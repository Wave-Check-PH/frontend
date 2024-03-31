import { createTheme } from '@mui/material/styles';

const oceanTheme = createTheme({
    palette: {
        primary: {
            main: '#0097A7', // Teal
            light: '#B2EBF2', // Light Cyan
            dark: '#006064', // Dark Cyan
        },
        secondary: {
            main: '#FFC107', // Amber
            light: '#FFE082', // Light Amber
            dark: '#FFA000', // Dark Amber
        },
        background: {
            default: '#E0F7FA', // Pale Cyan
            paper: '#FFFFFF', // White
        },
        text: {
            primary: '#212121', // Dark Gray
            secondary: '#757575', // Gray
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
    // overrides: {
    //     MuiAppBar: {
    //         colorPrimary: {
    //             backgroundColor: '#0097A7', // Teal
    //         },
    //     },
    //     MuiButton: {
    //         root: {
    //             textTransform: 'none',
    //         },
    //         contained: {
    //             boxShadow: 'none',
    //         },
    //     },
    // },
});

export default oceanTheme;