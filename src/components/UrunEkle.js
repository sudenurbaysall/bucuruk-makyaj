import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function UrunEkle({ urunEkle, duzenlenecekUrun, urunGuncelle, duzenlemeIptal }) {
  const [yeniUrun, setYeniUrun] = useState({
    ad: '',
    kategori: '',
    fiyat: '',
    stok: '',
    marka: '',
    aciklama: ''
  });

  useEffect(() => {
    if (duzenlenecekUrun) {
      setYeniUrun({
        ad: duzenlenecekUrun.ad || '',
        kategori: duzenlenecekUrun.kategori || '',
        fiyat: duzenlenecekUrun.fiyat || '',
        stok: duzenlenecekUrun.stok || '',
        marka: duzenlenecekUrun.marka || '',
        aciklama: duzenlenecekUrun.aciklama || ''
      });
    } else {
      setYeniUrun({
        ad: '',
        kategori: '',
        fiyat: '',
        stok: '',
        marka: '',
        aciklama: ''
      });
    }
  }, [duzenlenecekUrun]);

  const handleChange = (e) => {
    setYeniUrun({
      ...yeniUrun,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!yeniUrun.ad || !yeniUrun.kategori || !yeniUrun.fiyat || !yeniUrun.marka) {
      alert('⚠️ Lütfen zorunlu alanları doldurun!');
      return;
    }

    if (duzenlenecekUrun) {

      urunGuncelle({
        ...duzenlenecekUrun,
        ...yeniUrun,
        fiyat: parseFloat(yeniUrun.fiyat),
        stok: parseInt(yeniUrun.stok) || 0
      });
    } else {

      urunEkle({
        ...yeniUrun,
        fiyat: parseFloat(yeniUrun.fiyat),
        stok: parseInt(yeniUrun.stok) || 0
      });


      setYeniUrun({
        ad: '',
        kategori: '',
        fiyat: '',
        stok: '',
        marka: '',
        aciklama: ''
      });
    }
  };

  return (
    <div className="form-card">
      <h4>
        <span className="emoji-icon">{duzenlenecekUrun ? '✏️' : '➕'}</span>
        {duzenlenecekUrun ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}
      </h4>
      {duzenlenecekUrun && (
        <div style={{
          background: 'rgba(251, 191, 36, 0.2)',
          border: '2px solid rgba(251, 191, 36, 0.5)',
          borderRadius: '15px',
          padding: '10px 15px',
          marginBottom: '20px',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 600,
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)'
        }}>
          ⚠️ Düzenleme Modu: {duzenlenecekUrun.ad}
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="ad" style={{ fontWeight: 'bold', color: '#fff' }}>
            💄 Ürün Adı *
          </Label>
          <Input
            type="text"
            name="ad"
            id="ad"
            required 
            value={yeniUrun.ad}
            onChange={handleChange}
            placeholder="Örn: Mat Ruj - Kırmızı"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label for="marka" style={{ fontWeight: 'bold', color: '#fff' }}>
            🏷️ Marka *
          </Label>
          <Input
            type="text"
            name="marka"
            id="marka"
            required 
            value={yeniUrun.marka}
            onChange={handleChange}
            placeholder="Örn: MAC"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label for="kategori" style={{ fontWeight: 'bold', color: '#fff' }}>
            📂 Kategori *
          </Label>
          <Input
            type="select"
            name="kategori"
            id="kategori"
            required 
            value={yeniUrun.kategori}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Kategori Seçin</option>
            <option value="Ruj">💋 Ruj</option>
            <option value="Fondöten">🎨 Fondöten</option>
            <option value="Maskara">👁️ Maskara</option>
            <option value="Far">✨ Far</option>
            <option value="Allık">🌸 Allık</option>
            <option value="Eyeliner">🖊️ Eyeliner</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="fiyat" style={{ fontWeight: 'bold', color: '#fff' }}>
            💰 Fiyat (₺) *
          </Label>
          <Input
            min="0" 
            step="0.01"
            type="number"
            name="fiyat"
            id="fiyat"
            required 
            value={yeniUrun.fiyat}
            onChange={handleChange}
            placeholder="89.90"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label for="stok" style={{ fontWeight: 'bold', color: '#fff' }}>
            📦 Stok Adedi
          </Label>
          <Input
            min="0" 
            type="number"
            name="stok"
            id="stok"
            value={yeniUrun.stok}
            onChange={handleChange}
            placeholder="50"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label for="aciklama" style={{ fontWeight: 'bold', color: '#fff' }}>
            📝 Açıklama
          </Label>
          <Input
            type="textarea"
            name="aciklama"
            id="aciklama"
            value={yeniUrun.aciklama}
            onChange={handleChange}
            placeholder="Ürün hakkında kısa açıklama"
            className="form-control"
            rows="3"
          />
        </FormGroup>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
       
          <button 
            type="submit" 
            className="btn shadow-sm"
            style={{
              backgroundColor: duzenlenecekUrun ? '#ffb74d' : '#81c784', 
              border: 'none',
              borderRadius: '20px',
              color: 'white',
              padding: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.5px',
              transition: 'transform 0.2s ease',
              flex: 1 
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {duzenlenecekUrun ? '💾 Değişiklikleri Kaydet' : '✨ Ürünü Ekle'}
          </button>

         
          {duzenlenecekUrun && (
            <button 
              type="button"
              onClick={duzenlemeIptal}
              className="btn shadow-sm"
              style={{
                backgroundColor: '#e57373', 
                border: 'none',
                borderRadius: '20px',
                color: 'white',
                padding: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'transform 0.2s ease',
                flex: 1
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              ❌ Vazgeç
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default UrunEkle;