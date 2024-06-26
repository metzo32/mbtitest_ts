import { useState } from "react";

import sty from '../styling'

export default function ShareUrl() {
  const [copied, setCopied] = useState(false);

  function copy() {
    // const el = document.createElement("input");
    // el.value = window.location.href;
    // document.body.appendChild(el);
    // el.select();
    // document.execCommand("copy");
    // document.body.removeChild(el);
    // setCopied(!copied);

    const el = document.createElement("input");
    el.value = "https://discordpizza.netlify.app"; // 고정된 URL 값
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(!copied);

  }

  return (
    <sty.Button className="right-margin" onClick={copy}>{!copied ? "테스트 공유하기" : "링크 복사 완료!"}</sty.Button>
  );
}