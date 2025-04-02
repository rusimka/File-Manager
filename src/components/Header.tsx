import React, { useState } from "react";
import {useFileContext} from "../contex/FileContext";
import { TextField, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
    const { files, selectedFiles, selectAllFiles } = useFileContext();
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding={2}>
            {/* Search Bar */}
            <TextField
                label="Search Files"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* Select All Checkbox */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={selectedFiles.length === files.length && files.length > 0}
                        onChange={selectAllFiles}
                    />
                }
                label="Select All"
            />

            {/* Selected File Count */}
            <Typography variant="body1">
                {selectedFiles.length} selected
            </Typography>
        </Box>
    );
};

export default Header;
