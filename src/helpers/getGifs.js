export const getGifs = async ( categories ) => {
    // return a promise that resolves in an array of objects with 10 images data

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categories ) }&limit=10&api_key=8RS3w12eUSKMe9mx907E4u15x0TsC4XS`);
    const { data } = await res.json();
    const gifs = data.map( (elem) => {
        return { 
            id: elem.id,
            title: elem.title,
            url: elem.images?.downsized.url
        }
    })
    return gifs;
}