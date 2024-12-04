// Fonts used in the project

import {Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';
import { Lato } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],  
  style: ['normal'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400'], 
  style: ['normal'],
});

export const inter = Inter({subsets: ['latin']})
