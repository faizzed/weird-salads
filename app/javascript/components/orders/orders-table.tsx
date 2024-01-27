import React from "react"
import Order from "../../models/order";

type TableProps = {
    orders: Order[]
    headers: string[]
}

export default function OrdersTable(props: TableProps) {
    return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                            <div className="py-3 px-4">
                                <div className="relative max-w-xs text-gray-500">
                                    Orders
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        {
                                            props.headers.map((header, index) => {
                                                return (
                                                    <th key={index} scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{header}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {
                                        props.orders.map((order, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{order.salad.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{order.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}