import ListaProductos from '../components/ListaProductos/ListaProductos';

const Ejercicio1 = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Ejercicio 1: Listado de Productos</h1>
      <p>Exámen programación de componentes</p>
      
      <div style={{alignItems:'center', justifyContent:'center'}}>
        <ListaProductos />
      </div>
      
    </div>
  );
};

export default Ejercicio1;
