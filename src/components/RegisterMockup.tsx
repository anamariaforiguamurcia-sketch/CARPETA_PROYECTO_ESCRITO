function RegisterMockup() {
  return (
    <section className="wireframe-screen">
      <div className="screen-label">
        REGISTRO
      </div>

      <div className="auth-layout">
        <div className="image-placeholder">
          <div className="placeholder-x"></div>
        </div>

        <div className="form-container">
          <h2>Crear cuenta</h2>

          <input
            type="text"
            placeholder="Nombre completo"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="password"
            placeholder="Contraseña"
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
          />

          <button className="wireframe-button">
            Registrarse
          </button>

          <p className="small-text account-text">
            ¿Ya tienes cuenta? <strong>Inicia sesión</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterMockup;
