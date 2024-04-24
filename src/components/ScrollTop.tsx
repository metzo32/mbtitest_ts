import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
    
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  // 경로가 변경될 때마다 실행

  return null;
}
