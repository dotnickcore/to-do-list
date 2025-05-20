function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 text-center">
        <hr className="border-gray-200 my-4" />
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by DotNickCore
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer