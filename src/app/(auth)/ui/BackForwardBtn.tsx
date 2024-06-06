'use client'
import { motion } from 'framer-motion';
import { IconArrowBack, IconLogin2 } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';


export default function BackForwardBtn({type }: { type: string}) {
  const url = usePathname()
  const router = useRouter()
  const [types, setTypes] = useState(type);
  const [urls, setUrls] = useState('');
  
  useEffect(() => {
    url === '/signin' ? setUrls('/signup') : setUrls('/signin')
  }, [url])
  return(
    <>
    {types === 'back' ? (
      <button
        onClick={()=>router.push('/')}
        data-cursor-pointer
        className="relative flex items-center p-2 text-lg font-semibold bg-transparent border-none"
      >
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block mr-2"
          data-cursor-pointer
        >
          <div data-cursor-pointer className='flex flex-row items-center gap-4'>
            <IconArrowBack data-cursor-pointer />
            <span data-cursor-pointer>/back</span>
          </div>
        </motion.div>
      </button>
    ):(
      <button
        onClick={()=>{router.push(urls)}}
        data-cursor-pointer
        className="relative flex items-center p-2 text-lg font-semibold bg-transparent border-none"
      >
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block mr-2"
          data-cursor-pointer
        >
          <div data-cursor-pointer className='flex flex-row items-center gap-4'>
            <span data-cursor-pointer>{urls}</span>
            <IconLogin2 data-cursor-pointer />
          </div>
        </motion.div>
      </button>
    )}
    </>
  )
}
