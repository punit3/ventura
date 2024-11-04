'use client'
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Button from "../components/Button";
import { Avatar } from "flowbite-react";
import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import { AboutCompany } from "../components/AboutCompany";

const CompanyDetail = ({ data }: any) => {
    const router = typeof window !== "undefined" ? useRouter() : null;


    const handleBack = () => {
        if (router) {
            router.back();
        }
    };

    const breadcrumbItems = [
        { label: "home", href: "" },
        { label: "market watch", href: "" },

    ];

    return (
        <div className="p-8">
            {/* <div className="p-8"> */}
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex justify-between mb-6">


                <div className="flex gap-6 items-center">
                    <div className="flex border border-gray-300 rounded-md items-center p-3 pointer shadow-xs transition-shadow duration-200">
                        <IoIosArrowBack size={20} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Avatar img={'/assets/img3.jpg'} alt="logo" rounded size="md" />
                        <div>
                            <div className="text-lg">
                                {"Tech Innovations Ltd"}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {"Tech Innovations Group Ltd"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="w-10 h-10">
                        <HiOutlineDocumentArrowDown size={40} />
                    </div>
                    <div className="hidden md:block">
                        <Button onClick={handleBack} className="rounded-xl bg-[#2d2d79] ">Apply now</Button>
                    </div>
                </div>

            </div>
            <div className="px-3 py-3 border-gray-200 border rounded-md mb-6">
                <h2 className="text-lg mb-4">
                    IPO details
                </h2>
                <div className="px-3 py-3 border-gray-200 border rounded-md">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 items-center">
                            <div>

                                <div className="text-gray-400 text-sm">
                                    Issue size

                                </div>
                                <div>
                                    $3,600-3,700 Cr.
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Price range

                            </div>
                            <div>
                                ₹200 - 300
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Minimum amount

                            </div>
                            <div>
                                ₹50,000
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Lot size

                            </div>
                            <div>
                                150 shares/lots
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Issue dates

                            </div>
                            <div>
                                12 Dec- 15 Dec 22
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Listed on

                            </div>
                            <div>
                                15 Dec 22
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Listed price

                            </div>
                            <div>
                                ₹150
                            </div>
                        </div></div>
                        <div className="flex-1 min-w-[45%] lg:min-w-[20%] px-3 py-3 ">                        <div>

                            <div className="text-gray-400 text-sm">
                                Listing gains

                            </div>
                            <div>
                                ₹10<span className="text-red-500">(10.0%)</span>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-6 py-3 border-gray-200 border rounded-md mb-6">
                <h2 className="text-lg mb-4">
                    IPO timeline
                </h2>




                {/* </ol> */}

                <div className="block md:hidden">


                    <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Personal Info</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Account Info</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Review</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                            <h3 className="font-medium leading-tight">Confirmation</h3>
                            <p className="text-sm">Step details here</p>
                        </li>
                    </ol>

                </div>



                <div className="hidden md:block">
                    <ol className="flex items-center w-full">
                        <li className="flex w-full items-center text-green-200 dark:text-green-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block dark:after:border-green-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-green-800 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li className="flex items-center w-full">
                            <span className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-green-800 lg:w-4 lg:h-4 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                    </ol>
                    {/* <ol> */}
                    <div className="">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 items-center">
                                <div>


                                    <div>
                                        Bidding starts
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        12th Dec 2023

                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 ">                        <div>

                                <div>
                                    Bidding ends
                                </div>
                                <div className="text-gray-400 text-xs">
                                    12th Dec 2023

                                </div>
                            </div></div>
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 ">                        <div>

                                <div>
                                    Allotment finalization
                                </div>
                                <div className="text-gray-400 text-xs">
                                    12th Dec 2023

                                </div>
                            </div></div>
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 ">                        <div>

                                <div>
                                    Refund initiation
                                </div>
                                <div className="text-gray-400 text-xs">
                                    12th Dec 2023

                                </div>
                            </div></div>
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 ">                        <div>

                                <div>
                                    Demat transfer
                                </div>
                                <div className="text-gray-400 text-xs">
                                    12th Dec 2023

                                </div>
                            </div>

                            </div>
                            <div className="flex-1 min-w-[20%] lg:min-w-[10%] px-3 py-3 ">                        <div>

                                <div>
                                    Listing Date
                                </div>
                                <div className="text-gray-400 text-xs">
                                    12th Dec 2023

                                </div>
                            </div>
                            </div>

                            {/* </div> */}
                        </div>

                    </div>
                </div>


            </div >
            <div>

            </div>
            <div className="px-3 py-3 border-gray-200 border rounded-md">
                <AboutCompany />
            </div>

            {/* </div> */}
        </div>
    );
};

export default CompanyDetail
