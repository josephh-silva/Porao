import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Porao from '../../assets/porao.jpg';

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row div.aline">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Localização!</h4>
                    <span>Tv. São Pedro 652, atrás do Pátio Bélem</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Nos Ligue!</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Nos mande um email!</h4>
                    <span>porao12@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem + copyright lado a lado */}
        <div className="copyright-area">
          <div className="container container-f d-flex align-items-center justify-content-between flex-wrap">
            <div className="footer-image">
              <img src={Porao} alt="Porão" className="porao-img-copy" />
            </div>
            <div className="copyright-text text-center text-lg-left">
              <p>
                Copyright &copy; 2025, Direitos do site{' '}
                <a href="https://codepen.io/anupkumar92/">Porão Infocell</a>
              </p>
              <span className="span-footer">Desenvolvido por iTech Solutions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
