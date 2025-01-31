import { Home, Hash, FileText, User, MoreHorizontal, Settings } from "lucide-react";

const menuItems = [
    { name: "Home", icon: Home, color: "text-blue-500", url: "/" },
    { name: "Explore", icon: Hash, color: "text-black", url: "/explore" },
    { name: "Schemes", icon: FileText, color: "text-black", url: "/schemes" },
    { name: "Issues", icon: FileText, color: "text-black", url: "/issues" },
    // { name: "Community", icon: FileText, color: "text-black", url: "/community" },
    { name: "Settings", icon: User, color: "text-black", url: "/settings" },
    { name: "More", icon: MoreHorizontal, color: "text-black", url: "/more" },
];

export default menuItems;
