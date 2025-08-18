export default function StoreLink() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
  }

  return (
    <a
      className="nav-link text-secondary fs-6 fw-semibold ms-2"
      href={storeLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Recharge &amp; Bill payments
    </a>
  );
}