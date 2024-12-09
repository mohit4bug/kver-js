export const isString = (val: any): val is string => typeof val === 'string'

export const isObject = (fn: any): fn is object =>
  !isNil(fn) && typeof fn === 'object'

export const isNil = (val: any): val is null | undefined =>
  isUndefined(val) || val === null

export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === 'undefined'
