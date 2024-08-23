import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src="/assets/logo.svg" alt="" className='logo'/>
      <ul>
        <li><a href='#about'>About us</a></li>
        <li><a href='#what'>What is GPW</a></li>
        <li><a href='#why'>Why GPW</a></li>
        <li className='btn'><a href='#contact'>Contact us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
