const del = require('del');

(async () => {
  const deletedPaths = await del(['build/**']);

  console.log('Deleted old prod folder:\n', deletedPaths.join('\n'));
})();