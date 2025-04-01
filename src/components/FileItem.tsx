
import FileItemProps from "../interface/FileItemProps";
import File from "../interface/File";
import {Card, CardContent, Checkbox, Typography} from "@mui/material";
import {FaFileAlt, FaFolder,} from "react-icons/fa";
import {useFileContext} from "../contex/FileContext";
import "../style/FileItem.css";



const FolderIcon = FaFolder as React.FC<{ className?: string }>;
const FileIcon = FaFileAlt as React.FC<{ className?: string }>;

const FileItem: React.FC<{ file: File }> = ({ file }) => {
    const { selectedFiles, toggleSelectFile, seeSelectedFile } = useFileContext();
    const isSelected = selectedFiles.some(selectedFile => selectedFile.id === file.id);
    console.log("File Item: " + isSelected)
    console.log("file item: " + selectedFiles);
    return (
        <Card
            className={`file-item ${isSelected ? "selected" : ""}`}
            onClick={() => toggleSelectFile(file)}
        >
            <Checkbox checked={isSelected} onChange={() => seeSelectedFile(file)} />
            {file.type === "folder" ? <FolderIcon className="file-icon folder-icon" /> : <FileIcon className="file-icon file-icon" />}
            <CardContent>
                <Typography>{file.name}</Typography>
            </CardContent>
        </Card>
    );
};

export default FileItem;