import {t} from "@/utils/locale";

export const setTitle = (title: string) => {
  document.title = title ? `${title} — ${t('project')}` : t('project')
}
