import React from "react";
import Styles from "./Dashboard.module.css";
import DashView from "../../components/dashview/DashView";
import Sidebar from "../../components/sidebar/Sidebar";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className={Styles.root}>
        <Sidebar />
        <DashView />
      </div>
    </Layout>
  );
};

export default Dashboard;
