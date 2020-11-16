import React, {useMemo, useState} from 'react';
import * as fns from 'date-fns';
import useInterval from 'use-interval';
import {examples} from './examples';
import {formats} from "./formats";
import FormatGroup from "./FormatGroup";
import {FormatExample} from "./FormatExample";

export default function App() {
    const [format, setFormat] = useState('hh:mm:ss b dd/LL/yyyy O');
    const [date, setDate] = useState(new Date());

    useInterval(() => setDate(new Date()), 1000 / 15);

    const formatted = useMemo(() => {
        try {
            return fns.format(date, format);
        } catch (e) {
            return '';
        }
    }, [format, date]);

    return (
        <div className="mx-auto container flex flex-col">
            {/* Header */}
            <h1 className="mb-4 text-center text-5xl text-purple-400 font-black">
                date-dns interactive format builder
            </h1>

            {/* Top border hack */}
            <div className="border-b-4 border-purple-800"/>

            {/* Sticky part */}
            <div className="sticky top-0 p-8 border-4 border-t-0 border-purple-800 bg-gray-900 z-10 shadow-lg rounded-b-lg">
                {/* Formatted */}
                <h2 className="text-2xl text-purple-500 font-bold select-none cursor-pointer">
                    Now
                </h2>
                <div className="px-3 py-1 mb-4 text-center text-3xl text-purple-400 font-medium border-b-2 border-purple-900">
                    {formatted}
                </div>

                {/* Manual input */}
                <h2 className="my-4 text-2xl text-purple-500 font-bold select-none cursor-pointer">
                    Format
                </h2>
                <input
                    className="px-5 py-2 w-full bg-purple-800 text-purple-200 text-center text-2xl font-mono border border-purple-900 rounded-full shadow-md"
                    type="text"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                />
            </div>

            {/* Documentation */}
            <div className="pt-8 px-8">
                {/* Examples */}
                <h2 className="text-2xl text-purple-500 font-bold select-none cursor-pointer">
                    Examples
                </h2>
                <div className="mb-4 w-full grid grid-cols-2 gap-4">
                    {examples.map((example) => (
                        <FormatExample date={date} format={example} onClick={setFormat}/>
                    ))}
                </div>

                {/* Format groups */}
                {Object.entries(formats).map(([id, details]) =>
                    <FormatGroup
                        key={id}
                        date={date}
                        group={details}
                        onClick={(f) => setFormat(format + ' ' + f.format)}
                    />
                )}
            </div>
        </div>
    );
}
