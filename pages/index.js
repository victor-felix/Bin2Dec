import React, { useState, useCallback } from "react";

const index = () => {
  const [binary, setBinary] = useState(null);
  const [decimal, setDecimal] = useState(null);

  const converter = useCallback(() => {
    setDecimal(parseInt(binary, 2));
  }, [binary]);

  return (
    <>
      <input type="text" onChange={(event) => setBinary(event.target.value)} />
      <button onClick={() => converter()}>Converter</button>
      <div>Decimal: {decimal}</div>
    </>
  );
};

export default index;
