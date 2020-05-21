const chalk = require('chalk')
const shell = require('shelljs')
const program = require('commander')
const camelCase = require('camelcase')
const pkg = require('../package.json') 

const COMMANDS = [
  'atom', 
  'molecule', 
  'organism', 
  'template', 
  'module'
]

let name = 'example'

const templates = {
  components: {
    default: './create/templates/components/vexample.vue',
    tests: './create/templates/components/vexample.test.tsx',
    stories: './create/templates/components/vexample.stories.tsx'
  },

  modules: {
    components: './create/templates/modules/components/index.tsx',
    constants: './create/templates/modules/constants/index.tsx',
    typings: './create/templates/modules/typings/exampleTypings.tsx',

    services: [
      './create/templates/modules/services/exampleService.tsx', 
      './create/templates/modules/services/index.tsx'
    ],

    stores: [
      './create/templates/modules/stores/exampleActions.tsx', 
      './create/templates/modules/stores/exampleGetters.tsx', 
      './create/templates/modules/stores/exampleMutations.tsx', 
      './create/templates/modules/stores/exampleState.tsx', 
      './create/templates/modules/stores/exampleTypes.tsx', 
      './create/templates/modules/stores/index.tsx'
    ],

    tests: './create/templates/modules/tests/example.test.tsx',
    views: './create/templates/modules/views/exampleIndex.vue',
    router: './create/templates/modules/router.tsx'
  }
}

const checkPath = path => {
  return shell.test('-e', path)
}

const log = (folder, name, status) => {
  return status
    ? console.log(`${chalk.reset.inverse.green.bold(' SUCCESS ')} ${chalk.gray(`creating file ${folder}`)}${chalk.white(name)}`)
    : console.log(`${chalk.reset.inverse.red.bold(' FAILED ')} ${chalk.gray(`file ${folder}${chalk.white(name)} already exist`)}`)
}

const createFolder = (type, folder) => {
  let pathModule = ''
  let path = ''

  switch(type) {
    case 'components': 
      path = `./src/${type}/${folder}/${camelCase(`v-${name}`, { pascalCase: true })}`
      if (!checkPath(path)) shell.mkdir(path)
      break
      
    case 'modules': 
      switch(folder) {
        case 'stores':
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          pathStores = `${pathModule}/stores`
          path = `${pathStores}/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (!checkPath(pathStores)) shell.mkdir(pathStores)
          if (checkPath(pathModule) && checkPath(pathStores) && !checkPath(path)) shell.mkdir(path)
          break

        case 'tests':
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          pathTests = `${pathModule}/${folder}`
          path = `${pathTests}/stores`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (!checkPath(pathTests)) shell.mkdir(pathTests)
          if (checkPath(pathModule) && checkPath(pathTests) && !checkPath(path)) shell.mkdir(path)
          break

        default: 
          pathModule = `./src/${type}/${camelCase(name, { pascalCase: true })}`
          path = `${pathModule}/${folder}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (checkPath(pathModule) && !checkPath(path)) shell.mkdir(path)
      }
      break
  }

  return path
}

const createComponent = {
  default: folderName => {
    const folder = `${createFolder('components', folderName)}/`
    const file = `v${camelCase(name)}.vue`
    const path = folder + file
    
    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.default} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  tests: folderName => {
    const folder = `${createFolder('components', folderName)}/`
    const file = `v${camelCase(name)}.test.tsx`
    const path = folder + file
    
    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.tests} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  stories: folderName => {
    const folder = `${createFolder('components', folderName)}/`
    const file = `v${camelCase(name)}.stories.tsx`
    const path = folder + file
    
    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.stories} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const createModule = {
  components: () => {
    const folder = `${createFolder('modules', 'components')}/`
    const file = 'index.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.components} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  constants: () => {
    const folder = `${createFolder('modules', 'constants')}/`
    const file = 'index.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  typings: () => {
    const folder = `${createFolder('modules', 'typings')}/`
    const file = `${camelCase(name)}Typings.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.typings} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  services: () => {
    const folder = `${createFolder('modules', 'services')}/`
    const file = [
      `${camelCase(name)}Service.tsx`,
      'index.tsx'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.modules.services) {
        shell.exec(`cat ${templates.modules.services[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.services) {
        log(folder, file[index], false)
      }
    }
  },

  stores: () => {
    const folder = `${createFolder('modules', 'stores')}/`
    const file = [
      `${camelCase(name)}Actions.tsx`,
      `${camelCase(name)}Getters.tsx`,
      `${camelCase(name)}Mutations.tsx`,
      `${camelCase(name)}State.tsx`,
      `${camelCase(name)}Types.tsx`,
      'index.tsx'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.modules.stores) {
        shell.exec(`cat ${templates.modules.stores[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.stores) {
        log(folder, file[index], false)
      }
    }
  },

  tests: () => {
    const folder = `${createFolder('modules', 'tests')}/`
    const file = `${camelCase(name)}.test.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.tests} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  views: () => {
    const folder = `${createFolder('modules', 'views')}/`
    const file = `${camelCase(name)}Index.vue`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.views} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  router: () => {
    const folder = `${createFolder('modules')}/`
    const file = 'router.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.router} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const actions = {
  'atom': componentName => {
    name = componentName

    createComponent.default('atoms')
    createComponent.tests('atoms')
    createComponent.stories('atoms')
  },

  'molecule': componentName => {
    name = componentName

    createComponent.default('molecules')
    createComponent.tests('molecules')
    createComponent.stories('molecules')
  },

  'organism': componentName => {
    name = componentName

    createComponent.default('organisms')
    createComponent.tests('organisms')
    createComponent.stories('organisms')
  },

  'template': componentName => {
    name = componentName

    createComponent.default('templates')
    createComponent.tests('templates')
    createComponent.stories('templates')
  },

  'module': moduleName => {
    name = moduleName

    createModule.components()
    createModule.constants()
    createModule.typings()
    createModule.services()
    createModule.stores()
    createModule.tests()
    createModule.views()
    createModule.router()
  }
}

program
  .version(pkg.version)
  .option('atom <required>', 'option to generate atom component')
  .option('molecule <required>', 'option to generate molecule component')
  .option('organism <required>', 'option to generate orgnism component')
  .option('template <required>', 'option to generate template component')
  .option('module <required>', 'option to generate module')
  .action(args => {
    COMMANDS.map(command => {
      if (args[command]) actions[command](args[command])
    })
  })

program.parse(process.argv)
