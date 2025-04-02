import { useState } from "react";
import FileContext from "../contex/FileContext";
import File from "../interface/File";
import FileProviderProps from "../interface/FileProviderProps";

// FileProvider component
export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
    const [files, setFiles] = useState<File[]>([
        {id: '1', name: 'Documents', type: 'folder'},
        {id: '2', name: 'Image.png', type: 'file'},
        {id: '3', name: 'Videos', type: 'folder'},
        {id: '4', name: 'Audio.mp3', type: 'file'},
    ]);

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const toggleSelectFile = (file: File) => {
        setSelectedFiles((prevSelected) =>
            prevSelected.some((selectedFile) => selectedFile.id === file.id)
                ? prevSelected.filter((selectedFile) => selectedFile.id !== file.id) // Deselect
                : [...prevSelected, file] // Select
        );
    };

    const selectAllFiles = () => {
        setSelectedFiles(selectedFiles.length === files.length ? [] : [...files]);
    };


    const seeSelectedFile = (file: File) => {
        console.log("The file that we selected: " +file);
    }

    return (
        <FileContext.Provider value={{files, setFiles, selectedFiles, toggleSelectFile, selectAllFiles, seeSelectedFile}}>
            {children}
        </FileContext.Provider>
    );
}

export default FileProvider;