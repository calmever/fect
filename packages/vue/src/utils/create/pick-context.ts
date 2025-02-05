import { assign } from '../format/object'

export const pickContextProps = <T extends Record<string, any>, K extends Record<string, any> | null>(
  draft: T,
  parent: K,
  invert = false
): T => {
  if (!parent || invert) return draft
  const source = parent.props || parent
  const slice = Object.keys(draft)
  return slice.reduce((acc, cur) => {
    const nil = !source[cur]
    return assign(acc, { [cur]: nil ? draft[cur] : source[cur] })
  }, {} as Pick<T, any>)
}
