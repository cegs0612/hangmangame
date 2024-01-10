import Axios  from "axios";

const getEnglishWord = async () => {
  try {
    const options = {
      method: 'GET',
      url: import.meta.env.VITE_URL,
      params: {random: 'true'},
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_HOST
      }
    }

    const response = await Axios.request(options);
    const word = response.data.word;

    return word

  } catch (error) {
    console.log('there was an error', error);
    console.log('response', error.response);
  }
};

export default getEnglishWord
