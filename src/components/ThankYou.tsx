import React, { useState } from "react";

import sty from '../styling'

export default function ThankYou() {
  const [thank, setThank] = useState(false);

  function thankyou() {
    setThank(!thank)
  }
 

  return (
    <sty.Button onClick={thankyou}>{!thank ? "매체 최고야" : "고마와요!"}</sty.Button>
  );
}