# NativeScript Ng2 Drawer Seed

![Screenshot](screen.png)

Nativescript seed project with [nativescript-telerik-ui](https://www.npmjs.com/package/nativescript-telerik-ui) 
drawer support integrated and ready to be used.

The interface is wired to a meteor backend so you need to start it first. 
```shell
$ cd backend
$ meteor npm install
$ meteor
```

If you don't change the meteor url you will need to call:

```shell
adb reverse tcp:3000 tcp:3000
```
to enable the reverse port forward from the device to the local server.

To test the app just run:
```shell
$ npm install
$ tns run android
```
inside the root of the project.

## Upgrade concerns

- Typescript module: 'es2015' which is forced by TNS requires a hack in main.ts (see comment in there)
- @angular/http is still used by nativescript-angular (https://github.com/NativeScript/nativescript-angular/issues/1842). Angular 8 does no longer provide this library, therefor the Angular 7 version is included.
- nativescript-angular version 8.1 failed. Had to downgrade to 8.0. No clue why...
