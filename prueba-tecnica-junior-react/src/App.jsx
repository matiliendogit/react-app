
import styles from './App.module.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'

export default function App() {
 

    const { fact, refreshCatFact, isLoadingFact} = useCatFact()
    const { imageUrl, isLoadingImage } = useCatImage({ fact })

    const handleClickReloadFact = async () => {
        refreshCatFact()
    }

    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Cat Facts</h1>
        
        <div className={styles.factContainer}>
          {isLoadingFact ? (
            <span className={styles.loader} />
          ) : (
            <p className={styles.fact}>{fact}</p>
          )}
        </div>

        <div className={styles.imageContainer}>
          {isLoadingImage ? (
            <span className={styles.loader} />
          ) : (
            <img
              className={styles.image}
              src={imageUrl}
              alt={'Generated from the first two words of the fact}'}
            />
          )}
        </div>

        <button
          className={styles.button}
            onClick={handleClickReloadFact}
        >
          Reload a new fact
        </button>
      </main>
    )
}