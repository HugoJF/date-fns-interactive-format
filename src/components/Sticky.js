import React from 'react';

export function Sticky({formatted, format, onFormatChange}) {
    return <>
        {/* Top border hack */}
        <div className="border-b-4 border-gray-800"/>

        <div className="sticky top-0 p-4 space-y-2 border-4 border-t-0 border-gray-800 bg-gray-900 z-10 shadow-lg">
            {/* Formatted */}
            <h2 className="text-2xl text-gray-200 font-bold select-none cursor-pointer">
                Now
            </h2>
            <div className="px-3 py-1 text-center text-3xl text-gray-300 font-medium border-b-2 border-gray-900">
                {formatted}
            </div>

            {/* Manual input */}
            <h2 className="text-2xl text-gray-200 font-bold select-none cursor-pointer">
                Format
            </h2>
            <input
                className="px-5 py-2 w-full bg-gray-800 text-gray-300 text-center text-xl font-mono border-b-2 border-gray-700 shadow-md"
                type="text"
                value={format}
                onChange={(e) => onFormatChange(e.target.value)}
            />
        </div>
    </>
}
