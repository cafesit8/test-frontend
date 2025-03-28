export function convertDateToTimestamp(fechaString: string) {
  return new Date(fechaString);
}

export function verifyDate(date: Date) {
  const dateString = String(date)
  const isValid = dateString.includes('T')

  if (isValid) {
    return dateString.split('T')[0]
  }
  return dateString
}