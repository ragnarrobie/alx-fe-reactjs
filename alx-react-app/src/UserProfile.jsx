import react from 'react';
const UserProfile =(props)=>{
    return (
        <div>
        <h2>{props.name}</h2>
        <p>Age:{props.Age}</p>
        <p>Bio:{props.Bio}</p>
        </div>
    )
}
export default UserProfile;