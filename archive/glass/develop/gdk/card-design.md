# Card Design

This document goes over how to follow Glass style and implement common UI best practices when using the GDK.

## Glass theme

Glass applies a standard theme to your Glassware, so it stays consistent with the rest of the user interface. The theme has the following characteristics:

-   Uses Roboto typeface
-   Displays activities full-screen with no status bar or action bar
-   Applies solid, black background

To apply the Glass theme, don't declare a theme in your Android Manifest.

> **Note**: ADT and Android Studio usually assign a theme automatically, even if you specify no theme, so remove the `android:theme` property from your manifest after creating a project.

If you have a custom style for parts of your Glassware and want the default Glass theme for everything else, inherit from `Theme.DeviceDefault` with the `parent` attribute:

```xml
<resources>
    <style name="CustomTheme" parent="@android:style/Theme.DeviceDefault">
        <!-- Theme customization goes here. -->
    </style>
</resources>
```

See the Android developer guide on [Styles and Themes](http://developer.android.com/guide/topics/ui/themes.html) for more information about creating themes.

## Glass-styled cards

The [`CardBuilder`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder) [**TODO**: ADD LINK] class creates well-formed cards given a set of properties. Use the layouts provided by [`CardBuilder.Layout`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout) [**TODO**: ADD LINK] whenever possible so that your content looks and feels like other content on Glass.

To use `CardBuilder`:

1.  Create an instance of `CardBuilder`, giving it your desired layout from [`CardBuilder.Layout`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout) [**TODO**: ADD LINK].
2.  Set properties of the card, such as the text, footnote, and timestamp.
3.  Call [`CardBuilder.getView()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#getView()) [**TODO**: ADD LINK] to convert the card to an Android [`View`](http://developer.android.com/reference/android/view/View.html), or [`CardBuilder.getRemoteViews()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#getRemoteViews()) [**TODO**: ADD LINK] to convert it to a [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) object.
4.  Use the `View` in your activities, layouts, or in a [`CardScrollView`](https://developers.google.com/glass/develop/gdk/card-design#creating_scrolling_cards_in_activities) [**TODO**: ADD LINK], or use the `RemoteViews` in a [`LiveCard`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/timeline/LiveCard) [**TODO**: ADD LINK].

### Common UI features

Many of the layouts provided by `CardBuilder` support the common user interface features described below. See the documentation of the individual layouts in [`CardBuilder.Layout`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout) [**TODO**: ADD LINK] for a list of the features supported by each type of card.

#### Attribution icon

The attribution icon is an optional 36 × 36 pixel icon that appears on the bottom-right corner of a card and to the right of the timestamp. Set this icon by calling [`CardBuilder.setAttributionIcon()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#setAttributionIcon(int)) [**TODO**: ADD LINK] to identify your application, especially on live cards so a user can quickly glance and see the source of the information on that card.

#### Stack indicator

The stack indicator, controlled by [`CardBuilder.showStackIndicator()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#showStackIndicator(boolean)) [**TODO**: ADD LINK], is a corner fold that appears on the top-right corner of a card. Use this as a visual indicator that your card represents a bundle of other cards that the user can tap directly into.

![](card_corner.gif)

```java
View view = new CardBuilder(context, CardBuilder.Layout.TEXT)
    .setText("A stack indicator can be added to the corner of a card...")
    .setAttributionIcon(R.drawable.ic_smile)
    .showStackIndicator(true)
    .getView();
```

### Layouts

The following examples show the layouts that are available using the `CardBuilder`.

> **Note**: Layouts with full-bleed images can have up to eight images in the mosaic, while column layouts can only have up to five.

#### `TEXT` and `TEXT_FIXED`

The [`CardBuilder.Layout.TEXT`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#TEXT) [**TODO**: ADD LINK] layout shows full-bleed text with an optional image mosaic in the background. The text dynamically resizes to best fit the available space. [`CardBuilder.Layout.TEXT_FIXED`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#TEXT_FIXED) [**TODO**: ADD LINK] is similar but fixes its text to a smaller size.

![](card_text.png)
![](card_text_with_images.png)
![](card_text_fixed.png)

```java
View view1 = new CardBuilder(context, CardBuilder.Layout.TEXT)
    .setText("This is the TEXT layout. The text size will adjust dynamically.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .getView();
View view2 = new CardBuilder(context, CardBuilder.Layout.TEXT)
    .setText("You can also add images to the background of a TEXT card.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .addImage(R.drawable.image1)
    .addImage(R.drawable.image2)
    .addImage(R.drawable.image3)
    .addImage(R.drawable.image4)
    .addImage(R.drawable.image5)
    .getView();
View view3 = new CardBuilder(context, CardBuilder.Layout.TEXT_FIXED)
    .setText("This is the TEXT_FIXED layout. The text size is always the same.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .getView();
```

#### `COLUMNS` and `COLUMNS_FIXED`

The [`CardBuilder.Layout.COLUMNS`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#COLUMNS) [**TODO**: ADD LINK] layout shows an image mosaic or icon on the left side of the card and text on the right side. The text is dynamically sized to best fit the available space. To keep the text size fixed, use [`CardBuilder.Layout.COLUMNS_FIXED`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#COLUMNS_FIXED) [**TODO**: ADD LINK].

![](card_columns.png)
![](card_columns_icon.png)
![](card_columns_fixed.png)

```java
View view1 = new CardBuilder(context, CardBuilder.Layout.COLUMNS)
    .setText("This is the COLUMNS layout with dynamic text.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .addImage(R.drawable.image1)
    .addImage(R.drawable.image2)
    .addImage(R.drawable.image3)
    .addImage(R.drawable.image4)
    .addImage(R.drawable.image5)
    .getView();
View view2 = new CardBuilder(context, CardBuilder.Layout.COLUMNS)
    .setText("You can even put a centered icon on a COLUMNS card instead of a mosaic.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .setIcon(R.drawable.ic_wifi)
    .getView();
View view3 = new CardBuilder(context, CardBuilder.Layout.COLUMNS_FIXED)
    .setText("This is the COLUMNS_FIXED layout. The text size is always the same.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .addImage(R.drawable.image1)
    .addImage(R.drawable.image2)
    .addImage(R.drawable.image3)
    .addImage(R.drawable.image4)
    .addImage(R.drawable.image5)
    .getView();
```

#### `CAPTION`

The [`CardBuilder.Layout.CAPTION`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#CAPTION) [**TODO**: ADD LINK] layout has an image mosaic in the background and brief caption text aligned at the bottom of the card. An icon can also be placed next to the caption to represent, for example, the identity of a person associated with the card's content.

![](card_caption.png)
![](card_caption_icon.png)

**Figure 1**: (background image by [photoeverywhere.co.uk](http://www.photoeverywhere.co.uk/), cropped)

```java
View view1 = new CardBuilder(context, CardBuilder.Layout.CAPTION)
    .setText("The caption layout.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .addImage(R.drawable.beach)
    .setAttributionIcon(R.drawable.ic_smile)
    .getView();

View view2 = new CardBuilder(context, CardBuilder.Layout.CAPTION)
    .setText("The caption layout with an icon.")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .addImage(R.drawable.beach)
    .setIcon(R.drawable.ic_avatar)
    .setAttributionIcon(R.drawable.ic_smile)
    .getView();
```

#### `TITLE`

The [`CardBuilder.Layout.TITLE`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#TITLE) [**TODO**: ADD LINK] layout has an image mosaic in the background with a centered title and optional icon on the bottom of the card. This layout is often used to represent contacts or share targets. Footnote and timestamp are not supported on this layout.

![](card_title.png)

```java
View view = new CardBuilder(context, CardBuilder.Layout.TITLE)
    .setText("TITLE Card")
    .setIcon(R.drawable.ic_phone)
    .addImage(R.drawable.beach)
    .getView();
```

#### `AUTHOR`

Use the [`CardBuilder.Layout.AUTHOR`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#AUTHOR) [**TODO**: ADD LINK] layout to display a message or conversation where the focus is on the author. It supports an image mosaic in the background, an icon used as the author's avatar, and a heading and subheading where you can list identifying information.

![](card_author.png)

```java
View view = new CardBuilder(context, CardBuilder.Layout.AUTHOR)
    .setText("The AUTHOR layout lets you display a message or conversation "
            + " with a focus on the author.")
    .setIcon(R.drawable.ic_avatar)
    .setHeading("Joe Lastname")
    .setSubheading("Mountain View, California")
    .setFootnote("This is the footnote")
    .setTimestamp("just now")
    .getView();
```

#### `MENU`

The [`CardBuilder.Layout.MENU`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#MENU) [**TODO**: ADD LINK] layout looks like a standard Glass menu. It has a centered icon and title and an optional footnote. Use this layout for confirmation screens (transitioning from "Deleting" to "Deleted" after the user selects a menu item, for example). If you need a real menu, you should use a standard options menu instead.

![](card_menu.png)

```java
View view = new CardBuilder(context, CardBuilder.Layout.MENU)
    .setText("MENU layout")
    .setIcon(R.drawable.ic_phone)
    .setFootnote("Optional menu description")
    .getView();
```

#### `EMBED_INSIDE`

The [`CardBuilder.Layout.EMBED_INSIDE`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#EMBED_INSIDE) [**TODO**: ADD LINK] layout embeds a custom layout XML of your own design into the standard Glass card template. This lets you design a custom UI for your application but still have correct placement of a card's footnote, timestamp, attribution icon, and stack indicator if they are needed.

After calling [`CardBuilder.getView()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#getView()) [**TODO**: ADD LINK], use [`findViewById()`](http://developer.android.com/reference/android/view/View.html#findViewById(int)) on the result to access the views inside your embedded layout. Likewise, if you call [`CardBuilder.getRemoteViews()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder#getRemoteViews()) [**TODO**: ADD LINK], you can manipulate your embedded layout's views by passing their IDs directly into the [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) setter methods.

![](card_embed_inside_diagram.png)

```java
View view = new CardBuilder(context, CardBuilder.Layout.EMBED_INSIDE)
    .setEmbeddedLayout(R.layout.food_table)
    .setFootnote("Foods you tracked")
    .setTimestamp("today")
    .getView();
TextView textView1 = (TextView) view.findViewById(R.id.text_view_1);
textView1.setText("Water");
// ...and so on
```

For a more detailed example, see the GitHub [ApiDemo project](https://github.com/googleglass/gdk-apidemo-sample) [**TODO**: ADD LINK].

#### `ALERT`

The [`CardBuilder.Layout.ALERT`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder.Layout#ALERT) [**TODO**: ADD LINK] layout contains a large centered icon with a primary message and footnote. Use this layout in a [`Dialog`](https://developer.android.com/reference/android/app/Dialog.html) to show an important informational message, warning, or error in your Glassware.

> **Note**: use `ic_cloud_sad_150.png` for network connectivity alerts and `ic_warning_150.png` for generic warnings. Download these assets from [Glass menu icons](../../menu_icons.zip).
 
![](card_alert_cloud.png)
![](card_alert_warning.png)

The following example shows an implementation of `AlertDialog` and dismisses the card and opens the WiFi settings when the user taps on the card:

1.  Create a class that extends `Dialog`.
2.  Create the card using [`CardBuilder`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder) [**TODO**: ADD LINK] with the `CardBuilder.Layout.ALERT` layout and then set the content view with this card.
3.  (Optional) Create a [`GestureDetector`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/GestureDetector) [**TODO**: ADD LINK] to handle user gestures on this card.

> **Note**: The swipe down gesture on [`Dialog`](https://developer.android.com/reference/android/app/Dialog.html) objects automatically plays the appropriate sound: [`Sounds.DISMISSED`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/media/Sounds#DISMISSED) [**TODO**: ADD LINK] if the dialog is cancelable, or [`Sounds.DISALLOWED`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/media/Sounds#DISALLOWED) [**TODO**: ADD LINK] if it is not.

```java
public class AlertDialog extends Dialog {

    private final DialogInterface.OnClickListener mOnClickListener;
    private final AudioManager mAudioManager;
    private final GestureDetector mGestureDetector;

    /**
     * Handles the tap gesture to call the dialog's
     * onClickListener if one is provided.
     */
    private final GestureDetector.BaseListener mBaseListener =
        new GestureDetector.BaseListener() {

        @Override
        public boolean onGesture(Gesture gesture) {
            if (gesture == Gesture.TAP) {
                mAudioManager.playSoundEffect(Sounds.TAP);
                if (mOnClickListener != null) {
                    // Since Glass dialogs do not have buttons,
                    // the index passed to onClick is always 0.
                    mOnClickListener.onClick(AlertDialog.this, 0);
                }
                return true;
            }
            return false;
        }
    };

    public AlertDialog(Context context, int iconResId,
                       int textResId, int footnoteResId,
                       DialogInterface.OnClickListener onClickListener) {
        super(context);

        mOnClickListener = onClickListener;
        mAudioManager =
            (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
        mGestureDetector =
            new GestureDetector(context).setBaseListener(mBaseListener);

        setContentView(new CardBuilder(context, CardBuilder.Layout.ALERT)
                .setIcon(iconResId)
                .setText(textResId)
                .setFootnote(footnoteResId)
                .getView());
    }

    /** Overridden to let the gesture detector handle a possible tap event. */
    @Override
    public boolean onGenericMotionEvent(MotionEvent event) {
        return mGestureDetector.onMotionEvent(event)
            || super.onGenericMotionEvent(event);
    }
}
```

4.  (Optional) In your activity, implement an [`OnClickListener`](https://developer.android.com/reference/android/content/DialogInterface.OnClickListener.html) to handle any additional flows when the user taps. For more information on starting settings activities like WiFi, see [Starting settings](starting-glassware.md#starting_settings).
5.  Call the `AlertDialog` constructor to display the alert card.

```java
public class MyActivity extends Activity {
    ...
    private final DialogInterface.OnClickListener mOnClickListener =
            new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int button) {
                        // Open WiFi Settings
                        startActivity(new Intent(Settings.ACTION_WIFI_SETTINGS));
                    }
            };

    @Override
    protected void onCreate(Bundle bundle) {
        ...

        new AlertDialog(context, R.drawable.ic_cloud_sad_150, R.string.alert_text,
            R.string.alert_footnote_text, mOnClickListener).show();

        ...
    }
}
```

## XML layouts

Here are two basic card layouts that you can use if the CardBuilder class does not meet your needs.

### Main layout

This layout defines the standard padding and footer for a card. Put your own views in the empty `RelativeLayout`.

> **Editor's note**: There used to be some sort of page here, I presume one from the Glassware Flow Designer which is now defunct, that was overlayed with the below image:

![](main-template.png)

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    >

    <RelativeLayout
        android:id="@+id/body_layout"
        android:layout_width="match_parent"
        android:layout_height="@dimen/glass_card_body_height"
        android:layout_marginLeft="@dimen/glass_card_margin"
        android:layout_marginTop="@dimen/glass_card_margin"
        android:layout_marginRight="@dimen/glass_card_margin"
        tools:ignore="UselessLeaf"
        >

        <!-- Put your widgets inside this RelativeLayout. -->

    </RelativeLayout>

    <LinearLayout
        android:id="@+id/footer_container"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom|left"
        android:layout_marginLeft="@dimen/glass_card_margin"
        android:layout_marginBottom="@dimen/glass_card_footer_margin"
        android:layout_marginRight="@dimen/glass_card_margin"
        android:orientation="horizontal"
        >

        <!-- The footer view will grow to fit as much content as possible while the
             timestamp view keeps a fixed width. If the footer text is too long, it
             will be ellipsized with a 40px margin between it and the timestamp. -->

        <TextView
            android:id="@+id/footer"
            android:layout_width="0dip"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:ellipsize="end"
            android:singleLine="true"
            android:textAppearance="?android:attr/textAppearanceSmall"
            />

        <TextView
            android:id="@+id/timestamp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="@dimen/glass_card_margin"
            android:ellipsize="end"
            android:singleLine="true"
            android:textAppearance="?android:attr/textAppearanceSmall"
            />

    </LinearLayout>

</FrameLayout>
```

### Left column layout

This defines a 240px left column and 400px right column in the form of two `RelativeLayout`s that you can put your views into.

> **Editor's note**: Same thing here. The following image was overlayed:

![](left-column-template.png)

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    >

    <RelativeLayout
        android:id="@+id/left_column"
        android:layout_width="@dimen/glass_card_left_column_width"
        android:layout_height="match_parent"
        >

        <!-- Put widgets for the left column inside this RelativeLayout. -->

    </RelativeLayout>

    <RelativeLayout
        android:layout_width="wrap_content"
        android:layout_height="@dimen/glass_card_body_height"
        android:layout_alignParentRight="true"
        android:layout_alignParentTop="true"
        android:layout_marginLeft="@dimen/glass_card_two_column_margin"
        android:layout_marginRight="@dimen/glass_card_margin"
        android:layout_marginTop="@dimen/glass_card_margin"
        android:layout_toRightOf="@+id/left_column"
        tools:ignore="UselessLeaf"
        >

        <!-- Put widgets for the right column inside this RelativeLayout. -->

    </RelativeLayout>

    <LinearLayout
        android:id="@+id/footer_container"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_alignParentRight="true"
        android:layout_gravity="bottom|left"
        android:layout_marginBottom="@dimen/glass_card_footer_margin"
        android:layout_marginLeft="@dimen/glass_card_two_column_margin"
        android:layout_marginRight="@dimen/glass_card_margin"
        android:layout_toRightOf="@+id/left_column"
        android:orientation="horizontal"
        >

        <!--
             The footer view will grow to fit as much content as possible while the
             timestamp view keeps a fixed width. If the footer text is too long, it
             will be ellipsized with a 40px margin between it and the timestamp.
        -->

        <TextView
            android:id="@+id/footer"
            android:layout_width="0dip"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:ellipsize="end"
            android:singleLine="true"
            android:textAppearance="?android:attr/textAppearanceSmall"
            />

        <TextView
            android:id="@+id/timestamp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="@dimen/glass_card_margin"
            android:ellipsize="end"
            android:singleLine="true"
            android:textAppearance="?android:attr/textAppearanceSmall"
            />

    </LinearLayout>

</RelativeLayout>
```

### Standard dimensions

Use this file in conjunction with the previous layouts or your own layouts to to adhere to standard Glass style. Create this file as `res/values/dimens.xml` in your Android project.

```xml
<?xml version="1.0" encoding="utf-8"?>

<resources>

    <!-- The recommended margin for the top, left, and right edges of a card. -->
    <dimen name="glass_card_margin">40px</dimen>

    <!-- The recommended margin between the bottom of the card and the footer. This is
         an adjusted value so that the baseline of the text in the footer sits 40px
         from the bottom of the card, matching the other margins. -->
    <dimen name="glass_card_footer_margin">33px</dimen>

    <!-- The recommended margin for the left column of the two-column card. -->
    <dimen name="glass_card_two_column_margin">30px</dimen>

    <!-- The maximum height of the body content inside a card. -->
    <dimen name="glass_card_body_height">240px</dimen>

    <!-- The width of the left column in the two-column layout. -->
    <dimen name="glass_card_left_column_width">240px</dimen>

</resources>
```

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).