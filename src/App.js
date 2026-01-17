import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'reactstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navi from './components/Navi';
import AnaSayfa from './components/AnaSayfa';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';

function App() {
  const [urunler, setUrunler] = useState([]);
  const [seciliUrun, setSeciliUrun] = useState(null);
  const [duzenlenecekUrun, setDuzenlenecekUrun] = useState(null);
  const [mesaj, setMesaj] = useState(null);

  // Uygulama açıldığında ürünleri getirir
  useEffect(() => {
    fetch('http://localhost:3001/urunler')
      .then(response => response.json())
      .then(data => setUrunler(data))
      .catch(error => {
        console.error('Veri çekme hatası:', error);
        setMesaj({ tip: 'danger', icerik: 'Veriler yüklenirken hata oluştu!' });
      });
  }, []);

  const urunSec = (urun) => {
    setSeciliUrun(urun);
  };

  const detayKapat = () => {
    setSeciliUrun(null);
  };

  const urunEkle = (yeniUrun) => {
    fetch('http://localhost:3001/urunler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(yeniUrun)
    })
      .then(response => response.json())
      .then(eklenenUrun => {
        setUrunler([...urunler, eklenenUrun]);
        setMesaj({ tip: 'success', icerik: 'Ürün başarıyla eklendi!' });
        setTimeout(() => setMesaj(null), 3000);
      })
      .catch(error => {
        console.error('Ürün ekleme hatası:', error);
        setMesaj({ tip: 'danger', icerik: 'Ürün eklenirken hata oluştu!' });
      });
  };

  const urunSil = (id) => {
    if (window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      fetch(`http://localhost:3001/urunler/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          setUrunler(urunler.filter(urun => urun.id !== id));
          setMesaj({ tip: 'info', icerik: 'Ürün silindi!' });
          setTimeout(() => setMesaj(null), 3000);

          if (seciliUrun && seciliUrun.id === id) {
            setSeciliUrun(null);
          }
          if (duzenlenecekUrun && duzenlenecekUrun.id === id) {
            setDuzenlenecekUrun(null);
          }
        })
        .catch(error => {
          console.error('Ürün silme hatası:', error);
          setMesaj({ tip: 'danger', icerik: 'Ürün silinirken hata oluştu!' });
        });
    }
  };

  const urunDuzenle = (urun) => {
    setDuzenlenecekUrun(urun);
    setSeciliUrun(null); 
  };

  const urunGuncelle = (guncellenmisUrun) => {
    fetch(`http://localhost:3001/urunler/${guncellenmisUrun.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guncellenmisUrun)
    })
      .then(response => response.json())
      .then(guncellenmis => {
        setUrunler(urunler.map(urun => urun.id === guncellenmis.id ? guncellenmis : urun));
        setDuzenlenecekUrun(null);
        setMesaj({ tip: 'success', icerik: 'Ürün başarıyla güncellendi!' });
        setTimeout(() => setMesaj(null), 3000);
      })
      .catch(error => {
        console.error('Ürün güncelleme hatası:', error);
        setMesaj({ tip: 'danger', icerik: 'Ürün güncellenirken hata oluştu!' });
      });
  };

  const duzenlemeIptal = () => {
    setDuzenlenecekUrun(null);
  };

  return (
    <div className="App">
      <Navi />
      <Container className="content-container">
        {mesaj && (
          <Alert color={mesaj.tip} className="mt-3">
            {mesaj.icerik}
          </Alert>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <AnaSayfa
                urunler={urunler}
                urunEkle={urunEkle}
                urunSil={urunSil}
                urunSec={urunSec}
                seciliUrun={seciliUrun}
                detayKapat={detayKapat}
                urunDuzenle={urunDuzenle}
                duzenlenecekUrun={duzenlenecekUrun}
                urunGuncelle={urunGuncelle}
                duzenlemeIptal={duzenlemeIptal}
              />
            }
          />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;