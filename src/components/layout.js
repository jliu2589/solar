import Header from './header';
import Footer from './Footer';
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
