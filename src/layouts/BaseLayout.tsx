import { ReactNode } from "react";

import { LayoutHeader } from "@/widgets/LayoutHeader";

import { Layout } from "@/shared/ui";

// import { routes } from "@/shared/routing";

// const primaryNavItems = [
//   {
//     id: "boards",
//     title: "Boards",
//   },
//   {
//     id: "members",
//     title: "Members",
//   },
// ];

export const BaseLayout: ReactNode = <Layout headerSlot={<LayoutHeader></LayoutHeader>} />;
