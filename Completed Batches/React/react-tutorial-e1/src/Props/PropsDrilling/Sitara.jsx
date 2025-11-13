const Sitara = (props) => {
    console.log(props)
    let { itemAgain: { item: { price, product } } } = props
    return (
        <h1>Sitara received <mark>{product}</mark> which is of worth<mark> {price}/-</mark></h1>
    )
}

export default Sitara