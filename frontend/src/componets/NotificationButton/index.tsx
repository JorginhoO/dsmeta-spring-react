import icon from '../../assets/img/icon-notification.svg';
import './style.css';

function NotificationButton() {
    return (
        <div className="dsmeta-btn">
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton;
