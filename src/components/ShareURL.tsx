import React, { useState } from "react";

import sty from '../styling'

export default function ShareUrl() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = "https://discordpizza.netlify.app";
    document.body.appendChild(el);
    el.select();
    setCopied(true);
  }

  return (
    <sty.Button className="right-margin" onClick={copy}>{!copied ? "공유하기" : "복사 완료!"}</sty.Button>
  );
}