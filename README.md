# xmas-party-store-shopify-theme

Set the themekit password using an environment variable (ie. don't add it to `config.yml`). The password can be found in Shopify under `Apps` by following the `Manage private apps` link at the bottom.

```
export THEMEKIT_PASSWORD=<PASSWORD>
```

Before making changes, always sync with upstream using the following commands.

On the `master` branch (to sync the `development` theme):

```
theme download
```

On the `production` branch:

```
theme download -e production
```

To auto deploy on changes to the `master` branch:

```
theme watch
```

To deploy changes to the `production` branch after merging from the `master` branch:

```
theme deploy -e production
```
