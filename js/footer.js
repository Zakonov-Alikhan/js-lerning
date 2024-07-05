export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'page-section mt-5 p-5'; // Добавляем нужные классы
    footer.innerHTML = `
        <div class="container">
            <div class="row align-items-center">
                <!-- Social Links -->
                <div class="footer2-soc-a right">
                </div>

                <!-- Copyright -->
                <div class="row align-items-center me-auto ms-auto">
                    <span class="footer-text">©OОО Moya Oborona, 2024</span>
                </div>

            </div>
        </div>
    `;
    return footer;
  }