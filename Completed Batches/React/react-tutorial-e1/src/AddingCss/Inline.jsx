const Inline = () => {
    let stylesForH1 = {
        background:"linear-gradient(red,green)",
        backgroundClip:"text",
        color:"transparent"
    }
    return (
        <>
            <h1 style={stylesForH1}>Sunday</h1>
            <button style={{color:"white",backgroundColor:"royalblue",padding:"15px 25px"}}>Inline CSS</button>
        </>
    )
}
export default Inline