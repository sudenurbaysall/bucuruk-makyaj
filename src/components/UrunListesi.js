import React from 'react';

const UrunListesi = ({ urunler, urunSec, urunSil, urunDuzenle }) => {
  return (
    <div className="table-responsive shadow-sm rounded bg-white p-3">
      <table className="table table-hover align-middle mb-0">
        <thead className="bg-light">
          <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
            {}
            <th scope="col" className="py-3 ps-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>ÜRÜN ADI</th>
            <th scope="col" className="py-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>MARKA</th>
            <th scope="col" className="text-center py-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>KATEGORİ</th>
            <th scope="col" className="text-end py-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>FİYAT</th>
            <th scope="col" className="text-center py-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>STOK</th>
            <th scope="col" className="text-center py-3" style={{ color: '#6a4c93', fontWeight: '800', fontSize: '0.95rem' }}>İŞLEMLER</th>
          </tr>
        </thead>
        <tbody>
          {urunler.map((urun) => (
            <tr key={urun.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
              
              {}
              <td className="ps-3">
                <span style={{ color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>
                  {urun.ad}
                </span>
              </td>

              {}
              <td style={{ color: '#7f8c8d', fontSize: '0.95rem' }}>
                {urun.marka}
              </td>

              {}
              <td className="text-center">
                <span 
                  className="badge" 
                  style={{
                    backgroundColor: 
                      urun.kategori === 'Ruj' ? '#ffcdd2' :       
                      urun.kategori === 'Fondöten' ? '#ffe0b2' :  
                      urun.kategori === 'Far' ? '#bbdefb' :       
                      urun.kategori === 'Allık' ? '#f8bbd0' :     
                      urun.kategori === 'Eyeliner' ? '#e1bee7' : '#cfd8dc', 
                    color: '#546e7a',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}
                >
                  {urun.kategori}
                </span>
              </td>

              {}
              <td className="text-end" style={{ color: '#2c3e50', fontWeight: '600', fontSize: '1.1rem' }}>
                {urun.fiyat} ₺
              </td>

              {}
              <td className="text-center">
                <span style={{ 
                  fontWeight: '600', 
                  color: '#455a64', 
                  fontSize: '1rem'
                }}>
                  {urun.stok} <span style={{fontSize: '0.8rem', color: '#90a4ae', fontWeight:'400'}}>adet</span>
                </span>
              </td>

              {}
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <button 
                    className="btn btn-sm text-white shadow-sm" 
                    style={{ backgroundColor: '#9575cd', border: 'none', borderRadius: '10px', padding: '6px 12px' }} 
                    onClick={() => urunSec(urun)}
                  >
                    👁️ Detay
                  </button>

                  <button 
                    className="btn btn-sm text-white shadow-sm" 
                    style={{ backgroundColor: '#ffb74d', border: 'none', borderRadius: '10px', padding: '6px 12px' }} 
                    onClick={() => urunDuzenle(urun)}
                  >
                    ✏️ Düzenle
                  </button>

                  <button 
                    className="btn btn-sm text-white shadow-sm" 
                    style={{ backgroundColor: '#e57373', border: 'none', borderRadius: '10px', padding: '6px 12px' }} 
                    onClick={() => urunSil(urun.id)}
                  >
                    🗑️ Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrunListesi;