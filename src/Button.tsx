import React from "react";
import styles from "./button.module.css";
export type ButtonVariant = "primary";

export interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  showIcon?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  onClick,
  children,
}: ButtonProps) {
  const buttonClass = variant === "primary" ? styles["button--primary"] : "";
  const testId = `button-${variant}`;

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
}

function CallToActionButton() {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked")}>
      {
        <span className={styles.button__icon} data-testid="button-icon">
          &rarr;
        </span>
      }
    </Button>
  );
}
