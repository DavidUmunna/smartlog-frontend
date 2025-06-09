// src/lib/source.ts

export type pageTree = {
 
    children: {
      $id: string
      name: string
      url?: string
      type: "page" | "folder"
      children?:  pageTree["children"]
    }[]
  }

