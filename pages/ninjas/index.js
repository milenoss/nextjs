import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import axios from 'axios'


//fetching the data before it the page is rendered 

export const getStaticProps = async () => {
const { data } = await axios({
    method: "get",
    headers: { Authorization: `Bearer 25db4245c52f2a7f002f5d97c4bbc39f22b4d58637cc07dbf53f88fe4a5b97cda` },
    url: ` https://api.medium.com/v1/me`,
    });
  console.log(data)
  return {
    props: { blogs: data }
  }
  
}
const Allblogs = ({ blogs }) => {
  console.log(blogs)
  console.log(blogs.data)
  return (
    <div>
      <h1>All Post</h1>
      <p>  URl </p>
      <div>ImageUrl</div>
    </div>
  );
}
 
export default Allblogs;