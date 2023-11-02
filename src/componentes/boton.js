function cerrarSesion(){



return (
  <div ClassName="cerrarSesion">
  <Form method="post" id="contact-form">
    

    <p>
      <button type="submit">Cerrar Sesion</button>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Cerrar Sesion
      </button>
    </p>
  </Form>
  </div>
);

  
}