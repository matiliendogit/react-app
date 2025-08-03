import { useEffect, useState } from 'react'
import { getCatFact } from '../services/logic'

export function useCatFact() {
        const [fact, setFact] = useState(null)
        const [isLoadingFact, setIsLoadingFact] = useState(true)

        const refreshCatFact = async () => {
            setIsLoadingFact(true)
            getCatFact()
                .then(fact => {
                    setFact(fact)
                    setIsLoadingFact(false)
                })
                .catch(error => {
                    console.error("Error fetching cat fact:", error)
                    setIsLoadingFact(false)
                })  
        }

        useEffect(() => {
            refreshCatFact()
        }, [])
        
        return { fact, refreshCatFact, isLoadingFact}
    }