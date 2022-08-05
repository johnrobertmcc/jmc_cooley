import { createRoot } from 'react-dom/client';
import React, { createElement } from 'react';
import styles from './Layout.module.css';
import './index.css';
import {
  title,
  defaultParagraph,
  contactInfo,
  btnText,
  brandName,
} from './constants/index';

function Layout() {
  const { email = null, phone = null } = contactInfo;
  return (
    <main className={styles.page}>
      <dialog className={styles.modal}>
        <h1 className={styles.title}>{title}</h1>
        <section className={styles.paragraphs}>
          {defaultParagraph?.map((paragraph, i) => {
            return createElement('p', {
              dangerouslySetInnerHTML: {
                __html: paragraph,
              },
              key: i,
            });
          })}
        </section>
        <ul className={styles.contact}>
          <li className={styles.contactInfo_phone}>
            <a
              href={`tel:${phone}`}
              className={styles.address}
              aria-label="Call for solutions."
            >
              {phone}
            </a>
          </li>
          <li className={styles.contactInfo_email}>
            <a
              href={`mailto:${email}`}
              className={styles.address}
              aria-label="Email for solutions."
            >
              {email}
            </a>
          </li>
        </ul>
        <a
          href="https://www.cooleybrand.com/"
          className={styles.redirect}
          aria-label="Visit the Cooley Group for your design needs."
        >
          {btnText}
        </a>
        <div className={styles.imgWrapper}>
          <a
            href="https://www.cooleybrand.com/about-cooley-group/"
            className={styles.logo}
            aria-label={brandName}
          />
        </div>
      </dialog>
    </main>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Layout />);
