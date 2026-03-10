import { useState } from "react";
import { submitContactForm } from "../../services/contactApi";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.company ||
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.project
    ) {
      alert("請填寫所有必填欄位");
      return;
    }

    try {
      await submitContactForm(formData);

      alert("表單已送出，感謝您！");
      setFormData({
        company: "",
        title: "",
        name: "",
        phone: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.error("提交失敗", error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src="./images/contact/contactus.jpg" alt="form visual" />
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>公司名稱</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>您的職稱</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>聯絡人姓名</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>聯絡電話</label>
            <input
              type="text"
              name="phone"
              pattern="[0-9]{8,15}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>電子信箱</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>諮詢項目</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            >
              <option value="">請選擇項目</option>
              <option value="電力交易平台">電力交易平台</option>
              <option value="綠電及憑證交易">綠電及憑證交易</option>
              <option value="節能服務｜AIoT 智慧能效管理">
                節能服務｜AIoT 智慧能效管理
              </option>
              <option value="創能服務">創能服務</option>
              <option value="儲能服務">儲能服務</option>
              <option value="充電樁">充電樁</option>
              <option value="全方位低碳能源服務">全方位低碳能源服務</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>諮詢內容</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            送出
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
