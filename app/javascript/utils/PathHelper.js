// Public: Convenience function added to all generated requests objects.
export function pathFor (name, options) {
  if (!this) throw new Error(`Called pathFor helper on a detached function. Make sure to use YourRequests.pathFor('${name}') instead.`)
  const requestFn = this[name]
  if (!requestFn) throw new Error(`Unknown path helper ${name} for ${JSON.stringify(this)}`)
  return requestFn({ ...options, path: true })
}
