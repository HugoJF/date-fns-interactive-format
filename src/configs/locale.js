import * as allLocales from "date-fns/locale"

const lang = navigator.language.replace("-", "");
const rootLang = lang.substring(0, 2);

export const locale = allLocales[lang] || allLocales[rootLang] || allLocales["enUS"];