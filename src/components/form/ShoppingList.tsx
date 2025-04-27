'use client';

import {MealPlan} from "@/types/types";
import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";

export default function ShoppingList({mealPlan}: { mealPlan: MealPlan }) {

    return (<div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Product</TableHeadCell>
                            <TableHeadCell>Quantity</TableHeadCell>
                            <TableHeadCell>Price</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {mealPlan.shopping_list.map((item) => (
                            <TableRow key={item.name}
                                      className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                </TableCell>
                                <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {item.quantity}
                                </TableCell>
                                <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    £{item.price.amount.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Total
                            </TableCell>
                            <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                -
                            </TableCell>
                            <TableCell className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                £{mealPlan.shopping_list.reduce((acc, item) => acc + item.price.amount, 0).toFixed(2)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};