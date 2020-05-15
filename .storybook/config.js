import { configure } from '@storybook/vue'

import '@/libs/vuex'
import '@/libs/vue-router'

import '!vue-style-loader!css-loader!postcss-loader!sass-loader!@/styles/vendors/tailwind.scss'
import '!vue-style-loader!css-loader!postcss-loader!sass-loader!@/styles/index.scss'

const domainStoryFiles = require.context('@/components', true, /.stories.tsx$/)

function loadStories() {
  domainStoryFiles.keys().forEach(filename => domainStoryFiles(filename))
}

configure(loadStories, module)
