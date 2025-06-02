import { useEffect } from 'react';

const Location = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-36338f5d-bf69-4493-a53d-aac7e5e3e3aa" data-elfsight-app-lazy></div>
  );
};

export default Location;
