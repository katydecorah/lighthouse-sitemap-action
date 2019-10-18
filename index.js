const core = require('@actions/core');


try {
  core.exportVariable('urls', 'https://katydecorah.com\nhttps://katydecorah.com/epicurean/rose-apple-tart/');
} catch (error) {
  core.setFailed(error.message);
}
