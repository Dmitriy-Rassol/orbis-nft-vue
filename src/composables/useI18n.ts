import { ref, computed } from 'vue'
import en from '../i18n/en'
import ru from '../i18n/ru'

type Locale = 'en' | 'ru'
type Translations = typeof en

const locales: Record<Locale, Translations> = { en, ru }
const currentLocale = ref<Locale>('ru')

export function useI18n() {
  const t = computed(() => locales[currentLocale.value])

  function setLocale(locale: Locale) {
    currentLocale.value = locale
  }

  function toggleLocale() {
    currentLocale.value = currentLocale.value === 'en' ? 'ru' : 'en'
  }

  return { t, currentLocale, setLocale, toggleLocale }
}
