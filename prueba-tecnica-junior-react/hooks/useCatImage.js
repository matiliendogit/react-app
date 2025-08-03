import { useEffect, useState } from 'react'
import { getCatImage } from '../services/logic';

export function useCatImage({ fact }) {
        const [imageUrl, setImageUrl] = useState("")
        const [isLoadingImage, setIsLoadingImage] = useState(true)

         useEffect(() => {
            if (!fact) return
            setIsLoadingImage(true)
            getCatImage(fact)
                .then(url => {
                    setImageUrl(url)
                    setIsLoadingImage(false)
                })
                .catch(error => {
                    console.error("Error fetching cat image:", error)
                    setIsLoadingImage(false)
                })
        }, [fact])

        return { imageUrl, isLoadingImage }
    }