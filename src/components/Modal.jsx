import { useGlobalData } from "../hooks/useGlobalData";
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({children}) => {
  const {Modal, setModal} = useGlobalData()
  return (
    <AnimatePresence>
      {Modal && (
        // modal frame
        <motion.aside 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%', transition:{duration:0.5, delay:0}}}
          exit={{ opacity: 0, x: '-100%', transition:{duration:0.3, delay:0.3} }}
          transition={{ type:'spring', duration: 1 }} 
          className='fixed top-0 left-0 w-full h-full bg-white/80 p-[5vw] backdrop-blur-sm'>

          {/* modal contents box */}
          <motion.div 
            initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition:{duration:0.5, delay:1} }}
						exit={{ opacity: 0, transition: { duration:0.2, delay: 0 } }}					
            className='w-full h-full'>{children}</motion.div>

          {/* close btn */}
          <motion.button 
            initial={{ opacity: 0, scale:5 }}
            animate={{ opacity: 1, scale:1, transition:{type:'spring',duration:0.5, delay:0.5} }}
						exit={{ opacity: 0, scale:3, transition: {duration:0.2, delay: 0 } }}				
            className='cursor-pointer text-xl text-black absolute top-[3vw] right-[3vw]' 
            onClick={()=>setModal(false)}>close</motion.button>
        </motion.aside>
      ) }
    </AnimatePresence>
    
  );
}

export default Modal;
