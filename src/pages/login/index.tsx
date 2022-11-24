import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginPage = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/app')
  }
  
  return (
    <Box id="login-page" style={{ margin: '0 auto' }}>
      <Card sx={{ minWidth: 275, marginTop: 20 }} >
        <CardContent>
          <Stack spacing={2} >
            <Box>
              <Typography variant="body1" fontSize={20} textAlign={'center'}>Login</Typography>
            </Box>
            <TextField
              required
              id="outlined-required"
              label="Username"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <Box textAlign={'center'}>
              <Button variant="contained" sx={{ width: 1, height: 44 }} onClick={login}>LOGIN</Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginPage