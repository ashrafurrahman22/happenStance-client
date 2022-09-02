import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import '../../Styles/Header.css'
import cart from '../../assets/shopingbag.png'
import user from '../../assets/user.png'

const Header = () => {
    return (
        <div class="navbar bg-base-100 lg:py-6 py-3">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/newRelease' className='items'>New Release</Link></li>
      
      <li><Link to='/men' className='items'>MEN</Link></li>
      <li><Link to='/men' className='items'>WOMEN</Link></li>
      <li><Link to='/men' className='items'>HAPS STORIES</Link></li>
      </ul>
    </div>
    <Link to='/' id='logo' className='btn btn-ghost'>
        {/* <img id='logo' src={logo} alt="" /> */}
        HAPPENSTANCE
    </Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/newRelease' className='items'>New Release</Link></li>
      
      <li><Link to='/men' className='items'>MEN</Link></li>
      <li><Link to='/men' className='items'>WOMEN</Link></li>
      <li><Link to='/men' className='items'>HAPS STORIES</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
  <div class="dropdown dropdown-end">
      <label tabindex="0">
        <div class="w-10 mr-3 rounded-full">
          <img id='user' src={user} />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  <div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="">
        <div class="indicator">
          <img id='shoppingbag' src={cart} alt="" />
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </div>
</div>
    );
};

export default Header;