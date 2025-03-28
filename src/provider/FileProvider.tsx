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

    return (
        <FileContext.Provider value={{files, setFiles}}>
            {children}
        </FileContext.Provider>
    );
}

export default FileProvider;