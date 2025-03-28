import {createContext, useContext} from "react";
import FileContextType from "../interface/FileContextType";

// Create context
const FileContext = createContext<FileContextType | undefined>(undefined);

// Custom hook to use the file context
export const useFileContext = () => {
    const context = useContext(FileContext);
    if (!context) {
        throw new Error('useFileContext must be used within a FileProvider');
    }
    return context;
};

export default FileContext;