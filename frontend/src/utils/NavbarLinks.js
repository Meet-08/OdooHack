import { Home, CircleAlert, FileText, User, MoreHorizontal, Search } from "lucide-react";

const menuItems = [
    { name: "Home", icon: Home, url: "/" },
    { name: "Explore", icon: Search, url: "/initiative" },
    { name: "Schemes", icon: CircleAlert, url: "/schemes" },
    { name: "Issues", icon: FileText, url: "/issues" },
    // { name: "Settings", icon: User, color: "text-black", url: "/settings" },
    // { name: "More", icon: MoreHorizontal, color: "text-black", url: "/more" },
];

export default menuItems;
