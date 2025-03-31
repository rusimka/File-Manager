import File from "./File";

interface FileContextType {
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}
export default FileContextType;