import Card from './components/ui/Card';
import Container from './components/ui/Container';
import Dashboard from './components/ui/Dashboard';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import ToDoProvider from './context/ToDoContext';

function App() {
  return (
    <>
      <ToDoProvider>
        <Container>
          <Card>
            <Header />
            <Dashboard />
            <Footer />
          </Card>
        </Container>
      </ToDoProvider>
    </>
  );
}

export default App;
