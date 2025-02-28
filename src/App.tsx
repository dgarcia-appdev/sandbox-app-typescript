import "./App.css";

function App() {
  return (
    <div>
      <h1>Sandbox Application</h1>
      <NotificationMessage CustomComponent={() => <h1>Hello</h1>} />
      <NotificationMessage text="hello" />
    </div>
  );
}

export default App;

type CustomComponentProps = {
  CustomComponent: () => JSX.Element;
  text?: never;
};

type TextProps = {
  text: string;
  CustomComponent?: never;
};

type NotificationMessageProps = CustomComponentProps | TextProps;

function NotificationMessage(notificationProps: NotificationMessageProps) {
  if (notificationProps.CustomComponent) {
    return <notificationProps.CustomComponent />;
  }

  return <div>{notificationProps.text}</div>;
}
