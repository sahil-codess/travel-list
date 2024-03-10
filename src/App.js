import { Children, useState } from "react";

export default function App() {
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  // function handleDeleteItems(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );
  // }

  // function handleClearList() {
  //   const confirmed = window.confirm("Are you sure you want to delete items ?");
  //   if (confirmed) setItems([]);
  // }
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setPercentage1(0);
    setPercentage2(0);
    setBill("");
  }

  return (
    // <div className="app">
    //   <Logo />
    //   <Form onAddItems={handleAddItems} />
    //   <PackingList
    //     items={items}
    //     onDeleteItem={handleDeleteItems}
    //     onToggleItem={handleToggleItem}
    //     onClearList={handleClearList}
    //   />
    //   <Stats items={items} />
    // </div>
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{" "}
      </SelectPercentage>

      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

// function Logo() {
//   return <h1>🌴Far Away 💼</h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = { description, quantity, package: false, id: Date.now() };

//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
//   const [sortby, setSortby] = useState("input");

//   let sortedItems;

//   if (sortby === "input") sortedItems = items;

//   if (sortby === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (sortby === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             key={item.id}
//             item={item}
//             onToggleItem={onToggleItem}
//             onDeleteItem={onDeleteItem}
//           />
//         ))}
//       </ul>

//       <div className="actions">
//         <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear List</button>
//       </div>
//     </div>
//   );
// }

// function Item({ item, onDeleteItem, onToggleItem }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItem(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <p className="stats">
//         <em>Start adding items to your packing list🚀</em>
//       </p>
//     );

//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);

//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100
//           ? "You got everything! Ready to go✈️ "
//           : `💼 You have ${numItems} items on your list, and you already packed
//         ${numPacked} (${percentage}%)`}
//       </em>
//     </footer>
//   );
// }

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much the bill was?{" "}
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>{" "}
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
