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
  { title: "Users", icon: FiUsers },
  { title: "Guarantors", icon: IoIosPeople },
  { title: "Loans", icon: TbMoneybag },
  { title: "Decision Models", icon: FaRegHandshake },
  { title: "Savings", icon: MdOutlineSavings },
  { title: "Loan Requests", icon: FaHandHoldingUsd },
  { title: "Whitelist", icon: FaUserCheck },
  { title: "Karma", icon: FaUserTimes },
];

 export const Businesses: sideBarDetails[] = [
  { title: "Organization", icon: FaBuilding },
  { title: "Loan Products", icon: FaHandHoldingUsd },
  { title: "Savings Product", icon: FaPiggyBank },
  { title: "Fees and Charges", icon: FaMoneyBillWave },
  { title: "Transactions", icon: FaExchangeAlt },
  { title: "Services", icon: FaServicestack },
  { title: "Service Account", icon: FaUserCog },
  { title: "Settlements", icon: FaDollarSign },
  { title: "Reports", icon: FaChartBar },
];

export const settings: sideBarDetails[] = [
  { title: "Preferences", icon: FaSlidersH },

  { title: "Fees and Pricing", icon: FaMoneyCheckAlt },
  { title: "Audit Logs", icon: FaFileAlt },
  { title: "Systems Messages", icon: FaEnvelopeOpenText },
];
