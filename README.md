# VueClient

## Version 1
1. Create Project
# First Time
npm init vue@lastest
# Later   
npm create vue@latest

2. GitHub
cd /d/GitHub/VueClient
echo "# VueClient" >> README.md
git init
git config user.name "lgong2000"
git config user.email lgong2000@gmail.com
git add *
git commit -m "Initial Commit"
git remote add origin https://github.com/lgong2000/VueClient.git
git push -u origin master

3. Start
cd VueClient
npm install
npm run dev
http://localhost:5173/

4. Open in Visual Studio Code
code .

## Version 2
Do some clean
Using Tailwind

# Error - Cannot find module './App.vue' or its corresponding type declarations.ts(2307)
Extensions - Install "JavaScript and TypeScript Nightly"
Disable (Workspace)
Title Bar Search - Show and Run Commands >  - Reload Window

## Version 3
Customize a Dashboad and Login form
# Vue
index.html
    div - app
    script - /src/main.ts
main.ts
    createApp(App)  - App.vue
    mount('#app') - div app
App.vue
    header/nav - RouterLink to "/"
    main - RouterView
\router\index.ts
    component: DashboardView
    component: LoginView
    publicPages - authRequired
\views\DashboardView.vue
\views\LoginView.vue
    \components\LoginForm.vue
        form
            username
            password
            Submit button      

## Version 4
Work with SpringJWT
pinia - defineStore
    \stores\auth.ts
        state, Actions

## Version 5
localStorage - keep the state

## Version 6
# SpringJWT
http://localhost:8080/token - POST username and password to get the token
http://localhost:8080/ - Need authenticated
# VueClient
DashboardView.vue 
    onMounted(async() => {
        const response = await fetch('http://localhost:8080/', {
    ......
    data.value = await response.text();  - data form http://localhost:8080/

    <template>
        <p>{{data}}</p> - put the data to current page




This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# VueClient
