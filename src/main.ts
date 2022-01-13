import { createApp as _createApp, createSSRApp, App } from 'vue'
import { Router } from 'vue-router'
import { Store } from 'vuex'

// Configuration
import createRouter from './router'
import store from './store'

// Component
import application from './App.vue'

// Helpers
const isSSR = typeof window === 'undefined'

// Type & Interface
interface CreateAppType {
  app: App
  router: Router
  store: Store<Record<string, any>>
}

export function createApp(): CreateAppType {
  const app = isSSR ? createSSRApp(application) : _createApp(application)
  const router = createRouter()

  app.use(router).use(store)
  return { app, router, store }
}
