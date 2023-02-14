export default function Message({ message }) {
  if (message.from.name === "Виктор") {
    return (
      <li className="clearfix" key={message.id}>
        <div className="message-data align-left">
          <span className="message-data-name">{message.from.name}</span>
          <span className="message-data-time">{message.time}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message my-message float-left">{message.text}</div>
      </li>
    );
  }

  return (
    <li className="clearfix" key={message.id}>
      <div className="message-data align-right">
        <span className="message-data-name">{message.from.name}</span>
        <span className="message-data-time">{message.time}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
}
