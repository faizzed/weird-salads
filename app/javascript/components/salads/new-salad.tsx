import React, {useEffect} from 'react'
import Select, {SelectOption} from "../common/select";
import Ingredient from "../../models/Ingredient";

export default function NewSalad(props: {
    ingredients: Ingredient[]
}) {
    useEffect(() => {

    }, []);

    // todo: pull async
    let selectOptions = props.ingredients.map((ingredient) => {
        return {
            id: ingredient.id.toString(),
            value: ingredient.name
        } as SelectOption
    });


    return (
        <>
            <button data-hs-overlay="#new-salad" type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"/><path d="m9 11 1 9"/><path d="M4.5 15.5h15"/><path d="m15 11-1 9"/></svg>
                New Salad
            </button>

            <div id="new-salad" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-[50%] w-full w-full z-[80] bg-white border-s dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        Create new Salad!
                    </h3>
                    <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#new-salad">
                        <span className="sr-only">Close modal</span>
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <div className="p-4">
                    <form className={"flex flex-col gap-2"}>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Salad Name:</label>
                            <input type="email" id="inline-input-label-with-helper-text" style={{marginLeft: 0}} className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Salad name.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Items:</label>

                        <div className="flex flex-row sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                            <Select placeholder={"Select ingredient.."} options={selectOptions} />
                            <input type="number" id="inline-input-label-with-helper-text" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="qty.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-row sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                            <Select placeholder={"Select ingredient.."} options={selectOptions} />
                            <input type="number" id="inline-input-label-with-helper-text" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="qty.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-row sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                            <Select placeholder={"Select ingredient.."} options={selectOptions} />
                            <input type="number" id="inline-input-label-with-helper-text" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="qty.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-row sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                            <Select placeholder={"Select ingredient.."} options={selectOptions} />
                            <input type="number" id="inline-input-label-with-helper-text" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="qty.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex flex-row sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
                            <Select placeholder={"Select ingredient.."} options={selectOptions} />
                            <input type="number" id="inline-input-label-with-helper-text" className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="qty.." aria-describedby="hs-inline-input-helper-text"/>
                        </div>

                        <div className="flex justify-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}