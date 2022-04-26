import PropTypes from 'prop-types';

const Notification = ({ title }) => (
    <h3>{title}</h3>
);

Notification.propType = {
    title: PropTypes.string.isRequired
}

export default Notification;