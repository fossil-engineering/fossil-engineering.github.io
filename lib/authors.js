import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'

const root = process.cwd()

export async function getAllAuthors() {
  let authors = {}

  const files = await getFiles('authors')

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', 'authors', file), 'utf8')
    const { data } = matter(source)
    const name = file.replace('.md', '')
    authors[name] = data
  })

  return authors
}
