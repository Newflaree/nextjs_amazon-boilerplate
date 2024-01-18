
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
     <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Compra en Amazon</h4>

            <p>
              Este sitio web es un nicho dedicado a los drones. Recomendamos productos a través de enlaces de afiliados de Amazon, lo que significa que recibimos una pequeña comisión por las compras realizadas a través de nuestros enlaces. Al hacer clic en un enlace y realizar una compra, tú apoyas este sitio web y nos permites continuar brindando contenido de calidad sobre drones.
            </p>
            <p>
              Para más información sobre las condiciones de compra en Amazon, te recomendamos revisar los <a href="https://www.amazon.com/gp/help/customer/display.html/?nodeId=508088" target='_blank' className='inter-link'>términos y condiciones</a> de Amazon.
            </p>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <p className='text-center'>
              &copy; { currentYear } DronExperts. Todos los derechos reservados.
            </p>
            <p className='text-center'>
              Creado por <a href='#' target='_blank' className='inter-link'>NWFL Soluciones de Software</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
