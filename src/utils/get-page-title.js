import defaultSettings from '@/settings'

const title = defaultSettings.title || 'disease queue manager system'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
