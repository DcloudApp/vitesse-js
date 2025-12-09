import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['input-reset', 'appearance-none rounded-none border-none outline-none bg-transparent'],
  ],
  rules: [
    ['scrollbar-none', {
      '-ms-overflow-style': 'none', /* IE 和 Edge */
      'scrollbar-width': 'none', /* Firefox */
    }],
    [/^scrollbar-none$/, () => ({
      '::-webkit-scrollbar': 'none', /* Chrome, Safari, Opera */
    })],
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      collections: {
        svg: FileSystemIconLoader('./src/assets/svg'),
        icon: FileSystemIconLoader('./src/assets/icon', (svg) => {
          return svg.replace('#ffffff', 'currentColor')
        }),
      },
    }),

    presetTypography(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {},
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
