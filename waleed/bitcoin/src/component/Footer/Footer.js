
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <img
          src={`${process.env.PUBLIC_URL}/images/footer.jpg`}
          alt="bitcoin logo"
          id="footer-header"
        />
        <div className="link">
          <div>Instagram</div>
          <div>Facebook</div>
          <div>Linkedln</div>
        </div>
        <div class="end">
            <h5>Copyright &copy; 2024 Your Company</h5>

        </div>
      </div>
    </div>
  );
}
export default Footer;