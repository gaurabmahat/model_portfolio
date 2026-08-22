export const modelName = "Ganga Mahat";
export const homeImage = "https://res.cloudinary.com/ffezyytu/image/upload/w_500,h_650,c_fill,g_auto,q_auto,f_auto/v1787388090/HomePageImage.jpg";

type Stat = {
    label: string;
    value: string;
}
export const stats: Stat[] = [
    { label: "Height", value: "160 cm" },
    { label: "Dress size", value: "38-40" },
    { label: "Bust", value: "98 cm" },
    { label: "Waist", value: "107 cm" },
    { label: "Shoe", value: "39 EU" },
    { label: "Hair", value: "Golden Brown" },
    { label: "Eyes", value: "Brown" },
]

export const bio = [
    "Energetic and confident model fresh  in the industry who has  a strong interest in beauty, commercial and print modeling. Enthusiastic character and interest to learn new skills. Respecting  professionalism with creativity that enchance my work in modeling world.",
    "Versatile look and natural expression, confident presence in the set and runway, strong ability to adapt in various  artistic and creative concepts bringing authenticity and real presence in a project are my strengths."
]

type ModelContactInfo = {
    label: string;
    value: string;
    href?: string;
}

export const ModelContact: ModelContactInfo[] = [
    { label: "Location", value: "Helsinki, Finland" },
    { label: "Phone", value: "+358452753108", href: "tel:+358452753108" },
    { label: "Email", value: "gangamahat507@gmail.com" },
    { label: "Language", value: "Finnish (Fluent), English (Fluent), Nepali (Native), Hindi (Conversational)" },
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