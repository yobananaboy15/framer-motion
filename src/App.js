import logo from './logo.svg';
import './App.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const variants = {open:{ width: 'auto', opacity: 1}, closed: {transition: {opacity: {duration: 0.1}}, width: 0, opacity: 0}}

function App() {
  const [showField, setShowField] = useState(false);

  return (
    <div className="App">
      <motion.div initial={false} animate={{ backgroundColor: showField ? "#808080" : "#FFFFFF" }} className="wrapper">
        <span onClick={() => setShowField(true)}>O</span>
        <AnimatePresence>

        {showField &&
        <motion.div variants={variants} initial='closed' animate='open' exit='closed' style={{display: 'flex'}}>
          <motion.input type="text" />
          <motion.span onClick={() => setShowField(false)}>X</motion.span>
        </motion.div>
        }
        </AnimatePresence>
      </motion.div>
      <div>hehe</div>
      <div>heh</div>
    </div>
  );
}

export default App;
