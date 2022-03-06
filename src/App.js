import logo from './logo.svg';
import './App.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const variants = {open: {width: 'auto', opacity: 1}, closed: {width: 0, opacity: 0}}

function App() {
  const [showField, setShowField] = useState(false);

  return (
    <div className="App">
      <motion.div initial={false} animate={{ backgroundColor: showField ? "#808080" : "#FFFFFF" }} className="wrapper">
        <span onClick={() => setShowField(true)}>O</span>
        <AnimatePresence>

        {showField &&
        <motion.div variants={variants} initial='closed' animate='open' exit='closed' style={{display: 'flex'}} transition={{duration: 0.3}}>
          <motion.input type="text" transition={{duration: 0.1}}/>
          <motion.span onClick={() => setShowField(false)} transition={{duration: 0.1}}>X</motion.span>
        </motion.div>
        }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
