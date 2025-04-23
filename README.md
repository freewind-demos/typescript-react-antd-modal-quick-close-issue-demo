TypeScript React Antd Modal Quick Close Issue Demo
=================================

当使用ahooks的 useRequest中的loading来控制Modal的open时，如果抛出异常导致loading快速变化，则点击几次后，页面上的按钮将不可点击，似乎有一些透明的modal在上面挡住了整个页面。

When using the `loading` in `useRequest` of `ahooks` to control the `open` state of a `Modal`, if an exception is thrown causing the `loading` to change rapidly, after clicking several times, the buttons on the page will become unclickable. It seems that there is some transparent `Modal` on top, blocking the entire page.  

```
npm install
npm start
```

It will open page on browser automatically.
