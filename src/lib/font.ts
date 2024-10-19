import { Figtree, Poppins } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
