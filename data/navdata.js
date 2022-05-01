import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AssessmentIcon from "@mui/icons-material/Assessment";

export const itemsList = (router) => [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    onClick: () => router.push("/"),
    path: "/",
  },
  {
    text: "Orders",
    icon: <LibraryBooksIcon />,
    onClick: () => router.push("#"),
    path: "#",
  },
  {
    text: "Products",
    icon: <CheckroomIcon />,
    onClick: () => router.push("#"),
    path: "#",
  },
  {
    text: "Marketing",
    icon: <CampaignIcon />,
    onClick: () => router.push("#"),
    path: "#",
  },
  {
    text: "Rates",
    icon: <StarBorderIcon />,
    onClick: () => router.push("#"),
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />,
    onClick: () => router.push("#"),
    path: "#",
  },
];

export const TSPData = [
  {
    name: "Tshirt Levis",
    price: "$ 49.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/61713568f9c32245eaa1889b_Group%20107-p-500.jpeg",
  },
  {
    name: "Long jeans jacket",
    price: "$ 129.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/609a9a0bedf5fc5bfce55bbe_1-p-500.jpeg",
  },
  {
    name: "Turks hat",
    price: "$ 20.99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/6141e900c93d18523e961945_Group%2026-p-500.jpeg",
  },
  {
    name: "Balenciaga sneakers",
    price: "$ 89,99",
    src: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/60743347c7c143082c0058a4_3-p-500.jpeg",
  },
];
