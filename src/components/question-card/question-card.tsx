import React from 'react';
import styles from './question-card.module.css';
import Image from 'next/image';
import { IQuestionCard } from '@/lib/question.interface';

const QuestionCard = (question: IQuestionCard) => {
  return (
    <div className={styles['question-card']}>
      <div className={styles.title} style={{ color: question.category.color }}>
        Yuk Ngobrol
      </div>
      <div
        className={styles.question}
        style={{ borderColor: `${question.category.color}55` }}
      >
        {['top-left', 'bottom-right'].map((position, index) => (
          <div key={index} className={`${styles.quote} ${styles[position]}`}>
            <Image
              src="/images/quote.png"
              alt="quote sign"
              width={100}
              height={100}
            />
          </div>
        ))}
        <span>{question.question}</span>
      </div>
      <div
        className={styles.category}
        style={{ backgroundColor: question.category.color }}
      >
        <Image
          src={`/${question.category.logo?.path}/${question.category.logo?.filename}`}
          alt={question.category.name}
          width={100}
          height={100}
        />
        <span>{question.category.name}</span>
      </div>
    </div>
  );
};

export default QuestionCard;
