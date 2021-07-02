require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  write: true,
  outdir: 'dist',
})