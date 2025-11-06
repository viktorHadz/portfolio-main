/**
 *
 * @param {*} path
 * @param {*} name
 * @param {*} fileExt
 * @returns
 * Module is in composables. Root starts from assets e.g. ../assets/path/name.fileExt
 */
export function getImage(path, name, fileExt) {
  const pathConstructor = new URL(
    `../assets/${path}/${name}.${fileExt}`,
    import.meta.url,
  ).href
  console.log(pathConstructor)
  return pathConstructor
}
