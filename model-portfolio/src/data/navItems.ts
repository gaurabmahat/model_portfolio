export interface NavItem {
    label: string;
    href: string;
    type: "scroll" | "route";
}

export const navItems: NavItem[] = [
    {label: "nav.home", href: "home", type: "scroll"},
    {label: "nav.photos", href: "photos", type: "scroll"},
    {label: "nav.about", href: "about", type: "scroll"},
    {label: "nav.contact", href: "contact", type: "scroll"},
    {label: "nav.gallery", href: "/gallery", type: "route"},
]