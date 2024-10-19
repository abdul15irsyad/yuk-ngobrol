import React from 'react';
import styles from './question-card.module.css';
import Image from 'next/image';
import { IQuestionCard } from '@/lib/question.interface';

const QuestionCard = (question: IQuestionCard) => {
  return (
    <div className={styles['question-card']}>
      <div className={styles.question}>{question.question}</div>
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
