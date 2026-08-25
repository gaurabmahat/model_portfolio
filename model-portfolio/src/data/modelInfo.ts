export const modelName = "Ganga Mahat";

type Stat = {
    label: string;
    value: string;
}
export const stats: Stat[] = [
    { label: "about.stats.height", value: "160 cm" },
    { label: "about.stats.dressSize", value: "38-40" },
    { label: "about.stats.bust", value: "98 cm" },
    { label: "about.stats.waist", value: "107 cm" },
    { label: "about.stats.shoe", value: "39 EU" },
    { label: "about.stats.hair.label", value: "about.stats.hair.value" },
    { label: "about.stats.eyes.label", value: "about.stats.eyes.value" },
]

export const bio = [
    "about.bio1",
    "about.bio2"
]

type Language = {
    language: string;
    languageLevel: string; 
}

const LanguageAndLevel: Language[] = [
    {language: "Finnish", languageLevel: "about.contact.language.fluent"},
    {language: "English", languageLevel: "about.contact.language.fluent"},
    {language: "Nepali", languageLevel: "about.contact.language.native"},
    {language: "Hindi", languageLevel: "about.contact.language.conversational"},
]

type ModelContactInfo = {
    label: string;
    value: string | Language[];
    href?: string;
}

export const ModelContact: ModelContactInfo[] = [
    { label: "about.contact.location", value: "Helsinki, Finland" },
    { label: "about.contact.phone", value: "+358452753108", href: "tel:+358452753108" },
    { label: "about.contact.email", value: "gangamahat507@gmail.com" },
    { label: "about.contact.language.label", value: LanguageAndLevel },
]

type ModelSocialMedias = {
    label: string;
    value: string;
    href: string;
    icon: string;
}

export const SocialMediaInfo: ModelSocialMedias[] = [
    { label: "Instagram", value: "@mahat184", href: "https://www.instagram.com/mahat184/?hl=en", icon: "instagram"},
    { label: "TikTok", value: "@gangamahat72", href: "https://www.tiktok.com/@gangamahat72", icon: "tiktok"},
]