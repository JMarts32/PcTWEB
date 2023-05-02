function Post(props){
    const renderLikes = () => {
        if (props.likes === "0") return "Dame un like bobo malo";
        else return "Likes: " + props.likes;
    };

    return (
        <div>
        <h1>Post</h1>
        <h2>Author: {props.author}</h2>
        <h2>Content: {props.content}</h2>
        <h2>{renderLikes()}</h2>
        </div>
    );
}

export default Post;