import english from "@/i18n/en.json";
import spanish from "@/i18n/es.json";
import portuguese from "@/i18n/br.json";

const LANGUAGES = {
	ENGLISH: "en",
	SPANISH: "es",
	PORTUGUESE: "br",
};

export const getI18N = ({
	currentLocale = "es",
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANGUAGES.ENGLISH) return english;
	if (currentLocale === LANGUAGES.SPANISH) return spanish;
	if (currentLocale === LANGUAGES.PORTUGUESE) return portuguese;
	return spanish;
};
