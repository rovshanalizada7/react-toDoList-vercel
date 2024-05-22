const Footer = ({length}) => {
    

 return (
    <footer>
     <p>{length} List {length === 1 || length === 0 ? "event" : "events" } </p>
    </footer>
    )
}

export default Footer