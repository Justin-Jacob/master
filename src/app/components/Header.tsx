'use client';

import { observer, useLocalObservable } from "mobx-react-lite";
import RiskStore from "../store/RiskStore";
import Link from "next/link";

export default observer(function Header() {
    const store = useLocalObservable(() => RiskStore);

    return (
        <div className="flex flex-row w-screen h-full bg-white justify-around">
            <div className="flex min-w-[50%] items-center px-10">
                <h1 className="text-2xl text-black">Climate Risk Rating</h1>
            </div>
            <div className="flex flex-grow flex-row items-center justify-around">
                <div className="flex min-w-[20%]">

                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                        value={store.decade}
                        onChange={(e) => store.setDecade(parseInt(e.target.value))}>
                        {
                            store.decades.map((decade) => (
                                <option key={decade} value={decade}>Decade - {decade}s</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/" className="text-xl text-black hover:text-gray-300 transition duration-300 ease-in-out">
                        Map
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/table" className="text-xl text-black hover:text-gray-300 transition duration-300 ease-in-out">
                        Table
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/chart" className="text-xl text-black hover:text-gray-300 transition duration-300 ease-in-out">
                        Line Graph
                    </Link>
                </div>

            </div>
        </div>
    )
})