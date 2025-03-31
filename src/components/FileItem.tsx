
import FileItemProps from "../interface/FileItemProps";
// @ts-ignore
import File from "../interface/File";
import {Card, CardContent, Typography} from "@mui/material";
import {FaFileAlt, FaFolder,} from "react-icons/fa";


const FolderIcon = FaFolder as React.FC<{ size?: number }>;
const FileIcon = FaFileAlt as React.FC<{ size?: number }>;

const FileItem: React.FC<FileItemProps> = ({ file }) => {
    return (
        <Card sx={{ width: 150, height: 150, margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {file.type === "folder" ? <FolderIcon size={24} /> : <FileIcon size={24} />}
                <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
                    {file.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FileItem;