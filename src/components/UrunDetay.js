import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Badge } from 'reactstrap';

const UrunDetay = ({ urun, kapat }) => {
  if (!urun) return null;

  return (
    <Modal isOpen={true} toggle={kapat} centered size="lg" className="modal-pastel" contentClassName="border-0 shadow-lg" style={{ borderRadius: '25px' }}>
      
      {}
      <ModalHeader toggle={kapat} className="border-0 pb-0 bg-white" style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
        <span style={{ 
          color: '#6a4c93', 
          fontFamily: '"Pacifico", cursive', 
          fontSize: '1.8rem',
          paddingLeft: '10px'
        }}>
          ✨ Ürün İncelemesi
        </span>
      </ModalHeader>

      {}
      <ModalBody className="p-4 bg-white">
        <div className="row g-4 align-items-center">
          
          {}
          <div className="col-md-5">
            <div className="text-center p-4 rounded-4 position-relative" 
                 style={{ 
                   backgroundColor: '#fdf2f7', 
                   border: '2px dashed #f8bbd0' 
                 }}>
              
              {}
              <div style={{ fontSize: '5.5rem', marginBottom: '15px', textShadow: '0 5px 10px rgba(0,0,0,0.1)' }}>
                {urun.kategori === 'Ruj' ? '💄' : 
                 urun.kategori === 'Fondöten' ? '🎨' : 
                 urun.kategori === 'Far' ? '✨' : 
                 urun.kategori === 'Allık' ? '🌸' : 
                 urun.kategori === 'Eyeliner' ? '🖊️' : '🛍️'}
              </div>

              {}
              <h3 className="fw-bold mb-2" style={{ color: '#455a64', fontFamily: '"Poppins", sans-serif' }}>
                {urun.marka}
              </h3>

              {}
              <Badge pill className="px-3 py-2 shadow-sm" 
                     style={{ 
                       backgroundColor: '#fff', 
                       color: '#6a4c93', 
                       border: '1px solid #e1bee7',
                       fontSize: '0.9rem' 
                     }}>
                {urun.kategori}
              </Badge>
            </div>
          </div>

          {}
          <div className="col-md-7">
            {}
            <h2 className="fw-bold mb-2" style={{ color: '#2c3e50', fontFamily: '"Poppins", sans-serif' }}>
              {urun.ad}
            </h2>
            
            {}
            <h3 className="fw-bold mb-4" style={{ color: '#ec407a', fontSize: '2rem' }}>
              {urun.fiyat} ₺
            </h3>

            {}
            <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: '#f1f8e9', borderLeft: '5px solid #66bb6a' }}>
              <div className="d-flex align-items-center">
                 <div style={{ 
                   width: '12px', height: '12px', borderRadius: '50%', 
                   backgroundColor: parseInt(urun.stok) > 0 ? '#66bb6a' : '#ef5350',
                   marginRight: '10px',
                   boxShadow: '0 0 5px rgba(102, 187, 106, 0.5)'
                 }}></div>
                 <span className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                   {parseInt(urun.stok) > 0 ? 'Stokta Var' : 'Tükendi'}
                 </span>
                 <span className="ms-2 text-muted">({urun.stok} adet)</span>
              </div>
            </div>

            {}
            <div>
              <label className="text-uppercase text-muted fw-bold small mb-2" style={{ letterSpacing: '1px' }}>Ürün Açıklaması</label>
              <div className="p-3 rounded-3" 
                   style={{ 
                     backgroundColor: '#fff', 
                     border: '1px solid #f3e5f5', 
                     color: '#546e7a',
                     lineHeight: '1.6',
                     boxShadow: 'inset 0 0 10px rgba(0,0,0,0.02)'
                   }}>
                {urun.aciklama ? urun.aciklama : "Bu ürün için henüz detaylı bir açıklama girilmemiştir."}
              </div>
            </div>
          </div>

        </div>
      </ModalBody>

      {}
      <ModalFooter className="border-0 pt-0 pb-4 pe-4 bg-white" style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' }}>
        <Button 
          className="px-4 py-2 fw-bold shadow-sm"
          style={{ 
            backgroundColor: '#ce93d8', 
            border: 'none', 
            borderRadius: '15px',
            fontSize: '1rem',
            transition: 'all 0.2s'
          }} 
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          onClick={kapat}
        >
          Kapat
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UrunDetay;