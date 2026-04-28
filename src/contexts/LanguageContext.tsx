import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from '../i18n/translations'

interface LanguageContextType {
    lang: Lang
    t: Translations
    toggle: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>('en')

    return (
        <LanguageContext.Provider
            value={{
                lang,
                t: translations[lang] as unknown as Translations,
                toggle: () => setLang((l) => (l === 'en' ? 'zh' : 'en')),
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
    return ctx
}
