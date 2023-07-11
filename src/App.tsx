import Container from "./components/Container"
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
