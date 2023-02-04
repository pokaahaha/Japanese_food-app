import { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAnount = amountInputRef.current.value;
    if (
      inputAnount.trim().length === 0 ||
      +inputAnount < 1 ||
      +inputAnount > 10
    ) {
      setIsAmountValid(false)
      return;
    }

    props.onAddToCart(+inputAnount)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Введите Количество от 1 до 10</p>}
    </form>
  );
};
