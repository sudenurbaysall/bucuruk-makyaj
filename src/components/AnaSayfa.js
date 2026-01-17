import React, { useState } from 'react';
import UrunListesi from './UrunListesi';
import UrunEkle from './UrunEkle';
import UrunDetay from './UrunDetay';

function AnaSayfa({ urunler, urunEkle, urunSil, urunDuzenle, duzenlenecekUrun, urunGuncelle, duzenlemeIptal }) {
  
  const [aramaMetni, setAramaMetni] = useState("");

  const [secilenUrun, setSecilenUrun] = useState(null);


  const filtrelenmisUrunler = urunler.filter((urun) => {
    const aranan = aramaMetni.toLowerCase();
    return (
      urun.ad.toLowerCase().includes(aranan) ||       
      urun.marka.toLowerCase().includes(aranan) ||    
      urun.kategori.toLowerCase().includes(aranan)    
    );
  });


  const toplamStok = urunler.reduce((acc, urun) => acc + (parseInt(urun.stok) || 0), 0);
  const ortalamaFiyat = urunler.length > 0 
    ? (urunler.reduce((acc, urun) => acc + (parseFloat(urun.fiyat) || 0), 0) / urunler.length).toFixed(2) 
    : 0;

  return (
    <div>
      {}
      {secilenUrun && (
        <UrunDetay 
          urun={secilenUrun} 
          kapat={() => setSecilenUrun(null)} 
        />
      )}

      {}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="d-flex align-items-center p-4 shadow-sm rounded bg-white" style={{ borderLeft: '5px solid #ff8a80' }}>
            <div className="fs-1 me-3">💄</div>
            <div>
              <h6 className="text-muted mb-0">Toplam Ürün</h6>
              <h2 className="mb-0 fw-bold" style={{ color: '#ff8a80' }}>{urunler.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="d-flex align-items-center p-4 shadow-sm rounded bg-white" style={{ borderLeft: '5px solid #4db6ac' }}>
            <div className="fs-1 me-3">📦</div>
            <div>
              <h6 className="text-muted mb-0">Toplam Stok</h6>
              <h2 className="mb-0 fw-bold" style={{ color: '#4db6ac' }}>{toplamStok}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="d-flex align-items-center p-4 shadow-sm rounded bg-white" style={{ borderLeft: '5px solid #ba68c8' }}>
            <div className="fs-1 me-3">💰</div>
            <div>
              <h6 className="text-muted mb-0">Ortalama Fiyat</h6>
              <h2 className="mb-0 fw-bold" style={{ color: '#ba68c8' }}>{ortalamaFiyat} ₺</h2>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="row">
        {}
        <div className="col-md-4 mb-4">
          <UrunEkle 
            urunEkle={urunEkle}
            duzenlenecekUrun={duzenlenecekUrun}
            urunGuncelle={urunGuncelle}
            duzenlemeIptal={duzenlemeIptal}
          />
        </div>

        {}
        <div className="col-md-8">
          <div className="mb-3 position-relative">
            <input 
              type="text" 
              className="form-control shadow-sm"
              placeholder="🔍 Ürün adı, marka veya kategori ara..." 
              value={aramaMetni}
              onChange={(e) => setAramaMetni(e.target.value)}
              style={{ borderRadius: '20px', padding: '15px 20px', border: 'none', backgroundColor: '#fff', color: '#555' }}
            />
            {aramaMetni && filtrelenmisUrunler.length === 0 && (
              <div className="alert alert-warning mt-2 shadow-sm border-0 rounded-3">
                 😞 Aradığınız kriterlere uygun ürün bulunamadı.
              </div>
            )}
          </div>

          <UrunListesi 
            urunler={filtrelenmisUrunler} 
            urunSec={(urun) => setSecilenUrun(urun)} 
            urunSil={urunSil}
            urunDuzenle={urunDuzenle}
          />
        </div>
      </div>
    </div>
  );
}

export default AnaSayfa;