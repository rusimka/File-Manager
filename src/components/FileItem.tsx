
import FileItemProps from "../interface/FileItemProps";
// @ts-ignore
import File from "../interface/File";
import {Card, CardContent, Icon, Typography} from "@mui/material";

const FileItem: React.FC<FileItemProps> = ({ file }) => {
    return (
        <Card sx={{ width: 150, height: 150, margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {file.type === 'folder' ? (
                    <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
                ) : (
                    <Icon sx={{ fontSize: 40, color: 'secondary.main' }} />
                )}
                <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
                    {file.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FileItem;