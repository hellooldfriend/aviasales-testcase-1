const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search'
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets'


const api = {
    getSearchID: async () => {
        try {
            const response = await fetch(SEARCH_ID_URL)
            return response.json()
        } catch {
            throw new Error('Failed to fetch searchID')
        }
    },

    getTickets: async () => {
        try {
            const { searchId } = await api.getSearchID()
            const url = `${TICKETS_URL}?searchId=${searchId}`
            const response = await fetch(url)
            return response.json()
        } catch {
            throw new Error('Failed to fetch tickets')
            alert('Failed to fetch tickets. Reload page.')
        }
    }
}

export default api