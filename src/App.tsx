import { AppShell, Group } from '@mantine/core';
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <NavLink to={`shop`}>
            Shop
          </NavLink>
          <NavLink to={`cart`}>
            Cart
          </NavLink>
          <NavLink to={`form`}>
            Form
          </NavLink>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
