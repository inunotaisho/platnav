# Platdrawer
Platypus drawer for ReactJS (.tsx) and Angular (.ts)

#Original PlatypusUI and PlatypusTS packages along with documentation.

+ [PlatypusUI](https://www.npmjs.com/package/platypusui) with [Github Link](https://github.com/Platypi/platypusui)
+ [PlatypusTS](https://www.npmjs.com/package/platypus) with [Github Link](https://github.com/Platypi/platypusts)
+ [Platypi Documentation](http://platypusts.com/docs/api)
+ [Typescript Documentation](https://www.typescriptlang.org/docs/home.html)

# Steps to creating platnav plugin

+ First step is to isolate the internal dependencies needed by the navbar and drawer. These dependencies are to be moved from `srcui` and `srcts` to to `src`. 
    
+ Second step it to isolate the grunt task and change them to webpack task. We do this by moving task from `packagets.json`, `packageui.json`, `gruntfilets.js` and `gruntfileui.js` to `wepack.config.js`.
    
+ Third step is to test the wepack built process to chekc for conflicts in build process before further pruning of code

