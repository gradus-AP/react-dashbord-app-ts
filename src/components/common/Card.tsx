import { Box, ThemeProvider, createTheme } from '@mui/system';
import { FC, ReactNode } from 'react';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
        danger: {
            dark: '#d9534f',
        }
    },
});

const Card: FC<{ title:String, children: ReactNode }> = ({ title, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
            >
                <Box sx={{ color: 'text.secondary' }}>{title}</Box>
                {children}
            </Box>
        </ThemeProvider>
    );
}

export default Card;