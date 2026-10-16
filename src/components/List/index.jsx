const List = (props) => {
    const arrayOfLi = props.data.map((content) => <li key={content}>{content}</li>)
    return (
        <div>
            <h1>The list is: </h1>
            {props.data.map((content) => <p key={content}>{content}</p>)}

            <ul>
                {props.data.map((content) => <li key={content}>{content}</li>)}
            </ul>

            <ol>
                {arrayOfLi}
            </ol>
        </div>
    )
}

export default List;