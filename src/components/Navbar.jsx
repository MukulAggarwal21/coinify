import { useState } from 'react'
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
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchValue)
  }

  return (
    <>
      <CNavbar expand="lg" className="bg-gray-800 h-20 text-white text-md">
        <CContainer fluid>
          <CNavbarBrand className="text-white font-bold font-serif text-9xl ml-10 pr-4" href="/">
            <h1>Coinify</h1>
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto">
              <CNavItem>
                <CNavLink className="text-white hover:underline mr-3" href="/" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="text-white hover:underline mr-3" href="/News2">
                  Link
                </CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle className="text-white hover:underline mr-3" color="secondary">
                  Coins
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">All Categories</CDropdownItem>
                  <CDropdownItem href="#">Showroom</CDropdownItem>
                  <CDropdownItem href="#">Top Gainers</CDropdownItem>
                  <CDropdownItem href="#">Top Loosers</CDropdownItem>
                  <CDropdownItem href="#">Recently Added</CDropdownItem>
                  <CDropdownItem href="#">Trending Tokens to Watch</CDropdownItem>
                  <CDropdownItem href="#">Most Popular</CDropdownItem>
                  <CDropdownItem href="#">Coin Launches</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink className="text-white hover:underline mr-3" href="/News">
                  Crypto News
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex" onSubmit={handleSearch}>
              <CFormInput
                type="search"
                className="me-2"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
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