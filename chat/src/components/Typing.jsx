export default function Typing({ message }) {
  return (
    <li className="clearfix" key={message.id}>
      <div className="message-data align-left">
        <span className="message-data-name">{message.from.name}</span>
        <span className="message-data-time">{message.time}</span>
        <i className="fa fa-circle online"></i>
      </div>
      <div className="message my-message float-left">typing...</div>
    </li>
  );
}
