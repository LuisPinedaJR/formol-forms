import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &.last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      background: #f2d0a4;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Cynthia's Baby Shower 👶🏻
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/page-2" activeClassName="current-page">
        🧸
      </NavLink>
      {/* <NavLink to="/page-2" activeClassName="current-page">
        About
      </NavLink> */}
    </nav>
  </header>
)

export default Header
