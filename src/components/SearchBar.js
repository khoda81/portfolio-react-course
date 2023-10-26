import { Box, List, ListItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function SearchBar(props) {
    // Sample list of items
    const items = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "PHP", "Go", "TypeScript", "Rust"];

    const [matches, setMatches] = useState(items);

    return (
        <Box sx={{ pl: 4 }}>
            <TextField
                label="Query"
                variant="outlined"
                onChange={(e) => {
                    const query = e.target.value.toLowerCase();
                    const matchedItems = items.filter((item) => item.toLowerCase().includes(query));
                    setMatches(matchedItems);
                }}
            />
            <Typography variant="h5">Matches</Typography>
            <List>
                {matches.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>
        </Box>
    );
}
