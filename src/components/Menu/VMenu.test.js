import { shallowMount } from '@vue/test-utils'
import createRouter from '../../router'

// Component
import Menu from './VMenu'

const router = createRouter()

test('Not an empty menu', async () => {
  await router.push('/')
  await router.isReady()

  const wrapper = shallowMount(Menu, {
    global: { plugins: [router] }
  })

  expect(wrapper.html()).not.toBe('<ul class="menu" role="menu"></ul>')
})
