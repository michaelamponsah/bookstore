import React from 'react';
import Card from '../card/Card';
import styles from './Book.module.css';

const Book = () => (
  <Card>
    <div className={`${styles['stats-details-wrapper']}`}>
      <div className={`${styles['book-details']}`}>
        <div className={`${styles['book-details']}`}>
          <span className={styles.genre}>Action</span>
          <h3 className={`${styles['book-title']}`}>The Hunger Games</h3>
          <p className={`${styles['author-name']}`}>Suzanne Collins</p>
        </div>
        <div className={styles.comments}>
          Comments | Remove | Edit
        </div>
      </div>
      <div>Stats 80%</div>
    </div>
    <div className={`${styles['progress-section']}`}>
      Current Chapter
      <span>Chapter 17</span>
      <button type="button">update progress</button>
    </div>
  </Card>
);

export default Book;
