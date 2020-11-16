import React, {useMemo} from "react";
import * as fns from "date-fns";

export function Format({key, date, format, example, pattern = null, update}) {
    const formatted = useMemo(() => {
        if (!update) return null;

        return fns.format(date, format, {
            useAdditionalDayOfYearTokens: true,
            useAdditionalWeekYearTokens: true
        })
    }, [update, date, format]);

    return <>
        <td className="py-2">
            <p className="text-center text-lg font-bold font-mono text-purple-200 tracking-tight">
                {pattern || format}
            </p>
        </td>

        <td className="py-2">
            {example && (
                <div>
                    <p className="text-center text-lg font-medium text-purple-200">
                        {example}
                    </p>
                </div>
            )}
        </td>

        <td className="py-2">
            <p className="text-center text-lg font-medium text-purple-200">
                {formatted}
            </p>
        </td>
    </>;
}
