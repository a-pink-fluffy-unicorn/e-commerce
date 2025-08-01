import { Check, Info, Search, ShoppingCart, Heart, User, Menu } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleCartClick = () => {
    if (window.location.pathname === '/shoppingCart') {
      navigate('/')
    } else {
      navigate('/shoppingCart')
    }
  }
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)

  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#ffffff]'>
      <div className='navbar_top w-full flex items-center h-[45px] justify-center bg-[#ffffff]'>
        <div className='container flex justify-between items-center'>
          <p className='text-sm flex items-center gap-1 font-inter font-normal text-gray-500 capitalize'><Check />
            {t('header.shipping')}
          </p>
          <div className='navbar_top_right  items-center gap-3 lg:flex md:flex hidden'>
            <LanguageSelector />
            <button><Link className='text-sm text-gray-500 font-inter font-normal capitalize'>Faqs</Link></button>
            <button><Link className='flex items-center gap-1 text-sm text-gray-500 font-inter font-normal capitalize'> <Info /></Link></button>
          </div>
        </div>
      </div>
      <div className='navbar-middle w-full flex items-center justify-center bg-white h-[45px] border-t border-gray-200'>
        <div className='container px-4 gap-2 flex justify-between items-center md:justify-between lg:justify-between'>
          <Link to='/'><h1 className='text-4xl font-extrabold text-gray-500 mb-2'>BE-U</h1></Link>

          <button onClick={handleMenu} className='block md:hidden lg:hidden cursor-pointer'>
            <Menu color='#4a5565'/>
          </button>
          <div className='hidden lg:flex md:flex items-center search_box justify-center'>
            <form action='#' className=' w-[400px] h-[35px] relative'>
              <input type='text' placeholder={t('header.search')} className=' w-full h-full bg-white border-b border-gray-200 text-pink-500 pl-2 outline-none focus:outline-none' />
              <button className='absolute right-4 top-[5px] cursor-pointer'><Search size='24px' color='#272343' /></button>
            </form>
          </div>
          {/* navbar middle right  */}
          <div className='hidden navbar_middle_right w-auto lg:flex md:flex items-center gap-1'>
            <button className='capitalize w-[70px] cursor-pointer p-2 flex bg-transparent border-none shadow-none' onClick={handleCartClick}>
              <ShoppingCart color='#574c41' />
              <div className='badge border-none text-white badge-sm bg-pink-600'>{cartTotalQuantity}</div>
            </button>
            <button className='btn capitalize  bg-transparent border-none shadow-none'>
              <Heart color='#574c41' />
            </button>

            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn m-1  bg-transparent border-none shadow-none'><User color='#574c41' /></div>
              <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
                <li>
                  <Link>
                    {t('header.account')}
                  </Link>
                </li>
                <li>
                  <Link>
                    {t('header.logout')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='lg:hidden md:hidden w-full bg-white z-50 border-b border-gray-200'>
          <div className='flex flex-col items-center'>
             <form action='#' className=' w-full h-[35px] relative px-4'>
              <input type='text' placeholder={t('header.search')} className=' w-full h-full bg-white border-b border-gray-200 text-pink-500 pl-2 outline-none focus:outline-none' />
              <button className='absolute right-4 top-[5px] cursor-pointer'><Search size='24px' color='#272343' /></button>
            </form>
            <Link to='/' className='py-2 text-1xl font-bold  text-gray-600'>
              {t('menu.home')}
            </Link>
            <Link to='/products' className='py-2 text-1xl font-bold text-gray-600'>
              {t('menu.products')}
            </Link>
            <Link to='/about' className='py-2 text-1xl font-bold  text-gray-600'>
              {t('menu.about')}
            </Link>
            <Link to='/contact' className='py-2 text-1xl font-bold  text-gray-600'>
              <h2> {t('menu.contact')} </h2>
            </Link>
          </div>
        </div>
      )}
      <div />
    </div>
  )
}

export default Navbar
