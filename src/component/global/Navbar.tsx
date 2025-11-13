import { Moon, Sun } from 'lucide-react'
import useStore from '../../store/useStore'
const Navbar = () => {
    const {theme, toggleTheme} = useStore();
  return (
    <div className='flex justify-between bg-[var(--bg-color)] item-center px-8 py-3'>
        <div className='text-4xl text-[var(--primary-color)] font-semibold'>
            TakeShot
        </div>
        <div className='flex gap-3 items-center'>
            <a href='https://github.com/Akash2Patil'>
                <svg className='text-[var(--primary-color)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href='https://www.linkedin.com/in/akashpatildev/'>
                <svg className='text-[var(--primary-color)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <button onClick={toggleTheme} className='shadow-lg rounded p-2 cursor-pointer'>
                {theme === "dark" ? <Moon  className='text-[var(--primary-color)]'/> : <Sun className='text-[var(--primary-color)]' />}
            </button>
        </div>
    </div>
  )
}

export default Navbar