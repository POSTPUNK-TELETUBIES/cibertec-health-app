import { MouseEvent, PropsWithChildren, ReactNode } from 'react';
export interface NavbarProps {
    homeHref: string;
    askAppointmentHref: string;
    seeYourAppointmentsHref: string;
    techHref: string;
    servicesHref: string;
    actionButtons?: ReactNode;
}
export interface WithMenuProps extends PropsWithChildren {
    buttonChildren: ReactNode;
}
export type UseControlMenuResponse = [
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void,
    handleClose: () => void
] & {
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    handleClose: () => void;
};
export declare const Navbar: ({ homeHref, askAppointmentHref, seeYourAppointmentsHref, servicesHref, techHref, actionButtons }: NavbarProps) => import("react/jsx-runtime").JSX.Element;
