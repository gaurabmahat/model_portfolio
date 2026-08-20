export interface NavItem {
    label: string;
    href: string;
    type: "scroll" | "route";
}

export const navItems: NavItem[] = [
    {label: "Home", href: "home", type: "scroll"},
    {label: "Photos", href: "photos", type: "scroll"},
    {label: "About", href: "about", type: "scroll"},
    {label: "Contact", href: "contact", type: "scroll"},
    {label: "Gallery", href: "/gallery", type: "route"},
]