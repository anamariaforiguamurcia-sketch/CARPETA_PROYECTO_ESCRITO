function LoginMockup() {
  return (
    <section className="wireframe-screen">
      <div className="screen-label">
        INICIO DE SESIÓN
      </div>

      <div className="auth-layout">
        <div className="image-placeholder">
          <div className="placeholder-x"></div>
        </div>

        <div className="form-container">
          <h2>Iniciar sesión</h2>

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="password"
            placeholder="Contraseña"
          />

          <button className="wireframe-button">
            Ingresar
          </button>

          <p className="small-text">
            ¿Olvidaste tu contraseña?
          </p>

          <p className="small-text account-text">
            ¿No tienes cuenta? <strong>Regístrate</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginMockup;