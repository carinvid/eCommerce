import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='gray'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/login'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/register'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// const { SubMenu, Item } = Menu;

// const Header = () => {
//     const [ current, setCurrent] = useState('home')

//     const handleClick = (e) => {
//       setCurrent(e.key)
//     }

//     return (
//       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//         <Item key="home" icon={<AppstoreOutlined />}>
//           <Link to="/">Home</Link>
//         </Item>
//         <Item key="register" icon={<UserAddOutlined />} className="float-right">
//         <Link to="/register">Register</Link>
//         </Item>
//         <Item key="login" icon={<UserOutlined />} className="float-right">
//         <Link to="/login">Login</Link>
//         </Item>
        
//         <SubMenu icon={<SettingOutlined />} title="Username">
          
//             <Item key="setting:1">Option 1</Item>
//             <Item key="setting:2">Option 2</Item>
                   
//         </SubMenu>
                
//       </Menu>
//     )
// }

// export default Header
