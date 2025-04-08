import React, { useState } from "react";
import {useFileContext} from "../contex/FileContext";
import {TextField, Checkbox, FormControlLabel, Typography, Box, Button, Grid} from "@mui/material";
import ViewList from "@mui/icons-material";
import {IconBase} from "react-icons";

const Header: React.FC = () => {
    const { files, selectedFiles, selectAllFiles, searchItem,handleSearch,filteredFiles,isGridView,setIsGridView } = useFileContext();



    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding={2}>
            {/* Search Bar */}
            <TextField
                label="Search Files"
                variant="outlined"
                size="small"
                value={searchItem}
                onChange={handleSearch}
            />

            {/* Select All Checkbox */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                        onChange={selectAllFiles}
                    />
                }
                label="Select All"
            />

            {/* Selected File Count */}
            <Typography variant="body1">
                {selectedFiles.length} selected
            </Typography>

            <Button
                variant={isGridView ? "contained" : "outlined"}
                onClick={() => setIsGridView(true)}
            >
                Grid
            </Button>

            <Button
                variant={!isGridView ? "contained" : "outlined"}
                onClick={() => setIsGridView(false)}
            >
                List
            </Button>
        </Box>
    );
};

export default Header;
