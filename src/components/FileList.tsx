// FileList.tsx
import React from 'react';
import FileItem from './FileItem';
import { Grid } from '@mui/material';
import { useFileContext } from '../contex/FileContext';

const FileList: React.FC = () => {
    const { files } = useFileContext();

    return (
        <Grid container spacing={2}>
            {files.map((file) => (
                <Grid>
                    {/*item key={file.id}*/}
                    <FileItem file={file} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FileList;
