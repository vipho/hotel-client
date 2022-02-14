let uid = 0

export const newID = (): string => {
  return `bsid-${(uid++).toString(36)}`;
}
