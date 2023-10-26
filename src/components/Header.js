import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const HeaderContainer = styled(AppBar)`
    background-color: #333;
`;

const HeaderTitle = styled(Typography)`
    flex-grow: 1;
`;

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

const HeaderButton = styled(Button)`
    color: inherit;
`;

const Header = ({ links }) => {
    return (
        <div>
            <HeaderContainer position="static" sx={{ mb: 4 }}>
                <Container>
                    <Toolbar>
                        <HeaderTitle variant="h6">
                            <HeaderLink to="/">My App</HeaderLink>
                        </HeaderTitle>
                        {links.map((link) => (
                            <HeaderButton key={link.to}>
                                <HeaderLink to={link.to}>{link.text}</HeaderLink>
                            </HeaderButton>
                        ))}
                    </Toolbar>
                </Container>
            </HeaderContainer>
        </div>
    );
};

export default Header;
