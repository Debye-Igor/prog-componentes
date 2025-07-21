import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.link}>
          <span style={styles.icon}>🏠</span>
          <span>INICIO</span>
        </Link>
        <Link to="/ejercicio1" style={styles.link}>
          <span style={styles.icon}>⚡</span>
          <span>EJERCICIO 1</span>
        </Link>
        <Link to="/ejercicios2y3" style={styles.link}>
          <span style={styles.icon}>🔧</span>
          <span>EJERCICIOS 2 Y 3</span>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #001122 100%)',
    borderBottom: '2px solid #00ff41',
    boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 24px',
    textDecoration: 'none',
    color: '#ffffff',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    position: 'relative',
    transition: 'all 0.3s ease',
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: '0',
    textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
    ':hover': {
      color: '#00ff41',
      background: 'rgba(0, 255, 65, 0.1)',
      borderColor: '#00ff41',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 255, 65, 0.3)',
      textShadow: '0 0 15px #00ff41',
    },
    ':active': {
      transform: 'translateY(0)',
    }
  },
  icon: {
    fontSize: '16px',
    filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.8))',
  }
};

export default Menu;