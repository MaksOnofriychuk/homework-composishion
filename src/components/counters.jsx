import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовий набор минималиста" },
    { value: 0, id: 5, name: "Ненужние вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const hendleIncrement = (counterId) => {
    const newCountersw = [...counters];
    console.log(newCountersw);
    const www = newCountersw.findIndex((item) => item.id === counterId);
    console.log(www);
    newCountersw[www].value++;
    setCounters(newCountersw);
  };
  const hendDecrement = (counterId) => {
    const newCountersq = [...counters];
    const www = newCountersq.findIndex((item) => item.id === counterId);
    console.log(www);
    newCountersq[www].value--;
    setCounters(newCountersq);
  };
  const handleReset = () => setCounters(initialState);

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={hendleIncrement}
          onDecrement={hendDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
