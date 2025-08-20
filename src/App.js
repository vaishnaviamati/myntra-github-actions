function App() {
  return (
    <Router>
      <div className="App">
        {/* 🔥 Version Banner */}
        <div style={{ backgroundColor: '#ff4081', color: 'white', padding: '8px', textAlign: 'center' }}>
          🚀 Myntra Clone – Version 1.0
        </div>

        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
        <Route path={'/login'} component={LogIn} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/filtermen'} component={FilterMen} />

        <Footer />
        <hr />
      </div>
    </Router>
  );
}
