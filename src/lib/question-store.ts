import { create, StateCreator } from 'zustand';
import { IQuestionCard } from './question.interface';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type QuestionState = {
  list: IQuestionCard[];
  setList: (list: IQuestionCard[]) => void;
};

export const useQuestionStore = create<QuestionState>(
  (
    persist as (
      config: StateCreator<QuestionState>,
      options: PersistOptions<Pick<QuestionState, 'list'>>,
    ) => StateCreator<QuestionState>
  )(
    (set) => ({
      list: [],
      setList: (list: IQuestionCard[]) => set({ list }),
    }),
    {
      name: 'questions',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ list: state.list }),
    },
  ),
);
