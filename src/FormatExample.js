import * as fns from 'date-fns';

export function FormatExample({date, format, example, pattern = null, onClick}) {
    return (
        <div
            className="transition-all duration-150 flex flex-col items-center justify-center px-4 py-2 hover:bg-purple-900 border-2 border-purple-900 rounded shadow-sm hover:shadow cursor-pointer"
            onClick={() => onClick && onClick(format)}
        >
            <div>
                <div>
                    <span className="font-medium text-purple-400 mr-2">Pattern:</span>
                    <span className="font-medium font-mono text-purple-200 tracking-tighter">
                        {pattern || format}
                    </span>
                </div>

                {example && (
                    <div>
                        <span className="font-medium text-purple-400 mr-2">Example:</span>
                        <span className="font-medium text-purple-200">
                            {example}
                        </span>
                    </div>
                )}

                <div>
                    <span className="font-medium text-purple-400 mr-2">Current:</span>
                    <span className="font-medium text-purple-200">
                        {fns.format(date, format)}
                    </span>
                </div>
            </div>
        </div>
    );
}
