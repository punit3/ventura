import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import { TableComponent } from "./components/Table";
import { companyData } from "./data/company.data";
import { PaginationComponent } from "./components/Pagination";


interface CompanyData {
  company_name: string;
  issue_size: string;
  price_range: string;
  // min_invest_qty: string; 
  min_invest: number
  lot_size: number,
  issue_dates: string,
  listed_on: string,
  listed_price: string,
  listing_gain: string,
  image: string
}

// Ensure companyData matches the expected type
const headers: string[] = ["Company Name", "Issue Size", "Price Range", "Min Invest/Qty"];

export default function Home() {
  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">Market Data</h1>

      <TableComponent
        data={companyData as CompanyData[]}
        headers={headers}
        linkPath="/company-detail"
        dateInfo="4th-7th Oct 2024"
        quantityInfo="100 Shares / 5 Lots"
      />
      <PaginationComponent />
    </div>
  );
}
