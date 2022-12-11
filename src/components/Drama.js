import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Century from "../asset/Drama/Century.jpg";
import CTS from "../asset/Drama/CTS.jpg";
import DarkS from "../asset/Drama/DarkS.jpg";
import Miracle from "../asset/Drama/Miracle.jpg";
import Habibie from "../asset/Drama/Habibie.jpeg";
import Sherina from "../asset/Drama/Sherina.jpg";

const Drama = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-white" id="drama">
          DRAMA MOVIES
        </h1>
        <Row>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Century} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">20th Century Girl</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Pada 1999, seorang gadis remaja memerhatikan seorang cowok di sekolah demi sahabatnya yang
                    terpesona. Lalu, ia sendiri jatuh cinta.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={CTS} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Cek Toko Sebelah</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Setelah Erwin menerima tawaran kerja di Singapura, ayahnya sakit dan butuh dirinya untuk
                    meneruskan usaha toko. Sementara Yohan, kakaknya yang kurang bertanggung jawab, merasa
                    ayahnya pilih kasih.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={DarkS} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Dark Society</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    sekelompok remaja yang mendapati seisi kota hilang secara misterius. Sekelompok remaja
                    tersebut merupakan murid-murid SMA West Ham, Connecticut, yang awalnya meninggalkan kota
                    West Ham untuk studi wisata selama 10 hari. Namun saat kembali lantaran jalan ke
                    perkemahan ditutup, West Ham menjadi kota mati.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Miracle} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Miracle: Letters to the President</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Penduduk desa harus berjalan di atas rel kereta api untuk mencapai tujuan ke tempat lain.
                    Mengingat jadwal kereta api yang tidak dapat diprediksi, warga desa harus berhati-hati
                    setiap melewati rel kereta tersebut
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Habibie} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Habibie & Ainun</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Kisah tentang Presiden ketiga Indonesia dan ibu negara. Kisah tentang Habibie dan Ainun.
                    Rudy Habibie seorang jenius ahli pesawat terbang yang punya mimpi besar: berbakti kepada
                    bangsa Indonesia dengan membuat truk terbang untuk menyatukan Indonesia.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Sherina} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Sherina</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Sherina sedih harus pindah ke Bandung mengikuti ayahnya. Di sekolah baru, Sadam, si anak
                    lelaki sok, selalu mengganggunya. Namun, permusuhan mereka berubah jadi persahabatan
                    ketika keduanya diculik.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Drama;
