import styles from "./TextInput.module.scss";

interface TextInputProps {
  label: string;
  type: "text" | "email" | "password" | "search";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

function TextInput(props: TextInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    props.onChange(value);
  };

  return (
    <div className={styles.textInputContainer}>
      <label className={styles.textInputLabel}>{props.label}</label>
      <input
        className={styles.textInputField}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleInputChange}
        required
      />
      {props.error && <span className={styles.textInputError}>{props.error}</span>}
    </div>
  );
}

export default TextInput;
