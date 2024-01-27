import React, {useEffect} from "react"
import "preline/preline";
import { IStaticMethods } from "preline/preline";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

export default function Navbar(props: {appName: string}) {

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, []);

    return (
        <>
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
                <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
                            <span className={"flex gap-1 items-center"}>
                                <img className="h-10" src="https://static.vecteezy.com/system/resources/previews/020/612/722/original/one-single-line-drawing-of-fresh-organic-salad-logo-illustration-graphic-healthy-vegan-food-cafe-menu-and-restaurant-badge-concept-modern-continuous-line-draw-design-street-food-logotype-vector.jpg" alt="Logo" />
                                <p className={"text-gray-800"}>{props.appName}</p>
                            </span>
                        </a>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                            <a className="font-medium text-gray-500 md:py-6 dark:text-blue-500" href="/" aria-current="page">Salads</a>
                            <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/ingredients">Ingredients</a>
                            <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/orders">Orders</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}