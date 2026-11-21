/* ── Content ───────────────────────────────────────────────────────────
   The only place to edit what the site says. A value is either a plain
   string (same in both languages) or { en: '…', vi: '…' }. Every theme
   renders from this same object. */
var CONTACT = {
  email: 'contacts.trungpt@gmail.com',
  linkedin: 'https://www.linkedin.com/in/trungit',
  github: 'https://github.com/murilegus'
};

var CONTENT = {
  name: { en: 'Trung Pham Thanh', vi: 'Phạm Thành Trung' },
  shortName: 'Trung Phạm',   // shown in the top bar; the full name goes in the tab title
  role: 'AI/Data Engineer',
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  headline: {
    en: 'I put models into production and build the data pipelines that feed them.',
    vi: 'Tôi đưa mô hình lên production và xây pipeline dữ liệu nuôi chúng.'
  },
  lead: {
    en: 'AI/Data Engineer with 4 years of experience on Google Cloud Platform: model APIs serving 100,000+ requests/day, ETL ingesting 500,000+ records/day, and today the AI data platform behind a Vietnamese real estate marketplace, at a 99%+ daily pipeline success rate.',
    vi: 'AI/Data Engineer với 4 năm kinh nghiệm trên Google Cloud Platform: API mô hình phục vụ 100.000+ request/ngày, ETL nạp 500.000+ bản ghi/ngày, và hiện phụ trách nền tảng dữ liệu AI của một sàn bất động sản Việt Nam với tỷ lệ pipeline thành công hằng ngày trên 99%.'
  },

  experience: [
    {
      when: { en: 'Jun 2025 – Present', vi: '06/2025 – nay' },
      role: 'AI Engineer',
      org: 'MOSO PROPTECH CO., LTD',
      points: [
        { en: 'Own and operate an AI-powered data platform that aggregates real estate listings nationwide, sustaining 2,000+ listings/day at a 99%+ daily job success rate.',
          vi: 'Phụ trách và vận hành nền tảng dữ liệu AI tổng hợp tin đăng bất động sản toàn quốc, duy trì 2.000+ tin/ngày với tỷ lệ job thành công hằng ngày trên 99%.' },
        { en: 'Integrated VLM and LLM models for image, text, and speech processing to enrich property data, including structured field extraction from listing photos and documents, cutting manual data entry by 60%.',
          vi: 'Tích hợp mô hình VLM và LLM xử lý ảnh, văn bản và giọng nói để làm giàu dữ liệu bất động sản, gồm trích xuất trường có cấu trúc từ ảnh và giấy tờ của tin đăng, giảm 60% việc nhập liệu thủ công.' },
        { en: 'Built 3 internal AI tools adopted by operations teams, saving an estimated 40 hours/week of manual work.',
          vi: 'Xây 3 công cụ AI nội bộ được các đội vận hành sử dụng, tiết kiệm ước tính 40 giờ làm thủ công mỗi tuần.' },
        { en: 'Containerized and deployed all services on Google Cloud Run with Docker, with automated builds and scheduled pipelines via Cloud Build and Cloud Scheduler.',
          vi: 'Đóng gói và triển khai toàn bộ dịch vụ trên Google Cloud Run bằng Docker, build tự động và chạy pipeline theo lịch qua Cloud Build và Cloud Scheduler.' }
      ]
    },
    {
      when: { en: 'Jun 2023 – May 2025', vi: '06/2023 – 05/2025' },
      role: 'Data Engineer',
      org: 'KROM CO., LTD',
      points: [
        { en: 'Deployed Data Science models to Google Cloud as containerized REST APIs (Docker, Kubernetes), serving 100,000+ requests/day for automated data enrichment, working directly with the Data Science team to take models from notebook to production.',
          vi: 'Triển khai mô hình Data Science lên Google Cloud dưới dạng REST API đóng gói container (Docker, Kubernetes), phục vụ 100.000+ request/ngày cho việc làm giàu dữ liệu tự động; làm việc trực tiếp với đội Data Science để đưa mô hình từ notebook lên production.' },
        { en: 'Orchestrated ETL pipelines with Airflow and RabbitMQ, ingesting 500,000+ records/day into PostgreSQL and delivering analysis-ready datasets to Data Analyst and Product Owner teams to power campaign operations.',
          vi: 'Điều phối pipeline ETL bằng Airflow và RabbitMQ, nạp 500.000+ bản ghi/ngày vào PostgreSQL và cung cấp dataset sẵn sàng phân tích cho đội Data Analyst và Product Owner để vận hành chiến dịch.' },
        { en: 'Designed and maintained data collection systems spanning social media, web platforms, and mobile applications.',
          vi: 'Thiết kế và bảo trì hệ thống thu thập dữ liệu từ mạng xã hội, nền tảng web và ứng dụng di động.' }
      ]
    },
    {
      when: { en: 'Jun 2022 – Feb 2023', vi: '06/2022 – 02/2023' },
      role: 'Data Engineer',
      org: 'eduplaX',
      points: [
        { en: 'Built ETL workflows integrating digitized educational content (questions, exams, and lectures with LaTeX formatting) into MongoDB, supporting a catalog of 10,000+ items.',
          vi: 'Xây luồng ETL đưa nội dung giáo dục đã số hoá (câu hỏi, đề thi, bài giảng có định dạng LaTeX) vào MongoDB, phục vụ kho nội dung 10.000+ mục.' },
        { en: 'Managed and maintained the production MongoDB database powering the learning platform; supported the Content team with bulk data loading, validation, and ongoing updates.',
          vi: 'Quản trị và bảo trì cơ sở dữ liệu MongoDB production của nền tảng học tập; hỗ trợ đội Nội dung nạp dữ liệu hàng loạt, kiểm tra và cập nhật thường xuyên.' }
      ]
    },
    {
      when: { en: 'Dec 2021 – May 2022', vi: '12/2021 – 05/2022' },
      role: 'AI Engineer Intern',
      org: 'WeAI., JSC',
      points: [
        { en: 'Applied a Vision Transformer model to convert mathematical-equation images into LaTeX code, optimizing storage and in-app rendering.',
          vi: 'Áp dụng mô hình Vision Transformer để chuyển ảnh công thức toán thành mã LaTeX, tối ưu lưu trữ và hiển thị trong ứng dụng.' },
        { en: 'Built the 100,000-pair image–LaTeX training dataset end to end, covering generation, formatting, and validation.',
          vi: 'Tự xây toàn bộ bộ dữ liệu huấn luyện 100.000 cặp ảnh–LaTeX, từ sinh dữ liệu, định dạng đến kiểm tra.' },
        { en: 'Built data digitization tools to extract educational content from heterogeneous file formats into the database.',
          vi: 'Xây công cụ số hoá để trích xuất nội dung giáo dục từ nhiều định dạng tệp khác nhau vào cơ sở dữ liệu.' }
      ]
    }
  ],

  projects: [
    { name: 'buoy', url: 'https://github.com/murilegus/buoy', tech: 'JavaScript',
      text: { en: 'A living pill for the GNOME Shell top bar that lights up only when something needs attention.',
              vi: 'Một “viên thuốc” trên thanh top bar của GNOME Shell, chỉ sáng lên khi có việc cần chú ý.' } },
    { name: 'nesrs', url: 'https://github.com/murilegus/nesrs', tech: 'Rust',
      text: { en: 'A NES emulator built as a portable emulation core with thin per-platform frontends.',
              vi: 'Trình giả lập NES, tách lõi giả lập di động khỏi lớp giao diện mỏng cho từng nền tảng.' } },
    { name: 'tinyorch', url: 'https://github.com/murilegus/tinyorch', tech: 'Python',
      text: { en: 'A tiny, zero-dependency orchestrator for single-node, item-level pipelines.',
              vi: 'Bộ điều phối pipeline nhỏ gọn, không dependency, chạy trên một node và xử lý theo từng item.' } },
    { name: 'zsh-forge', url: 'https://github.com/murilegus/zsh-forge', tech: 'Shell',
      text: { en: 'A collection of custom Zsh plugins.', vi: 'Bộ sưu tập plugin Zsh tự viết.' } }
  ],

  skills: [
    { label: { en: 'Languages', vi: 'Ngôn ngữ' }, text: 'Python, SQL' },
    { label: { en: 'AI/ML serving', vi: 'Triển khai AI/ML' },
      text: { en: 'Model deployment and serving as REST APIs (Docker, Kubernetes, Cloud Run), inference services with FastAPI, Vision Transformer, LLM and VLM integration (OpenAI API), structured outputs, OCR and speech-to-text pipelines',
              vi: 'Triển khai và phục vụ mô hình dưới dạng REST API (Docker, Kubernetes, Cloud Run), dịch vụ inference với FastAPI, Vision Transformer, tích hợp LLM và VLM (OpenAI API), structured outputs, pipeline OCR và speech-to-text' } },
    { label: { en: 'Data engineering', vi: 'Kỹ thuật dữ liệu' },
      text: { en: 'ETL/ELT pipeline design, Airflow, RabbitMQ, batch processing, large-scale web scraping and crawling',
              vi: 'Thiết kế pipeline ETL/ELT, Airflow, RabbitMQ, xử lý theo lô, web scraping và crawling quy mô lớn' } },
    { label: 'Cloud & DevOps', text: 'Google Cloud Platform (Cloud Run, Cloud Build, Cloud Scheduler), Docker, Kubernetes, CI/CD, Git' },
    { label: { en: 'Databases & search', vi: 'Cơ sở dữ liệu & tìm kiếm' }, text: 'PostgreSQL, MongoDB, Elasticsearch' },
    { label: { en: 'Frameworks & tools', vi: 'Framework & công cụ' },
      text: { en: 'FastAPI, Flask, Pydantic, AI-assisted development (Claude Code)',
              vi: 'FastAPI, Flask, Pydantic, phát triển có AI hỗ trợ (Claude Code)' } }
  ],

  education: [
    { when: '2019 – 2023',
      title: { en: 'Bachelor of Computer Science', vi: 'Cử nhân Khoa học Máy tính' },
      org: { en: 'Industrial University of Ho Chi Minh City', vi: 'Đại học Công nghiệp TP. Hồ Chí Minh' },
      text: { en: 'GPA 3.7/4.0 · 2nd Prize, Entropy Data Analytics Hackathon (2021) · Academic Incentive Scholarship (6/8 semesters)',
              vi: 'GPA 3,7/4,0 · Giải Nhì Entropy Data Analytics Hackathon (2021) · Học bổng khuyến khích học tập (6/8 học kỳ)' } }
  ]
};
