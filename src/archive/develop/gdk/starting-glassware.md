# Starting Glassware

You can start your own Glassware by declaring a voice command that is associated with your Glassware. Adding a voice command also adds a touch menu if your users choose to tap instead of speak commands.

You can also start system-provided Glassware, such as navigation or the web browser to carry out certain actions for you, so you don't have to rewrite functionality.

## Starting your own Glassware

For information on starting your Glassware from the Home menu (Clock card), see the [Voice](https://developers.google.com/glass/develop/gdk/voice) [**TODO**: SWITCH LINK] developer guide.

## Starting speech recognition

For more information on starting the speech recognition Glassware, see the [Voice](https://developers.google.com/glass/develop/gdk/voice) [**TODO**: SWITCH LINK] developer guide.

## Starting the web browser

See [Web Browser](https://developer.android.com/guide/components/intents-common.html#Browser) [**TODO**: ADD LINK] intents for more information on how to start the Glass web browser.

## Starting settings

Use the following intents to display the settings card on Glass.

**Action**

-   [`ACTION_WIFI_SETTINGS`](https://developer.android.com/reference/android/provider/Settings.html#ACTION_WIFI_SETTINGS)
-   [`ACTION_BLUETOOTH_SETTINGS`](https://developer.android.com/reference/android/provider/Settings.html#ACTION_BLUETOOTH_SETTINGS)
-   [`ACTION_SOUND_SETTINGS`](https://developer.android.com/reference/android/provider/Settings.html#ACTION_SOUND_SETTINGS)

**Example**

```java
 startActivity(new Intent(Settings.ACTION_SOUND_SETTINGS));
```

## Starting navigation

Start the built-in Nav Glassware to get turn-by-turn navigation to a location.

**Action**

[`ACTION_VIEW`](https://developer.android.com/reference/android/content/Intent.html#ACTION_VIEW)

**Data URI Scheme**

`google.navigation:ll=<latitude>,<longitude>&title=<title>&q=<query>&mode=<mode>`

-   `ll` - Coordinates of a location to navigate to. Do not specify `query` if you specify this.
-   `title` - Title to display for the place to navigate to. Defaults to showing the latitude and longitude of the location if you specified those properties or the name of the location if you specified `query`.
-   `query` - A string to query for places to navigate to. Do not specify `ll` if you specify this.
-   `mode` - Defaults to `mru` if not specified or `d` if `mru` does not exist. Possible values are:
    -   `d` - Driving
    -   `w` - Walking
    -   `b` - Bicycle
    -   `r` - Transit
    -   `mru` - Most Recently Used.

**MIME Type**

None

**Example**

```java
 Intent navIntent = new Intent(Intent.ACTION_VIEW,
    Uri.parse("google.navigation:ll=37.4219795,
    -122.0836669&title=Googleplex"));
```
