import { ModuleContainer } from "@nuxt/kit"
import { resolve } from "pathe"

export default function (this: ModuleContainer) {
  this.extendRoutes(function (routes: any, resolveAlias: any) {
    routes.push({
      name: 'index',
      path: '/',
      file: resolve(__dirname, './index.tsx'),
    })

    return routes
  })
}