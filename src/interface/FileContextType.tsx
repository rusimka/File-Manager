import File from "./File";
import file from "./File";

interface FileContextType {
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
    selectedFiles: File[];
    toggleSelectFile: (file: File) => void;
    selectAllFiles: () => void;
    seeSelectedFile: (file: File) => void;
    filteredFiles: File[];
    searchItem: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isGridView: boolean,
    setIsGridView: React.Dispatch<React.SetStateAction<boolean>>;
}
export default FileContextType;