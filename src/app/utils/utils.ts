export function formatStreetString(street: string | null): string | null {
  if (!street) return null
  return `${street.slice(0, 40)}...`;
}
