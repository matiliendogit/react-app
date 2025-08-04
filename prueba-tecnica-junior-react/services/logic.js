const FACT_API_URL = 'https://catfact.ninja/fact'

export const getCatFact = async () => {
  const res = await fetch(FACT_API_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getCatImage = async (fact) => {
  const firstTwoWords = fact.split(' ', 2).join(' ')
  const res = await fetch(`https://cataas.com/cat/says/${firstTwoWords}?size=50&color=red&json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
