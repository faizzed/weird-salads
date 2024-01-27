import React from "react"
import Salad from "../../models/salad";
import NewSalad from "./new-salad";
import SaladsTable from "./salads-table";

interface HomeProps {
    salads: any[],
}

export default function Home(props: HomeProps) {
    let salads = props.salads.map((salad) => {
        return Salad.fromJson(salad)
    });

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex justify-end"}>
                <NewSalad />
            </div>
            <div>
                <SaladsTable
                    headers={["Name", "Price", "Action"]}
                    salads={salads}
                />
            </div>
        </div>
    )
}
