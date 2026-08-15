function DashboardMockup() {
  return (
    <section className="wireframe-screen dashboard-screen">

      <div className="screen-label">
        DASHBOARD
      </div>

      <div className="dashboard-layout">

        <aside className="sidebar-wireframe">
          <div className="profile-placeholder"></div>

          <nav>
            <div className="nav-item">Inicio</div>
            <div className="nav-item">Mis productos</div>
            <div className="nav-item">Mis pedidos</div>
            <div className="nav-item">Mensajes</div>
            <div className="nav-item">Perfil</div>
            <div className="nav-item">Cerrar sesión</div>
          </nav>
        </aside>

        <main className="dashboard-content">

          <div className="dashboard-top">
            <h2>Resumen</h2>
            <div className="top-circle"></div>
          </div>

          <div className="summary-cards">

            <div className="summary-card">
              <div className="card-image">
                <div className="card-x"></div>
              </div>

              <div className="text-lines">
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="summary-card">
              <div className="card-image">
                <div className="card-x"></div>
              </div>

              <div className="text-lines">
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="summary-card">
              <div className="card-image">
                <div className="card-x"></div>
              </div>

              <div className="text-lines">
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="summary-card">
              <div className="card-image">
                <div className="card-x"></div>
              </div>

              <div className="text-lines">
                <span></span>
                <span></span>
              </div>
            </div>

          </div>

          <section className="recent-products">
            <h3>Productos recientes</h3>

            <div className="products-placeholder">
              <div className="big-placeholder-x"></div>
            </div>
          </section>

        </main>

      </div>
    </section>
  );
}

export default DashboardMockup;