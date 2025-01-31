import { useState, useRef } from "react";

export default function Controlled() {
  const onClickForm = (e) => {
    e.preventDefault();
    console.log(`controlled: ${value}`);
    console.log(`uncontrolled: ${myRef.current.value} `);

  };

  const [value, setValue] = useState("");
  const myRef = useRef();

  return (
    <form onClick={(e) => onClickForm(e)}>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="controlled" />
      <input ref={myRef} placeholder="uncontrolled" />

      <button>Отправить заявку на кредит</button>
    </form>
  );
}
