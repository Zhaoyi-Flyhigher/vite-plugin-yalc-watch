import { type Plugin } from 'vite'
import { watch } from 'chokidar'
import path from 'node:path'

export type packageNames = string[]
export default function vitePluginYalcWatch(options: packageNames): Plugin {
  return {
    name: 'vite-plugin-yalc-watch',
    async configureServer(server) {
      if(options && options.length) {
        const yalcPackages = options.map(name => path.resolve(process.cwd(), 'node_modules', name, 'package.json'))
        watch(yalcPackages, { ignoreInitial: true }).on('all', async event => {
          if (event === 'change' || event === 'add') {
            await server.restart(true)
          }
        }).on('error', error => console.log(`[vite-plugin-yalc-watch]: Watcher error: ${error}`))
      }
    },
  }
}
