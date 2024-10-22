import { useEffect, useState } from 'react'
import { ContentData } from '../types/content'

export function useContentData() {
  const [contentData, setContentData] = useState<ContentData | null>(null)

  useEffect(() => {
    async function fetchContentData() {
      try {
        // Update this line to use the correct path
        const response = await fetch('/content.json')
        if (!response.ok) {
          throw new Error('Failed to fetch content data')
        }
        const data: ContentData = await response.json()
        setContentData(data)
      } catch (error) {
        console.error('Error fetching content data:', error)
        setContentData(null)
      }
    }

    fetchContentData()
  }, [])

  return contentData || {} as ContentData
}
