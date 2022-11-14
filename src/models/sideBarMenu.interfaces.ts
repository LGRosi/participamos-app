import { IconType } from 'react-icons';

export interface SideBarMenuItem {
    id: number;
    label: string;
    icon: IconType;
    path: string;
}

export interface SideBarMenuCard {
    id: number;
    displayName: string;
    photoUrl: string;
    title: string;
    path: string;
}