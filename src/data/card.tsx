import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdSavings } from "react-icons/md";
import type { UserCard } from "../types/card";

export const cardDetails: UserCard[] = [
  {
    amount: 2453,
    title: "User",
    icon: FaUserFriends,
    bgColor: "#eeb6f7",
    iconColor: "#df18ff", 
  },
  {
    amount: 2453,
    title: "Active users",
    icon: FaUsers,
    bgColor: "#c5b4f4",
    iconColor: "#5718ff", 
  },
  {
    amount: 2453,
    title: "USER WITH LOANS",
    icon: IoDocumentText,
    bgColor: "#f6bbb1",
    iconColor: "#f55f44", 
  },
  {
    amount: 102453,
    title: "USER WITH SAVING",
    icon: MdSavings,
    bgColor: "#fcc6d4",
    iconColor: "#ff3366", 
  },
];