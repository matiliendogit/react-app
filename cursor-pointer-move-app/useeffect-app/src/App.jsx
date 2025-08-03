import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    console.log('App component mounted');
    const handleMouseMove = (event) => {
      const {clientX, clientY} = event;
      setPosition({x: clientX , y: clientY});

    }
    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      console.log('App component unmounted');
      window.removeEventListener('mousemove', handleMouseMove);
    }
    
  }, [enabled]);

  return (
    <main>
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        opacity: enabled ? 0.8 : 0,
        top: -20,
        left: -20,
        width: 40,
        height: 40,
        pointerEvents: 'none',
        backgroundColor: enabled ? 'rgba(219, 222, 156, 0.1)' : 'transparent',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
     <h1>Pointer Follower</h1>
     <button onClick={() => setEnabled(!enabled)}>
       {enabled ? 'Desactivar ' : 'Activar'} pointer follower
     </button>
    </main>
  )
}

export default App
