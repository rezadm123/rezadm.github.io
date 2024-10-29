function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const package = document.getElementById("package").value;
  const terms = document.getElementById("terms").checked;

  let message = "";

  if (!name) {
    message += "Harap masukkan nama Anda.\n";
  }
  if (!email) {
    message += "Harap masukkan email Anda.\n";
  }
  if (!password) {
    message += "Harap masukkan password Anda.\n";
  }
  if (!package) {
    message += "Harap pilih paket berlangganan.\n";
  }
  if (!terms) {
    message += "Anda harus menyetujui syarat dan ketentuan.\n";
  }

  if (message) {
    // Menampilkan pesan kesalahan
    document.getElementById("message").innerText = message;
    return false; // Mencegah pengiriman formulir
  }

  // Menampilkan pesan konfirmasi
  document.getElementById("message").innerText = `Pendaftaran berhasil!\nNama: ${name}\nEmail: ${email}\nPaket: ${package}`;
  return false; // Mencegah pengiriman formulir untuk contoh ini
}
