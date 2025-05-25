import { LayoutGrid, ArrowUpDown, CalendarDays, SquarePlus, ChartLine, MessageCircleMore, Phone } from 'lucide-react';
import { FaSquarePlus, FaCalendarDays } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import { FaPhoneAlt } from 'react-icons/fa';

export const navigation = [
    {
        id: 1,
        group: "General",
        items: [
            {
                id: 1, 
                label: "Dashboard", 
                icon: <LayoutGrid style={{fill: "#000849"}} />, 
            },
            { 
                id: 2,
                label: "History", 
                icon: <ArrowUpDown />, 
            },
            { 
                id: 3,
                label: "Calendar", 
                icon: <FaCalendarDays />, 
            },
            { 
                id: 4,
                label: "Appointments", 
                icon: <FaSquarePlus style={{color: "#cfd6dd"}} />, 
            },
            { 
                id: 5,
                label: "Statistics", 
                icon: <ChartLine />, 
            },
        ],
    },
    {
        id: 2,
        group: "Tools",
        items: [
            { 
                id: 1,
                label: "Chat", 
                icon: <BsChatDotsFill style={{color: "#cfd6dd"}} />, 
            },
            { 
                id: 2,
                label: "Support", 
                icon: <FaPhoneAlt style={{color: "#989fa8", height: "16px"}} />, 
            },
        ],
    },
]