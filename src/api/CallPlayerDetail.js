export const fetchPlayerDetail = async (id) => {
    try {
        const response = await fetch(`https://my-api-ilibriceag.netlify.app/api/news?id=${id}`);
        if (!response.ok) {
            throw new Error('Eroare încărcare date');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Eroare: ${error.message}`);
    }
};