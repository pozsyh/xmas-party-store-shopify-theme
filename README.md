# xmas-party-store-shopify-theme

Set the themekit password using an environment variable (ie. don't add it to `config.yml`). The password can be found in Shopify under `Apps` by following the `Manage private apps` link at the bottom.

```
export THEMEKIT_PASSWORD=<PASSWORD>
```

Before making changes, always sync with upstream using the following commands.

On the `master` branch (to sync the `development` theme):

```
git checkout master
theme download
```

On the `production` branch:

```
git checkout production
theme download -e production
```

To auto deploy on changes to the `master` branch:

```
git checkout master
theme watch
```

To deploy changes from the `production` branch after merging from the `master` branch:

```
git checkout production
theme deploy -e production
```
