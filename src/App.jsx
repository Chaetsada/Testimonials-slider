import "./App.css";
import { useState } from "react";
import TestimonialOne from "./Components/TestimonialTwo";
import TestimonialTwo from "./Components/TestimonialOne";

function App() {
  const [isActive,setIsActive] = useState(false);
  const handleToggle = () => setIsActive(!isActive);

  return (
    <section>
      <div className="container mx-auto relative min-h-screen flex flex-col">
        {isActive ? 
          <TestimonialOne handleToggle={handleToggle}/> :
          <TestimonialTwo handleToggle={handleToggle}/>
        }
      </div>
    </section>
  );
}

export default App;
