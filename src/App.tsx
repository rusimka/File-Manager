// App.tsx
import React from 'react';
import { FileProvider } from './provider/FileProvider';
import FileList from './components/FileList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Header from './components/Header';

const App: React.FC = () => {
  return (
      <FileProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">File Browser</Typography>
          </Toolbar>
        </AppBar>

          {/* Header with Search and File Selection */}
          <Container sx={{ marginTop: 2 }}>
              <Header />
          </Container>

          {/* File List Display */}
          <Container sx={{ marginTop: 4 }}>
              <FileList />
            </Container>
      </FileProvider>
  );
};

export default App;
