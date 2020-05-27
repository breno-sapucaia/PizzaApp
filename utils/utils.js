export const FetchPizza = async () => {
    let data = fetch('http://www.mocky.io/v2/5ecdaf3f3000007900ea0bd1')
    return (await data).json();
}

export const fontColor = '#D02608';


export const toReal = (price) => {
    return `R$${price.toFixed(2)}`
}
