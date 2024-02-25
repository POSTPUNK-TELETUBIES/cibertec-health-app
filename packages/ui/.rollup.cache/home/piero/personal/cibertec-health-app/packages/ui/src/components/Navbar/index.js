import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { MainLogo } from '../MainLogo';
import { useState } from 'react';
const useControlMenu = (setAnchorEl) => {
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(undefined);
    };
    const result = [handleClick, handleClose];
    Object.assign(result, {
        handleClick,
        handleClose
    });
    return result;
};
const WithMenu = ({ buttonChildren, children }) => {
    const [anchorEl, setAnchorEl] = useState();
    const open = !!anchorEl;
    const [handleClick, handleClose] = useControlMenu(setAnchorEl);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick, children: buttonChildren }), _jsx(Menu, { disableScrollLock: true, anchorEl: anchorEl, open: open, onClose: handleClose, keepMounted: true, children: children })] }));
};
export const Navbar = ({ homeHref, askAppointmentHref, seeYourAppointmentsHref, servicesHref, techHref, actionButtons }) => {
    return (_jsx(AppBar, { position: 'sticky', children: _jsxs(Toolbar, { sx: { padding: '1rem', backgroundColor: 'white' }, children: [_jsxs(Typography, { children: ["Hai", _jsx(Typography, { component: 'strong', children: "Doc" })] }), _jsx(MainLogo, {}), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } }, justifyContent: 'space-around', children: [_jsx(Button, { href: homeHref, children: "Inicio" }), _jsxs(WithMenu, { buttonChildren: 'Citas', children: [_jsx(MenuItem, { href: askAppointmentHref, children: "Pide tu cita" }), _jsx(MenuItem, { href: seeYourAppointmentsHref, children: "Mis citas" })] }), _jsxs(WithMenu, { buttonChildren: 'Sobre HaiDoc', children: [_jsx(MenuItem, { href: servicesHref, children: "Tecnologia" }), _jsx(MenuItem, { href: techHref, children: "Servicios" })] })] }), actionButtons] }) }));
};
//# sourceMappingURL=index.js.map