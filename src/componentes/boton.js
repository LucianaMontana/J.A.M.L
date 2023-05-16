function cerrarSesion(){
 // return(
    //<div ClassName="cerrarSesion">
    //<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    //<label className="cerrarSesion">Cerrar Sesion</label>
    //</button>
    //</div>
//)


return (
  <div ClassName="cerrarSesion">
  <Form method="post" id="contact-form">
    {/* existing code */}

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