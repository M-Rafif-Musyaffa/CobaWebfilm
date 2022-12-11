import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import duneImage from "../asset/dilan.jpeg";
import Avangers from "../asset/Avangers.jpg";
import MRS from "../asset/MRS.jpg";
import Shang from "../asset/Shang.jpg";
import SriAsih from "../asset/SriAsih.jpg";
import Wanda from "../asset/Wanda.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-white" id="trending">
          TRENDING MOVIES
        </h1>
        <Row>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={duneImage} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Dilan 1990</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Film Dilan 1990 bercerita tentang pertemuan yang dialami oleh dua remaja yang masih
                    sekolah di SMA.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Avangers} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Avangers</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Ketika musuh yang tak terduga muncul, mengancam keselamatan dan keamanan dunia, Nick Fury,
                    direktur Badan Perdamaian Internasional, dikenal sebagai S.H.I.E.L.D.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={MRS} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Mencuri Raden Shaleh</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Pencurian terbesar abad ini tinggal menghitung hari menjelang tanggal eksekusinya.
                    Komplotan sudah lengkap dan siap menjalankan misi untuk mencuri lukisan sang maestro,
                    Raden Saleh, yang berjudul Penangkapan Diponegoro.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Shang} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Shang Chi</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Shang-Chi (Simu Liu) harus menghadapi masa lalunya sebelum ia memilih untuk meninggalkan
                    dan bergabung ke dalam sebuah organisasi bernama Ten Rings.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={SriAsih} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Sri Asih</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Sri Asih berkisah tentang Alana. Alana lahir sebagai anak yatim piatu yang dibesarkan di
                    panti asuhan sejak kecil. Orangtuanya meninggalkan karena menjadi korban letusan Gunung
                    Merapi, tepat pada hari kelahirannya.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={Wanda} alt="Card image" alt="Trending Movie" className="Images" />
              <div className="bg-dark">
                <div className="m-2 p-1 text-white">
                  <Card.Title className="text-center">Wakanda Forever</Card.Title>
                  <Card.Text className="text-left" className="textSize">
                    Rakyat Wakanda kali ini akan berjuang untuk melindungi negerinya dari campur tangan
                    kekuatan dunia setelah kematian sang Raja T'Challa
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

export default Trending;
