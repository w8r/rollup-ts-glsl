# Rollup + TypeScript + GLSL

![Example](https://raw.githubusercontent.com/w8r/rollup-ts-glsl/master/screenshot.png)

This is a small boilerplate to make it possible to build a project with these 3 and rollup.
The biggest problem is to put the right plugins in the right order and configs :)

 * there has to be a fake `d.ts` file in same dir with the shaders, making it possible to include them
 * TS has to see it (`include` it in the `tsconfig.json`)
 * `rollup-plugin-glsl` has to see the `.glsl` shaders

```js
glsl({
  include: './src/shaders/**/*.glsl',
  sourceMap: true,
  compress: process.env.PRODUCTION
})
```

# Usage

```sh
git clone git@github.com:w8r/rollup-ts-glsl.git
cd rollup-ts-glsl
rm -rf .git
yarn
yarn build
open index.html
```

# License

MIT
