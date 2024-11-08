import { AppShell, Group, Skeleton } from '@mantine/core';
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
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
    // <>
    //   <div>
    //     <NavLink to={`shop`}>
    //       Shop
    //     </NavLink>
    //     <NavLink to={`cart`}>
    //       Cart
    //     </NavLink>
    //     <div>
    //       <Outlet />
    //     </div>
    //   </div>
    // </>
  )
}

export default App
