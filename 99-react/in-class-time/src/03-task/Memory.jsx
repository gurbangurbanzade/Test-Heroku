import React from "react";
import { useState } from "react";
export default function Memory() {
  // Write your code here.
  const [tip, setTip] = useState({ bill: 50, perc: 18, peop: 1 });
  return (
    <>
      {/* Write your code here. */}
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        min={0}
        type="number"
        value={tip.bill}
        onChange={(e) => setTip({ ...tip, bill: Number(e.target.value) })}
      />
      <label htmlFor="bill1">Tip Percentage</label>
      <input
        id="bill1"
        min={0}
        max={100}
        type="number"
        value={tip.perc}
        onChange={(e) => setTip({ ...tip, perc: Number(e.target.value) })}
      />
      <label htmlFor="bill2">Number of People</label>
      <input
        id="bill2"
        min={1}
        type="number"
        value={tip.peop}
        onChange={(e) => setTip({ ...tip, peop: Number(e.target.value) })}
      />
      <p>
        Total Tip:
        {tip.bill == "" || tip.perc == "" || tip.peop == ""
          ? "-"
          : "$" + ((tip.bill * tip.perc) / 100).toFixed(2)}
      </p>
      <p>
        Tip Per Person:
        {tip.bill == "" || tip.perc == "" || tip.peop == ""
          ? "-"
          : "$" + ((tip.bill * tip.perc) / 100 / tip.peop).toFixed(2)}
      </p>
    </>
  );
}
