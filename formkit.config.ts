// formkit.config.ts
import { defineFormKitConfig, defaultConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme.ts'
 
export default defaultConfig({
  locale: 'en',
  config: {
    rootClasses
  }
})