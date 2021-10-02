import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { Grid3x3 } from '@mui/icons-material';
export default class Form extends Component {
  render() {
    return (
      <Grid container justifyContent="center">
        <Grid item md={10}>
          <Paper elevation={4} sx={{ p: 3, mt: 4 }}>
            <Typography variant="h4" color="initial" textAlign="center">
              Formulário
            </Typography>
            <form>
              <Grid container>
                <Grid item xs={2}>
                  <TextField id="" label="Nome" value="" fullWidth />
                  <TextField id="" label="" />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
