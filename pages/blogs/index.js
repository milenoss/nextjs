/** @format */

import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

//fetching the data before it the page is rendered

export const getStaticProps = async () => {
	const { data } = await axios({
		method: 'get',
		headers: {
			Authorization: `Bearer 25db4245c52f2a7f002f5d97c4bbc39f22b4d58637cc07dbf53f88fe4a5b97cda`,
		},
		url: ` https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@milenkhanal`,
	});
	return {
		props: { blogs: data },
	};
};
const Allblogs = ({ blogs }) => {
	console.log(blogs);
	return (
		<div>
			<h1>BLOGS</h1>
			{blogs.items.map((blog) => (
				<a style={{ margin: '40px' }} href={blog.guid}>
					<h2 style={{ margin: 0 }}>{blog.title}</h2>
					<p style={{ margin: 0 }}>Published:{blog.pubDate}</p>
					{/* <div dangerouslySetInnerHTML={{__html: blog.content}} /> */}
					{/* <Image
          src={blog.content}
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
				</a>
			))}
		</div>
	);
};

export default Allblogs;
