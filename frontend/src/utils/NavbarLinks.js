import { Home, CircleAlert, FileText, User, MoreHorizontal, Search } from "lucide-react";

const menuItems = [
    { name: "Home", icon: Home, color: "text-blue-500", url: "/" },
    { name: "Explore", icon: Search, color: "text-black", url: "/initiative" },
    { name: "Schemes", icon: CircleAlert, color: "text-black", url: "/schemes" },
    { name: "Issues", icon: FileText, color: "text-black", url: "/issues" },
    // { name: "Settings", icon: User, color: "text-black", url: "/settings" },
    // { name: "More", icon: MoreHorizontal, color: "text-black", url: "/more" },
];

export default menuItems;
