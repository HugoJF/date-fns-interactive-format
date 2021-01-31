import {Format} from "./Format";
import React, {useState} from "react";
import AnimateHeight from "react-animate-height";
import Chevron from "../svg/Chevron";

export function FormatGroup({key, date, group, onClick}) {
    const [expanded, setExpanded] = useState(false);

    return <div>
        <h2
            onClick={() => setExpanded(!expanded)}
            key={key} className="flex items-center mt-2 mb-2 text-xl text-gray-400 font-bold select-none cursor-pointer"
        >
            <div className={`transform transition-all duration-300 w-3 h-3 mr-3 grid fill-current ${expanded ? 'rotate-90' : ''}`}>
                <Chevron/>
            </div>
            <div className="text-gray-200">
                {group.title}
            </div>
        </h2>

        <AnimateHeight height={expanded ? 'auto' : 0}>
            {expanded && <table className="w-full">
                <thead>
                <tr className="bg-gray-800 border-b-2 border-gray-900">
                    <th className="px-5 pb-2 py-3 text-lg text-gray-200 font-thin">Pattern</th>
                    <th className="px-5 pb-2 py-3 text-lg text-gray-200 font-thin">Example</th>
                    <th className="px-5 pb-2 py-3 text-lg text-gray-200 font-thin">Current</th>
                </tr>
                </thead>
                <tbody>
                {group.formats.map(format => (
                    <tr
                        onClick={() => onClick(format)}
                        className="transition-colors duration-150 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
                    >
                        <Format
                            key={[key, format.pattern].join('-')}
                            date={date}
                            format={format.format}
                            pattern={format.pattern}
                            example={format.examples}
                            update={expanded}
                        />
                    </tr>
                ))}
                </tbody>
            </table>}
        </AnimateHeight>
    </div>
}
