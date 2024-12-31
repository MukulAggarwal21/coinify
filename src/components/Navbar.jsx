import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
function Navbar() {
    const [visible, setVisible] = useState(false)

    return (
        <>
         <CNavbar expand="lg" className=" bg-black  h-20 text-white text-md">
      <CContainer fluid>
        <CNavbarBrand className=' text-white font-bold font-serif  text-7xl  bg-yellow-700' href="/">Coinify</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem  >
              <CNavLink className=' text-white' href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink className=' text-white' href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle className=' text-white' color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" className=' text-white'  disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="info" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>

        </>
    )
}

export default Navbar
