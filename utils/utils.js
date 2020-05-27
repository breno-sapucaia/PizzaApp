export const FetchPizza = async () => {
    let data = fetch('http://www.mocky.io/v2/5ecdde823000000f00ea0cb7')
    return (await data).json();
}

export const fontColor = '#D02608';


export const toReal = (price) => {
    return `R$${price.toFixed(2)}`
}
