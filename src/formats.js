export const formats = {
    era: {
        title: 'Era',
        formats: [{
            pattern: 'G..GGG',
            examples: 'AD, BC',
            format: 'G',
        }, {
            pattern: 'GGGG',
            examples: 'Anno Domini, Before Christ',
            format: 'GGGG',
            notes: [2],
        }, {
            pattern: 'GGGGG',
            examples: 'A, B',
            format: 'GGGGG',
        }]
    },
    calendar_year: {
        title: 'Calendar Year',
        formats: [{
            pattern: 'y',
            examples: '44, 1, 1900, 2017',
            format: 'y',
            notes: [5],
        }, {
            pattern: 'yo',
            examples: '44th, 1st, 0th, 17th',
            format: 'yo',
            notes: [5, 7],
        }, {
            pattern: 'yy',
            examples: '44, 01, 00, 17',
            format: 'yy',
            notes: [5],
        }, {
            pattern: 'yyy',
            examples: '044, 001, 1900, 2017',
            format: 'yyy',
            notes: [5],
        }, {
            pattern: 'yyyy',
            examples: '0044, 0001, 1900, 2017',
            format: 'yyyy',
            notes: [5],
        }, {
            pattern: 'yyyyy',
            examples: '...',
            format: 'yyyyy',
            notes: [3, 5],
        }],
    },
    local_week_numbering_year: {
        title: 'Local week-numbering year',
        formats: [{
            pattern: 'Y',
            examples: '44, 1, 1900, 2017',
            format: 'Y',
            notes: [5],
        }, {
            pattern: 'Yo',
            examples: '44th, 1st, 1900th, 2017th',
            format: 'Yo',
            notes: [5, 7],
        }, {
            pattern: 'YY',
            examples: '44, 01, 00, 17',
            format: 'YY',
            notes: [5, 8],
        }, {
            pattern: 'YYY',
            examples: '044, 001, 1900, 2017',
            format: 'YYY',
            notes: [5],
        }, {
            pattern: 'YYYY',
            examples: '0044, 0001, 1900, 2017',
            format: 'YYYY',
            notes: [5, 8],
        }, {
            pattern: 'YYYYY',
            examples: '...',
            format: 'YYYYY',
            notes: [3, 5],
        }],
    },
    iso_week_numbering_year: {
        title: 'ISO week-numbering year',
        formats: [{
            pattern: 'R',
            examples: '-43, 0, 1, 1900, 2017',
            format: 'R',
            notes: [5, 7],
        }, {
            pattern: 'RR',
            examples: '-43, 00, 01, 1900, 2017',
            format: 'RR',
            notes: [5, 7],
        }, {
            pattern: 'RRR',
            examples: '-043, 000, 001, 1900, 2017',
            format: 'RRR',
            notes: [5, 7],
        }, {
            pattern: 'RRRR',
            examples: '-0043, 0000, 0001, 1900, 2017',
            format: 'RRRR',
            notes: [5, 7],
        }, {
            pattern: 'RRRRR',
            examples: '...',
            format: 'RRRRR',
            notes: [3, 5, 7],
        }],
    },
    extended_year: {
        title: 'Extended year',
        formats: [{
            pattern: 'u',
            examples: '-43, 0, 1, 1900, 2017',
            format: 'u',
            notes: [5],
        }, {
            pattern: 'uu',
            examples: '-43, 01, 1900, 2017',
            format: 'uu',
            notes: [5],
        }, {
            pattern: 'uuu',
            examples: '-043, 001, 1900, 2017',
            format: 'uuu',
            notes: [5],
        }, {
            pattern: 'uuuu',
            examples: '-0043, 0001, 1900, 2017',
            format: 'uuuu',
            notes: [5],
        }, {
            pattern: 'uuuuu',
            examples: '...',
            format: 'uuuuu',
            notes: [3, 5],
        }],
    },
    quarter_formatting: {
        title: 'Quarter (formatting)',
        formats: [{
            pattern: 'Q',
            examples: '1, 2, 3, 4',
            format: 'Q',
        }, {
            pattern: 'Qo',
            examples: '1st, 2nd, 3rd, 4th',
            format: 'Qo',
            notes: [7],
        }, {
            pattern: 'QQ',
            examples: '01, 02, 03, 04',
            format: 'QQ',
        }, {
            pattern: 'QQQ',
            examples: 'Q1, Q2, Q3, Q4',
            format: 'QQQ',
        }, {
            pattern: 'QQQQ',
            examples: '1st quarter, 2nd quarter, ...',
            format: 'QQQQ',
            notes: [2],
        }, {
            pattern: 'QQQQQ',
            examples: '1, 2, 3, 4',
            format: 'QQQQQ',
            notes: [4],
        }],
    },
    quarter_stand_alone_: {
        title: 'Quarter (stand-alone)',
        formats: [{
            pattern: 'q',
            examples: '1, 2, 3, 4',
            format: 'q',
        }, {
            pattern: 'qo',
            examples: '1st, 2nd, 3rd, 4th',
            format: 'qo',
            notes: [7],
        }, {
            pattern: 'qq',
            examples: '01, 02, 03, 04',
            format: 'qq',
        }, {
            pattern: 'qqq',
            examples: 'Q1, Q2, Q3, Q4',
            format: 'qqq',
        }, {
            pattern: 'qqqq',
            examples: '1st quarter, 2nd quarter, ...',
            format: 'qqqq',
            notes: [2],
        }, {
            pattern: 'qqqqq',
            examples: '1, 2, 3, 4',
            format: 'qqqqq',
            notes: [4],
        }],
    },
    month_formatting: {
        title: 'Month (formatting)',
        formats: [{
            pattern: 'M',
            examples: '1, 2, ..., 12',
            format: 'M',
        }, {
            pattern: 'Mo',
            examples: '1st, 2nd, ..., 12th',
            format: 'Mo',
            notes: [7],
        }, {
            pattern: 'MM',
            examples: '01, 02, ..., 12',
            format: 'MM',
        }, {
            pattern: 'MMM',
            examples: 'Jan, Feb, ..., Dec',
            format: 'MMM',
        }, {
            pattern: 'MMMM',
            examples: 'January, February, ..., December',
            format: 'MMMM',
            notes: [2],
        }, {
            pattern: 'MMMMM',
            examples: 'J, F, ..., D',
            format: 'MMMMM',
        }],
    },
    month_stand_alone: {
        title: 'Month (stand-alone)',
        formats: [{
            pattern: 'L',
            examples: '1, 2, ..., 12',
            format: 'L',
        }, {
            pattern: 'Lo',
            examples: '1st, 2nd, ..., 12th',
            format: 'Lo',
            notes: [7],
        }, {
            pattern: 'LL',
            examples: '01, 02, ..., 12',
            format: 'LL',
        }, {
            pattern: 'LLL',
            examples: 'Jan, Feb, ..., Dec',
            format: 'LLL',
        }, {
            pattern: 'LLLL',
            examples: 'January, February, ..., December',
            format: 'LLLL',
            notes: [2],
        }, {
            pattern: 'LLLLL',
            examples: 'J, F, ..., D',
            format: 'LLLLL',
        }],
    },
    local_week_of_year: {
        title: 'Local week of year',
        formats: [{
            pattern: 'w',
            examples: '1, 2, ..., 53',
            format: 'w',
        }, {
            pattern: 'wo',
            examples: '1st, 2nd, ..., 53th',
            format: 'wo',
            notes: [7],
        }, {
            pattern: 'ww',
            examples: '01, 02, ..., 53',
            format: 'ww',
        }],
    },
    iso_week_of_year: {
        title: 'ISO week of year',
        formats: [{
            pattern: 'I',
            examples: '1, 2, ..., 53',
            format: 'I',
            notes: [7],
        }, {
            pattern: 'Io',
            examples: '1st, 2nd, ..., 53th',
            format: 'Io',
            notes: [7],
        }, {
            pattern: 'II',
            examples: '01, 02, ..., 53',
            format: 'II',
            notes: [7],
        }],
    },
    day_of_month: {
        title: 'Day of month',
        formats: [{
            pattern: 'd',
            examples: '1, 2, ..., 31',
            format: 'd',
        }, {
            pattern: 'do',
            examples: '1st, 2nd, ..., 31st',
            format: 'do',
            notes: [7],
        }, {
            pattern: 'dd',
            examples: '01, 02, ..., 31',
            format: 'dd',
        }],
    },
    day_of_year: {
        title: 'Day of year',
        formats: [{
            pattern: 'D',
            examples: '1, 2, ..., 365, 366',
            format: 'D',
            notes: [9],
        }, {
            pattern: 'Do',
            examples: '1st, 2nd, ..., 365th, 366th',
            format: 'Do',
            notes: [7],
        }, {
            pattern: 'DD',
            examples: '01, 02, ..., 365, 366',
            format: 'DD',
            notes: [9],
        }, {
            pattern: 'DDD',
            examples: '001, 002, ..., 365, 366',
            format: 'DDD',
        }, {
            pattern: 'DDDD',
            examples: '...',
            format: 'DDDD',
            notes: [3],
        }],
    },
    day_of_week_formatting: {
        title: 'Day of week (formatting)',
        formats: [{
            pattern: 'E..EEE',
            examples: 'Mon, Tue, Wed, ..., Sun',
            format: 'E',
        }, {
            pattern: 'EEEE',
            examples: 'Monday, Tuesday, ..., Sunday',
            format: 'EEEE',
            notes: [2],
        }, {
            pattern: 'EEEEE',
            examples: 'M, T, W, T, F, S, S',
            format: 'EEEEE',
        }, {
            pattern: 'EEEEEE',
            examples: 'Mo, Tu, We, Th, Fr, Su, Sa',
            format: 'EEEEEE',
        }],
    },
    iso_day_of_week_formatting: {
        title: 'ISO day of week (formatting)',
        formats: [{
            pattern: 'i',
            examples: '1, 2, 3, ..., 7',
            format: 'i',
            notes: [7],
        }, {
            pattern: 'io',
            examples: '1st, 2nd, ..., 7th',
            format: 'io',
            notes: [7],
        }, {
            pattern: 'ii',
            examples: '01, 02, ..., 07',
            format: 'ii',
            notes: [7],
        }, {
            pattern: 'iii',
            examples: 'Mon, Tue, Wed, ..., Sun',
            format: 'iii',
            notes: [7],
        }, {
            pattern: 'iiii',
            examples: 'Monday, Tuesday, ..., Sunday',
            format: 'iiii',
            notes: [2, 7],
        }, {
            pattern: 'iiiii',
            examples: 'M, T, W, T, F, S, S',
            format: 'iiiii',
            notes: [7],
        }, {
            pattern: 'iiiiii',
            examples: 'Mo, Tu, We, Th, Fr, Su, Sa',
            format: 'iiiiii',
            notes: [7],
        }],
    },
    local_day_of_week_formatting: {
        title: 'Local day of week (formatting)',
        formats: [{
            pattern: 'e',
            examples: '2, 3, 4, ..., 1',
            format: 'e',
        }, {
            pattern: 'eo',
            examples: '2nd, 3rd, ..., 1st',
            format: 'eo',
            notes: [7],
        }, {
            pattern: 'ee',
            examples: '02, 03, ..., 01',
            format: 'ee',
        }, {
            pattern: 'eee',
            examples: 'Mon, Tue, Wed, ..., Sun',
            format: 'eee',
        }, {
            pattern: 'eeee',
            examples: 'Monday, Tuesday, ..., Sunday',
            format: 'eeee',
            notes: [2],
        }, {
            pattern: 'eeeee',
            examples: 'M, T, W, T, F, S, S',
            format: 'eeeee',
        }, {
            pattern: 'eeeeee',
            examples: 'Mo, Tu, We, Th, Fr, Su, Sa',
            format: 'eeeeee',
        }],
    },
    local_day_of_week_stand_alone: {
        title: 'Local day of week (stand-alone)',
        formats: [{
            pattern: 'c',
            examples: '2, 3, 4, ..., 1',
            format: 'c',
        }, {
            pattern: 'co',
            examples: '2nd, 3rd, ..., 1st',
            format: 'co',
            notes: [7],
        }, {
            pattern: 'cc',
            examples: '02, 03, ..., 01',
            format: 'cc',
        }, {
            pattern: 'ccc',
            examples: 'Mon, Tue, Wed, ..., Sun',
            format: 'ccc',
        }, {
            pattern: 'cccc',
            examples: 'Monday, Tuesday, ..., Sunday',
            format: 'cccc',
            notes: [2],
        }, {
            pattern: 'ccccc',
            examples: 'M, T, W, T, F, S, S',
            format: 'ccccc',
        }, {
            pattern: 'cccccc',
            examples: 'Mo, Tu, We, Th, Fr, Su, Sa',
            format: 'cccccc',
        }],
    },
    am_pm: {
        title: 'AM, PM',
        formats: [{
            pattern: 'a..aaa',
            examples: 'AM, PM',
            format: 'a',
        }, {
            pattern: 'aaaa',
            examples: 'a.m., p.m.',
            format: 'aaaa',
            notes: [2],
        }, {
            pattern: 'aaaaa',
            examples: 'a, p',
            format: 'aaaaa',
        }],
    },
    am_pm_noon_midnight: {
        title: 'AM, PM, noon, midnight',
        formats: [{
            pattern: 'b..bbb',
            examples: 'AM, PM, noon, midnight',
            format: 'b',
        }, {
            pattern: 'bbbb',
            examples: 'a.m., p.m., noon, midnight',
            format: 'bbbb',
            notes: [2],
        }, {
            pattern: 'bbbbb',
            examples: 'a, p, n, mi',
            format: 'bbbbb',
        }],
    },
    flexible_day_period: {
        title: 'Flexible day period',
        formats: [{
            pattern: 'B..BBB',
            examples: 'at night, in the morning, ...',
            format: 'B',
        }, {
            pattern: 'BBBB',
            examples: 'at night, in the morning, ...',
            format: 'BBBB',
            notes: [2],
        }, {
            pattern: 'BBBBB',
            examples: 'at night, in the morning, ...',
            format: 'BBBBB',
        }],
    },
    hour_1_12: {
        title: 'Hour [1-12]',
        formats: [{
            pattern: 'h',
            examples: '1, 2, ..., 11, 12',
            format: 'h',
        }, {
            pattern: 'ho',
            examples: '1st, 2nd, ..., 11th, 12th',
            format: 'ho',
            notes: [7],
        }, {
            pattern: 'hh',
            examples: '01, 02, ..., 11, 12',
            format: 'hh',
        }],
    },
    hour_0_23: {
        title: 'Hour [0-23]',
        formats: [{
            pattern: 'H',
            examples: '0, 1, 2, ..., 23',
            format: 'H',
        }, {
            pattern: 'Ho',
            examples: '0th, 1st, 2nd, ..., 23rd',
            format: 'Ho',
            notes: [7],
        }, {
            pattern: 'HH',
            examples: '00, 01, 02, ..., 23',
            format: 'HH',
        }],
    },
    hour_0_11: {
        title: 'Hour [0-11]',
        formats: [{
            pattern: 'K',
            examples: '1, 2, ..., 11, 0',
            format: 'K',
        }, {
            pattern: 'Ko',
            examples: '1st, 2nd, ..., 11th, 0th',
            format: 'Ko',
            notes: [7],
        }, {
            pattern: 'KK',
            examples: '01, 02, ..., 11, 00',
            format: 'KK',
        }],
    },
    hour_1_24: {
        title: 'Hour [1-24]',
        formats: [{
            pattern: 'k',
            examples: '24, 1, 2, ..., 23',
            format: 'k',
        }, {
            pattern: 'ko',
            examples: '24th, 1st, 2nd, ..., 23rd',
            format: 'ko',
            notes: [7],
        }, {
            pattern: 'kk',
            examples: '24, 01, 02, ..., 23',
            format: 'kk',
        }],
    },
    minute: {
        title: 'Minute',
        formats: [{
            pattern: 'm',
            examples: '0, 1, ..., 59',
            format: 'm',
        }, {
            pattern: 'mo',
            examples: '0th, 1st, ..., 59th',
            format: 'mo',
            notes: [7],
        }, {
            pattern: 'mm',
            examples: '00, 01, ..., 59',
            format: 'mm',
        }],
    },
    second: {
        title: 'Second',
        formats: [{
            pattern: 's',
            examples: '0, 1, ..., 59',
            format: 's',
        }, {
            pattern: 'so',
            examples: '0th, 1st, ..., 59th',
            format: 'so',
            notes: [7],
        }, {
            pattern: 'ss',
            examples: '00, 01, ..., 59',
            format: 'ss',
        }],
    },
    fraction_of_second: {
        title: 'Fraction of second',
        formats: [{
            pattern: 'S',
            examples: '0, 1, ..., 9',
            format: 'S',
        }, {
            pattern: 'SS',
            examples: '00, 01, ..., 99',
            format: 'SS',
        }, {
            pattern: 'SSS',
            examples: '000, 0001, ..., 999',
            format: 'SSS',
        }, {
            pattern: 'SSSS',
            examples: '...',
            format: 'SSSS',
            notes: [3],
        }],
    },
    Timezone_ISO_8601_w_Z: {
        title: 'Timezone (ISO-8601 w/ Z)',
        formats: [{
            pattern: 'X',
            examples: '-08, +0530, Z',
            format: 'X',
        }, {
            pattern: 'XX',
            examples: '-0800, +0530, Z',
            format: 'XX',
        }, {
            pattern: 'XXX',
            examples: '-08:00, +05:30, Z',
            format: 'XXX',
        }, {
            pattern: 'XXXX',
            examples: '-0800, +0530, Z, +123456',
            format: 'XXXX',
            notes: [2],
        }, {
            pattern: 'XXXXX',
            examples: '-08:00, +05:30, Z, +12:34:56',
            format: 'XXXXX',
        }],
    },
    Timezone_ISO_8601_w_o_Z: {
        title: 'Timezone (ISO-8601 w/o Z)',
        formats: [{
            pattern: 'x',
            examples: '-08, +0530, +00',
            format: 'x',
        }, {
            pattern: 'xx',
            examples: '-0800, +0530, +0000',
            format: 'xx',
        }, {
            pattern: 'xxx',
            examples: '-08:00, +05:30, +00:00',
            format: 'xxx',
            notes: [2],
        }, {
            pattern: 'xxxx',
            examples: '-0800, +0530, +0000, +123456',
            format: 'xxxx',
        }, {
            pattern: 'xxxxx',
            examples: '-08:00, +05:30, +00:00, +12:34:56',
            format: 'xxxxx',
        }],
    },
    timezone_gmt: {
        title: 'Timezone (GMT)',
        formats: [{
            pattern: 'O...OOO',
            examples: 'GMT-8, GMT+5:30, GMT+0',
            format: 'O',
        }, {
            pattern: 'OOOO',
            examples: 'GMT-08:00, GMT+05:30, GMT+00:00',
            format: 'OOOO',
            notes: [2],
        }],
    },
    Timezone_specific_non_locat: {
        title: 'Timezone (specific non-locat.)',
        formats: [{
            pattern: 'z..zzz',
            examples: 'GMT-8, GMT+5:30, GMT+0',
            format: 'z',
            notes: [6],
        }, {
            pattern: 'zzzz',
            examples: 'GMT-08:00, GMT+05:30, GMT+00:00',
            format: 'zzzz',
            notes: [2, 6],
        }],
    },
    seconds_timestamp: {
        title: 'Seconds timestamp',
        formats: [{
            pattern: 't',
            examples: '512969520',
            format: 't',
            notes: [7],
        }, {
            pattern: 'tt',
            examples: '...',
            format: 'tt',
            notes: [3, 7],
        }],
    },
    milliseconds_timestamp: {
        title: 'Milliseconds timestamp',
        formats: [{
            pattern: 'T',
            examples: '512969520900',
            format: 'T',
            notes: [7],
        }, {
            pattern: 'TT',
            examples: '...',
            format: 'TT',
            notes: [3, 3],
        }],
    },
    long_localized_date: {
        title: 'Long localized date',
        formats: [{
            pattern: 'P',
            examples: '05/29/1453',
            format: 'P',
            notes: [7],
        }, {
            pattern: 'PP',
            examples: 'May 29, 1453',
            format: 'PP',
            notes: [7],
        }, {
            pattern: 'PPP',
            examples: 'May 29th, 1453',
            format: 'PPP',
            notes: [7],
        }, {
            pattern: 'PPPP',
            examples: 'Sunday, May 29th, 1453',
            format: 'PPPP',
            notes: [2, 7],
        }],
    },
    long_localized_time: {
        title: 'Long localized time',
        formats: [{
            pattern: 'p',
            examples: '12:00 AM',
            format: 'p',
            notes: [7],
        }, {
            pattern: 'pp',
            examples: '12:00:00 AM',
            format: 'pp',
            notes: [7],
        }, {
            pattern: 'ppp',
            examples: '12:00:00 AM GMT+2',
            format: 'ppp',
            notes: [7],
        }, {
            pattern: 'pppp',
            examples: '12:00:00 AM GMT+02:00',
            format: 'pppp',
            notes: [2, 7],
        }],
    },
    combination_of_date_and_time: {
        title: 'Combination of date and time',
        formats: [{
            pattern: 'Pp',
            examples: '05/29/1453, 12:00 AM',
            format: 'Pp',
            notes: [7],
        }, {
            pattern: 'PPpp',
            examples: 'May 29, 1453, 12:00:00 AM',
            format: 'PPpp',
            notes: [7],
        }, {
            pattern: 'PPPppp',
            examples: 'May 29th, 1453 at ...',
            format: 'PPPppp',
            notes: [7],
        }, {
            pattern: 'PPPPpppp',
            examples: 'Sunday, May 29th, 1453 at ...',
            format: 'PPPPpppp',
            notes: [2, 7],
        }],
    }
};
