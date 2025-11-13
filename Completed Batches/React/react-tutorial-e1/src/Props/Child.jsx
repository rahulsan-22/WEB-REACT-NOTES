//!Props
// const Child = (props) => {
//     console.log(props) //{product: 'Gold Chain', price: 200000, original: true, proof: null}
//     let { product, price,original,proof} = props
//     return (
//         <div>
//             <h1>Child recieved {product} which is of worth ₹{price}/-</h1>
//             <p>{original ? "Yes it is original":"No its not original"}  {proof==null && "but we dont have any proof"}</p>
//         </div>
//     )
// }

// export default Child

//!Props Children
// const Child = (props) => {
//     console.log(props)
//     let { details: { name, age },children } = props
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>I am {age} years old</p>
//             <p>My Skills are:</p>
//             {children}
//         </div>
//     )
// }

// export default Child

//!Default Parameter
const Child = (props,age=37) => {
    console.log(props)
    let { firstName, children, obj: { lastName } } = props
    return (
        <div>
            <p>My firstName is <b>{firstName}</b></p>
            <p>My lastName is <b>{lastName}</b></p>
            <p>My age is <b>{age}</b></p>
            {children}
        </div>
    )
}

export default Child