import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { Avatar } from "primereact/avatar";
import profile from "./profile.png";

const Sidebar = () => {
  return (
    <CDBSidebar
      backgroundColor="#050440"
      style={{ margin: 0, padding: 0, height: "100%" }}
    >
      <CDBSidebarHeader >
        <i
          className="pi pi-spin pi-cog"
          style={{ fontSize: "2rem", margin: "0px" }}
        ></i>
        Dashboard
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu style={{ margin: "2px" }}>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Product</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Customers
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Income
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Promote
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            help
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "2px 5px",
            backgroundColor: "#2E2D69",
            margin: "15px 5px 30px 5px",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          {/* <img
            src={profile}
            alt="Avatar"
            style={{
   
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              position: "absolute",
              left: "2em",
            }}
          /> */}
          Evano
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
