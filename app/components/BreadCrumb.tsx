// components/Breadcrumb.tsx
import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-xs sm:text-sm mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="mx-1 sm:mx-2 text-[#9FA1A2] inline-block">
              &gt;
            </span>
          )}
          {index === items.length - 1 ? (
            <span className="text-black-small inline-block">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-[#9FA1A2] hover:underline inline-block"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
