import React from 'react';

const Iletisim = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '30px' }}>
            <div className="row g-0">
              
              {}
              <div className="col-md-5 p-5 d-flex flex-column justify-content-center position-relative" 
                   style={{ background: 'linear-gradient(135deg, #ab47bc 0%, #7b1fa2 100%)' }}>
                
                {}
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>

                {}
                <h3 className="fw-bold mb-4" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 1 }}>
                  İletişim Bilgileri
                </h3>
                
                <p className="mb-5" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', zIndex: 1 }}>
                  Sorularınız, önerileriniz veya iş birlikleriniz için bize aşağıdaki kanallardan dilediğiniz zaman ulaşabilirsiniz.
                </p>

                {}
                <div className="d-flex align-items-start mb-4" style={{ zIndex: 1 }}>
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" 
                       style={{ width: '45px', height: '45px', color: '#8e24aa', fontSize: '1.2rem' }}>
                    📍
                  </div>
                  <div>
                    <span className="d-block fw-bold text-white small text-uppercase" style={{ letterSpacing: '1px', opacity: 0.8 }}>Adres</span>
                    <span className="text-white small">Güzellik Sokak No:10, Kadıköy / İstanbul</span>
                  </div>
                </div>

                {}
                <div className="d-flex align-items-center mb-4" style={{ zIndex: 1 }}>
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" 
                       style={{ width: '45px', height: '45px', color: '#8e24aa', fontSize: '1.2rem' }}>
                    📞
                  </div>
                  <div>
                    <span className="d-block fw-bold text-white small text-uppercase" style={{ letterSpacing: '1px', opacity: 0.8 }}>Telefon</span>
                    <span className="text-white small">+90 (212) 555 00 00</span>
                  </div>
                </div>

                {}
                <div className="d-flex align-items-center" style={{ zIndex: 1 }}>
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" 
                       style={{ width: '45px', height: '45px', color: '#8e24aa', fontSize: '1.2rem' }}>
                    ✉️
                  </div>
                  <div>
                    <span className="d-block fw-bold text-white small text-uppercase" style={{ letterSpacing: '1px', opacity: 0.8 }}>E-posta</span>
                    <span className="text-white small">info@bucurukkozmetik.com</span>
                  </div>
                </div>

              </div>

              {}
              <div className="col-md-7 p-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                  <h2 className="fw-bold mb-0 me-2" style={{ color: '#6a4c93' }}>Bize Yazın</h2>
                  <span style={{ fontSize: '1.5rem', color: '#ce93d8' }}>💬</span>
                </div>
                
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">Adınız Soyadınız</label>
                    <input type="text" className="form-control" placeholder="Örn: Ayşe Yılmaz" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">E-posta Adresi</label>
                    <input type="email" className="form-control" placeholder="ornek@email.com" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold small text-muted">Mesajınız</label>
                    <textarea className="form-control" rows="4" placeholder="Mesajınızı buraya yazın..."></textarea>
                  </div>

                  <button 
                    type="button" 
                    className="btn w-100 py-3 text-white fw-bold shadow-sm"
                    style={{ 
                      background: '#ce93d8',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(206, 147, 216, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    🚀 Gönder
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Iletisim;