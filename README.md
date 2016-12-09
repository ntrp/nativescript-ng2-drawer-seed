# NativeScript Ng2 Drawer Seed

![Screenshot](screen.png)

Nativescript seed project with [nativescript-telerik-ui](https://www.npmjs.com/package/nativescript-telerik-ui) 
drawer support integrated and ready to be used.

The interface is wired to a meteor backend so you need to start it first. 
```shell
$ cd backend
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
