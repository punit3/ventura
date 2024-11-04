"use client";

import { Avatar, Table } from "flowbite-react";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type TableData = {
    [key: string]: React.ReactNode;
    company_name: React.ReactNode;
    issue_size: string;
    price_range: string;
    min_invest: string;
    image?: string;
};

type TableComponentProps = {
    data: TableData[];
    headers: string[];
    linkPath: string;
    dateInfo?: string;
    quantityInfo?: string;
};

export function TableComponent({ data, headers, linkPath, dateInfo = '4th-7th Oct 2024', quantityInfo = '100 Shares/5 lots' }: TableComponentProps) {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    {headers.map((header, index) => (
                        <Table.HeadCell key={index}>{header}</Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body className="divide-y">
                    {data.map((row, rowIndex) => (
                        <Table.Row key={rowIndex} className="bg-white pointer dark:border-gray-700 dark:bg-gray-800">
                            <Link href={linkPath}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <div className="flex items-center space-x-2">
                                        <Avatar img={row.image as string} alt="logo" rounded size="md" />
                                        <div>
                                            <div className="text-lg">
                                                {row.company_name}
                                            </div>
                                            <div className="text-gray-400 text-sm">
                                                {dateInfo}
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                            </Link>
                            <Table.Cell className="text-lg text-black">₹{row.issue_size} Crores</Table.Cell>
                            <Table.Cell className="text-lg text-black">₹{row.price_range}</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center space-x-2 flex-col">
                                    <div className="text-lg text-black">
                                        ₹{row.min_invest}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {quantityInfo}
                                    </div>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
