import React from "react"
import Order from "../../models/order";
import OrdersTable from "./orders-table";

interface OrderProps {
    orders: any[]
}

export default function Home(props: OrderProps) {
    let orders = props.orders.map((salad) => {
        return Order.fromJson(salad)
    });

    return (
        <div className={"flex flex-col gap-2"}>
            <div>
                <OrdersTable
                    headers={["Salad", "Ingredients", "Price ($)", "Order Date"]}
                    orders={orders}
                />
            </div>
        </div>
    )
}
