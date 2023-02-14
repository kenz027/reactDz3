import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
export default function MessageHistory({ list }) {
  return (
    <ul type="none">
      {list.map((message) => {
        if (message.type === "response") {
          return <Response message={message} />;
        } else if (message.type === "typing") {
          return <Typing message={message} />;
        } else if (message.type === "message") {
          return <Message message={message} />;
        }
      })}
    </ul>
  );
}
