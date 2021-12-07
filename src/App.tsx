import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import './App.css';
import logo from './logo.svg';

const LightBulbIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
};

const ProTip = () => {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
      <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
      Pro tip: See more{' '}
      <Link href="https://mui.com/getting-started/templates/">
        templates
      </Link>{' '}
      on the MUI documentation.
    </Typography>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example with TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default App;