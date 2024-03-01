import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleLogin} className={classes.root}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/forgot-password">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/register">Don't have an account? Register</Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;