// FileList.tsx
import React from 'react';
import FileItem from './FileItem';
import { Grid } from '@mui/material';
import { useFileContext } from '../contex/FileContext';
import "../style/FileItem.css";

const FileList: React.FC = () => {
    const { files } = useFileContext();

    return (
        <div className="file-list">
            {files.map((file) => (
                <div key={file.id} className="file-list-item">
                    <FileItem file={file} />
                </div>
            ))}
        </div>
    );
};

export default FileList;
