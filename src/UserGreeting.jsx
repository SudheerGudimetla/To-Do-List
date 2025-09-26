import PropTypes from 'prop-types';
function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.userName}</h2>
    }
    else{
        return <h2>Place log in to continue</h2>
    }
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}
export default UserGreeting;