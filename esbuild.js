#!/usr/bin/env node

let server,
    isDev = process.argv[2] === 'start',
    { spawn } = require('child_process'),
    onRebuild = () => {
        // console.log("Re-building.");
        if (isDev) {
            if (server) server.kill('SIGINT')
            let params = ['dist/index.js'];
            if(isDev) {
                params.push('--inspect')
            }
            server = spawn('node', params, { stdio: 'inherit' })
        }
    }

require('esbuild').build({
        entryPoints: ['src/index.ts'],
        outdir: 'dist',
        platform: 'node',
        bundle: true,
        sourcemap: true,
        tsconfig: 'tsconfig.json',
    })
    .catch(e => {
        console.log("Error on rebuild ! ");
        console.log(e);
    })
    .finally(onRebuild)
