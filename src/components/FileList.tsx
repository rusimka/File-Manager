// FileList.tsx
import React from 'react';
import FileItem from './FileItem';
import { Grid } from '@mui/material';
import { useFileContext } from '../contex/FileContext';
import "../style/FileItem.css";

const FileList: React.FC = () => {
    const { files, filteredFiles,isGridView } = useFileContext();

    return (
        <>
            <div className={`file-list-container ${isGridView ? "grid-view" : "list-view"}`}>
                {filteredFiles.length > 0 ? (
                    filteredFiles.map((file) => (
                        <div key={file.id} className="file-list-item">
                            <FileItem file={file} />
                        </div>
                    ))
                ) : (
                    <p>No files found</p> // Show message when no results match
                )}
            </div>
        </>
    );
};

export default FileList;
