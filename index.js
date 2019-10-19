const core = require('@actions/core');
const Sitemapper = require('sitemapper');
const sitemap = new Sitemapper();

async function getSitemapUrls(xml) {
  return await sitemap.fetch(xml).then(sites => sites.sites.map(url => url));
}

try {
  const SITEMAP = core.getInput('SITEMAP');
  getSitemapUrls(SITEMAP)
    .catch(err => {
      core.setFailed(err.message);
      process.exit(1);
    })
    .then(urls => {
      core.exportVariable('urls', urls.join('\n'));
      process.exit();
    });
} catch (error) {
  core.setFailed(error.message);
}
