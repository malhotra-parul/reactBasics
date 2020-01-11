import React from "react";
import ReactDOM from "react-dom";

function Blog(props){
    const posts = props.posts;
    const sidebar = <ul>
        {posts.map((post)=>
        <li key={post.id}>{post.title}</li>)}
    </ul>;

    const content = posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>
                {post.content}
            </p>
        </div>
    );
    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
};
const posts = [{
    id: 1, title: "Stories", content: "Check out all the stories here!"
},{
    id: 2, title: "Feed", content: "My insta feed displayed here!"
}];

export default Blog;
ReactDOM.render(<Blog posts={posts} />, document.getElementById("blog"));