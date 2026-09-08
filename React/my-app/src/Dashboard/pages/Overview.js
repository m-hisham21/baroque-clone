import React from "react";
import StatisticsCards from "../components/StatisticsCards";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import RecentOrders from "../components/RecentOrders";
import RecentProducts from "../components/RecentProducts";
import RecentActivity from "../components/RecentActivity";

function Overview() {
  return (
    <div>
      <div className="bq-page-head">
        <div>
          <div className="bq-page-title">Overview</div>
          <div className="bq-page-sub">Live snapshot of your BAROQUE store, pulled directly from MongoDB.</div>
        </div>
      </div>

      <StatisticsCards />

      <div className="bq-row-2">
        <SalesChart />
        <CategoryChart />
      </div>

      <div className="bq-row-2">
        <RecentOrders />
        <RecentProducts />
      </div>

      <RecentActivity />
    </div>
  );
}

export default Overview;
