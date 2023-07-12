import Container from "./components/Container"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import CalendarPage from "./components/pages/CalendarPage"

function App() {

  return (
        <>
          <Container>
                <SideBar />
                <CalendarPage />
            </Container>
        </>
  )
}

export default App
