import { formatISO } from 'date-fns'
import fs from 'fs'
import path from 'path'

const pagesDirectory = path.join(process.cwd(), 'pages')

export async function getFileLastModified(fileName: string) {
  const fullPath = path.join(pagesDirectory, fileName)
  return new Promise<string>((resolve, reject) => {
    fs.stat(fullPath, function (err, stats) {
      if (err) {
        reject(err)
      } else {
        const mtime = stats.mtime
        resolve(formatISO(mtime))
      }
    })
  })
}
