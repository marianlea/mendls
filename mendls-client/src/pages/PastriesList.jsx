import "./PastriesList.css";
import PastryItem from "./PastryItem";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import noise from "../assets/noise.png";

export default function PastriesList({
  pastries,
  basket,
  onBasketChange,
  footerVisible,
}) {
  const [formQuantities, setFormQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    basket.forEach((item) => {
      initialQuantities[item.id] = item.quantity || null;
    });
    setFormQuantities(initialQuantities);
  }, [basket]);

  function handleFormChange(e, pastry) {
    const id = pastry.id;
    const value = e.target.value;
    setFormQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleBasketChange(e, pastry) {
    e.preventDefault();
    const id = pastry.id;
    const quantity = formQuantities[id];
    if (!quantity || quantity < 1) {
      alert("Enter a valid item quantity");
      return;
    }
    onBasketChange({ ...pastry, quantity: Number(quantity) });
  }

  return (
    <div className="pastries-list" id="shop">
      <h5 className="pastries-title">PASTRIES</h5>
      <ul>
        {pastries.map((pastry) => (
          <li key={pastry.id}>
            <PastryItem
              pastry={pastry}
              spanSize="1rem"
              imageSize="6rem"
              titleSize="1.5rem"
            />
            <form onSubmit={(e) => handleBasketChange(e, pastry)}>
              <input
                type="number"
                value={formQuantities[pastry.id] || ""}
                onChange={(e) => handleFormChange(e, pastry)}
                name="quantity"
                min="1"
              />
              <button className="add-btn">add to basket</button>
            </form>
          </li>
        ))}
      </ul>
      <Footer color="#FFC5E8" image={noise} visible={footerVisible} />
    </div>
  );
}
