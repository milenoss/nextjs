
//exporting paths from the api before it is rendered

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(ninja => { 
        //accessing params property and the id object converting it to string
        return { 
            params: { id: ninja.id.toString()} 
        }
    })
    return {
        paths, 
        fallback: false
    }
  }

const Details = () => { 
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
    )
}
export default Details; 