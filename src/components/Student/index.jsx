import './style.css'
const Student1 = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={props.img} alt="Card Header Image" className="card-image" />
            <div className="card-content">
                <span className="card-tag"> {props.promo} | Age: {props.currentYear - props.birthYear} </span>
                <h2 className="card-title">{props.name} | {props.address.country} - {props.address.city} - {props.address.zip}  </h2>
                <p className="card-description">
                    {props.bio}
                </p>
                {props.canView ? <button onClick={props.action} className="card-button">View More</button> : null}
            </div>
        </div>
    )
}

const Student = (props) => {
    let { img, promo, currentYear, birthYear, name, address, bio, canView, action } = props;
    return (
        <div className="card">
            <img src={img} alt="Card Header Image" className="card-image" />
            <div className="card-content">
                <span className="card-tag"> {promo} | Age: {currentYear - birthYear} </span>
                <h2 className="card-title">{name} | {address.country} - {address.city} - {address.zip}  </h2>
                <p className="card-description">
                    {bio}
                </p>
                {canView ? <button onClick={action} className="card-button">View More</button> : null}
            </div>
        </div>
    )
}

export default Student;