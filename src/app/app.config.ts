import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

import { routes } from './app.routes';

const MyPreset = definePreset(Aura, {
  primitive: {
    orangeZ1: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '#f1ac1d',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  },
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{orangeZ1.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },
    secondary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{orangeZ1.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
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
                shadow: 'none'
              }
            },
            secondary: {
              background: '{secondary.color}',
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
                shadow: 'none'
              }
            }
            // Add other variants (secondary, info, success, etc.) if needed
          },
          outlined: {
            primary: {
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}',
              borderColor: '{primary.200}',
              color: '{primary.color}'
            }
            // Add other variants if needed
          },
          text: {
            primary: {
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}',
              color: '{primary.color}'
            }
            // Add other variants if needed
          },
          link: {
            color: '{primary.color}',
            hoverColor: '{primary.color}',
            activeColor: '{primary.color}'
          }
        },
        // dark: {
        //   // Add dark theme overrides if needed
        //   root: {
        //     primary: {
        //       background: '{primary.color}',
        //       hoverBackground: '{primary.hover.color}',
        //       activeBackground: '{primary.active.color}',
        //       borderColor: '{primary.color}',
        //       hoverBorderColor: '{primary.hover.color}',
        //       activeBorderColor: '{primary.active.color}',
        //       color: '{primary.contrast.color}',
        //       hoverColor: '{primary.contrast.color}',
        //       activeColor: '{primary.contrast.color}',
        //       focusRing: {
        //         color: '{primary.color}',
        //         shadow: 'none'
        //       }
        //     }
        //   }
        // }
      }
    },
    datepicker: {
      panel: {
        padding: '100px',
      },
      colorScheme: {
        light: {
          panel: {
            color: '{primary.color}',
          },
         
        },
        // dark: {
        //   // Add dark theme overrides if needed
        //   panel: {
        //     background: '{primary.color}',
        //   },
        // }
      }
    }
  },
});

console.log(MyPreset)

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
            order: 'theme, base, primeng'
          }
        }
      }
    }),
  ]
};
