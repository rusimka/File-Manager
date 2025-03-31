// App.tsx
import React from 'react';
import { FileProvider } from './provider/FileProvider';
import FileList from './components/FileList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
      <FileProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">File Browser</Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: 4 }}>
          <FileList />
        </Container>
      </FileProvider>
  );
};

export default App;
