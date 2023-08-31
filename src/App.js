import React, {useMemo, useState} from 'react';
import * as fns from 'date-fns';
import useInterval from 'use-interval';
import {FormatGroup} from "./components/FormatGroup";
import {examples} from './configs/examples';
import {formats} from "./configs/formats";
import {locale} from "./configs/locale";
import {FormatExample} from "./components/FormatExample";
import {Sticky} from "./components/Sticky";

export default function App() {
    const [format, setFormat] = useState('hh:mm:ss b dd/LL/yyyy O');
    const [date, setDate] = useState(new Date());

    useInterval(() => setDate(new Date()), 1000 / 30);

    const formatted = useMemo(() => {
        try {
            return fns.format(date, format, {locale});
        } catch (e) {
            return '';
        }
    }, [format, date]);

    return (
        <div className="mx-auto container flex flex-col p-4">
            {/* Header */}
            <h1 className="mb-4 text-center text-5xl text-gray-200 font-black tracking-wider">
                date-fns interactive format builder
            </h1>

            {/* Sticky part */}
            <Sticky
                formatted={formatted}
                format={format}
                onFormatChange={setFormat}
            />

            {/* Documentation */}
            <div className="p-8">
                {/* Examples */}
                <h2 className="text-2xl text-gray-200 font-bold select-none cursor-pointer">
                    Examples
                </h2>

                {/* Format examples */}
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
                        onClick={(f) => setFormat([format, f.format].join(' '))}
                    />
                )}
            </div>
        </div>
    );
}
