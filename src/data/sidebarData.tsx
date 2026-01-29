import type {sideBarDetails} from "../types/sideBar"


import { FiUsers } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineSavings } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";

import {
  FaBuilding,
  FaPiggyBank,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaServicestack,
  FaUserCog,
  FaDollarSign,
  FaChartBar,
} from "react-icons/fa";

import {
  FaSlidersH,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export const customers: sideBarDetails[] = [
  { title: "Users", icon: FiUsers, path: "/users" },
  { title: "Guarantors", icon: IoIosPeople, path: "/guarantors" },
  { title: "Loans", icon: TbMoneybag, path: "/loans" },
  { title: "Decision Models", icon: FaRegHandshake, path: "/decision-models" },
  { title: "Savings", icon: MdOutlineSavings, path: "/savings" },
  { title: "Loan Requests", icon: FaHandHoldingUsd, path: "/loan-requests" },
  { title: "Whitelist", icon: FaUserCheck, path: "/whitelist" },
  { title: "Karma", icon: FaUserTimes, path: "/karma" },
];

export const Businesses: sideBarDetails[] = [
  { title: "Organization", icon: FaBuilding, path: "/organization" },
  { title: "Loan Products", icon: FaHandHoldingUsd, path: "/loan-products" },
  { title: "Savings Product", icon: FaPiggyBank, path: "/savings-product" },
  { title: "Fees and Charges", icon: FaMoneyBillWave, path: "/fees-and-charges" },
  { title: "Transactions", icon: FaExchangeAlt, path: "/transactions" },
  { title: "Services", icon: FaServicestack, path: "/services" },
  { title: "Service Account", icon: FaUserCog, path: "/service-account" },
  { title: "Settlements", icon: FaDollarSign, path: "/settlements" },
  { title: "Reports", icon: FaChartBar, path: "/reports" },
];

export const settings: sideBarDetails[] = [
  { title: "Preferences", icon: FaSlidersH, path: "/preferences" },
  { title: "Fees and Pricing", icon: FaMoneyCheckAlt, path: "/fees-and-pricing" },
  { title: "Audit Logs", icon: FaFileAlt, path: "/audit-logs" },
  { title: "Systems Messages", icon: FaEnvelopeOpenText, path: "/systems-messages" },
];