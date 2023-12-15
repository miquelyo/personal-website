import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import './App.css';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Setelah komponen dimuat, atur isLoaded menjadi true untuk memunculkan efek
        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
    }, []);

    return (
        <div className={`App ${isLoaded ? 'loaded' : ''}`}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">My React App</Typography>
                </Toolbar>
            </AppBar>

            <Container className={`content ${isLoaded ? 'loaded' : ''}`}>
                <Typography variant="h4" className="mt-4 mb-4">Modern UI Example</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>John Doe</TableCell>
                                <TableCell>john.doe@example.com</TableCell>
                                <TableCell>(555) 123-4567</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Jane Smith</TableCell>
                                <TableCell>jane.smith@example.com</TableCell>
                                <TableCell>(555) 987-6543</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default App;
