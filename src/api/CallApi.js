export const fetchNews = async () => {
    try {
      const response = await fetch('https://my-api-ilibriceag.netlify.app/api/news/');
      if (!response.ok) {
        throw new Error('Eroare încărcare date');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  