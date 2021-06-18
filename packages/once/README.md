# @drupal/once

Select and filter DOM elements to process them only once.

## Documentation and examples

See https://www.npmjs.com/package/@drupal/once

## Testing

Playwright does not support webkit on
[non-LTS versions of Ubuntu](https://github.com/microsoft/playwright/issues/4236).
To work around this, you can run the tests directly with Docker and [GitLab
CI](https://docs.gitlab.com/runner/install/) locally:

```
gitlab-runner exec docker test
```
