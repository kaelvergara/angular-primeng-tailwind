import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';

const MyPreset = definePreset(Aura, {
  primitive: {
    blue: {
      50: '#e6f2fb',
      100: '#cce4f6',
      200: '#99c9ed',
      300: '#66afe3',
      400: '#3394da',
      500: '#0872b9',
      600: '#0666a6',
      700: '#055689',
      800: '#04436b',
      900: '#033554',
      950: '#021f33',
    },
    orange: {
      50: '#fff7e6',
      100: '#feebc8',
      200: '#fddfa3',
      300: '#fbc56b',
      400: '#f5b13f',
      500: '#f1ac1d',
      600: '#d99617',
      700: '#b97b12',
      800: '#8f5e0d',
      900: '#6f490a',
      950: '#3f2804',
    },
    green: {
      50: '#f3fae9',
      100: '#e2f3c8',
      200: '#c6e691',
      300: '#abd95a',
      400: '#97cf33',
      500: '#8bc53f',
      600: '#7bb238',
      700: '#668f2d',
      800: '#4f6e22',
      900: '#3e561b',
      950: '#22310f',
    },
    red: {
      50: '#fdecec',
      100: '#f9d0cf',
      200: '#f2a5a3',
      300: '#ea7977',
      400: '#d94b47',
      500: '#af322d',
      600: '#9c2c28',
      700: '#822420',
      800: '#651b18',
      900: '#4e1513',
      950: '#2c0b0a',
    },
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '10px',
        paddingX: '20px',
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.color}',
              hoverBackground: '{primary.hover.color}',
              activeBackground: '{primary.active.color}',
              borderColor: '{primary.color}',
              hoverBorderColor: '{primary.hover.color}',
              activeBorderColor: '{primary.active.color}',
              color: '{primary.contrast.color}',
              hoverColor: '{primary.contrast.color}',
              activeColor: '{primary.contrast.color}',
              focusRing: {
                color: '{primary.color}',
                shadow: 'none',
              },
            },
          },
          outlined: {
            primary: {
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.active.color}',
              borderColor: '{primary.color}',
              color: '{primary.color}',
            },
          },
        },
      },
    },
    datepicker: {
      colorScheme: {
        light: {
          panel: {
            color: '{primary.color}',
          },
        },
      },
    },
  },
});

console.log(MyPreset);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};
