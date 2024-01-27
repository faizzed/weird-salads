import React from "react";

export default function Footer(props: {
    appName: string
}) {
    return (
        <>
            <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                    <div>
                        <a className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
                            <span className={"flex gap-1 items-center"}>
                                <img className="h-10" src="https://static.vecteezy.com/system/resources/previews/020/612/722/original/one-single-line-drawing-of-fresh-organic-salad-logo-illustration-graphic-healthy-vegan-food-cafe-menu-and-restaurant-badge-concept-modern-continuous-line-draw-design-street-food-logotype-vector.jpg" alt="Logo" />
                            </span>
                        </a>
                    </div>

                    <ul className="text-center text-gray-400">
                        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                            © Copyright 2024 {props.appName}
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}