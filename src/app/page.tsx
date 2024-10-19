'use client';

import Card from '@/components/question-card/question-card';
import { useQuestionStore } from '@/lib/question-store';
import { IQuestionCard } from '@/lib/question.interface';
import { shuffle } from '@/utils/array.util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './page.module.css';
import { figtree } from '@/lib/font';
import { IconRefresh } from '@tabler/icons-react';

export default function Home() {
  const { list, setList } = useQuestionStore();
  const {
    data: questions,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['questionts'],
    queryFn: async () => {
      const response = (
        await axios.get<{ data: IQuestionCard[] }>('/api/questions')
      )?.data?.data;
      return response;
    },
    enabled: false,
    staleTime: 0,
  });
  useEffect(() => {
    if (isSuccess) setList(shuffle(questions));
  }, [isSuccess]);
  useEffect(() => {
    const persistedList = localStorage.getItem('questions')
      ? JSON.parse(localStorage.getItem('questions')!)?.['state']
      : null;
    if (!persistedList || persistedList?.list?.length === 0) refetch();
  }, []);

  const handleButtonRandom = () => {
    setList(shuffle(list));
  };

  return (
    <div className={styles.container}>
      {list.length > 0 ? (
        <>
          <div className={styles.question}>
            {list?.slice(0, 1)?.map((question, index) => {
              return <Card key={index} {...question} />;
            })}
          </div>
          <div className={styles.action}>
            <button
              className={`${styles['btn-random']} ${figtree.className}`}
              onClick={handleButtonRandom}
            >
              <IconRefresh />
              <span>Acak Pertanyaan</span>
            </button>
          </div>
        </>
      ) : (
        <div className="no-data">Tidak ada data</div>
      )}
    </div>
  );
}
