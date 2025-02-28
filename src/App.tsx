import { useState } from "react";
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

type Person = {
  firstName: string | null;
  lastName: string | null;
};

type NotificationMessageProps = CustomComponentProps | TextProps;

function NotificationMessage(notificationProps: NotificationMessageProps) {
  const [personState, setPersonState] = useState<Person>({
    firstName: "bob",
  } as Person);

  console.log(personState);

  if (notificationProps.CustomComponent) {
    return <notificationProps.CustomComponent />;
  }

  const wholeName = personState.firstName + " " + personState.lastName;
  return (
    <div>
      {notificationProps.text}
      {wholeName}
    </div>
  );
}
