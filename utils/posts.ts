export function postTags(tags?: string) {
  return tags?.split(',').map(tag => tag.trim()).filter(Boolean) ?? []
}

export function postDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date))
}
