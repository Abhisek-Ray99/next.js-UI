import Navbar from '../../components/navbar/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
  </>
)

export default Layout