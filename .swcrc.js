const swc = require('swc');

swc.
    transform('source code', {
        filename:"./index.js",
        sourceMaps: true,
        isModule:true,

        jsc:{
            parser:{
                syntax:"ecmascript"
            },
            transform: {}
        }
    }).then(output=>{
        console.log(output.code);
        console.log(output.map);
    })