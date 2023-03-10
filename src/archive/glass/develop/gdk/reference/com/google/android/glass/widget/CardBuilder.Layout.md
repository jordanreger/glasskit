# CardBuilder.Layout

Added in API level XE21

Defines the visual layouts for cards.

Refer to the "See Also" section of each layout to see which content is supported by the layout.

| Inherited Methods | |
| --- | --- |
| From class.java.lang.Enum | |
| | |
| final [Object](https://developer.android.com/reference/java/lang/Object.html) | clone() |
| int | compareTo([Object](https://developer.android.com/reference/java/lang/Object.html) arg0) |
| final int | compareTo(E arg0) |
| final boolean | equals([Object](https://developer.android.com/reference/java/lang/Object.html) arg0) |
| final void | finalize() |
| final [Class](https://developer.android.com/reference/java/lang/Class.html)\<E\> | getDeclaringClass() |
| final int | ordinal() |
| String | toString() |
| static \<T extends Enum\<T\>\> T | valueOf(Class\<T\> arg0, String arg1) |
| | |
| From class java.lang.Object | |
| [Object](http://developer.android.com/reference/java/lang/Object.html) | clone() |
| boolean | equals([Object](http://developer.android.com/reference/java/lang/Object.html) arg0) |
| void | finalize()|
| final [Class](https://developer.android.com/reference/java/lang/Class.html)\<?\> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| [String](https://developer.android.com/reference/java/lang/String.html) | toString() |
| final void | wait() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| | |
| From interface java.lang.Comparable | |
| abstract int | compareTo(T arg0) |

## Enum Values

Added in API level XE21

#### public static final CardBuilder.Layout **ALERT** 

An alert with a large centered icon and a message and footnote underneath.

##### See Also

-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))

Added in API level XE21

#### public static final CardBuilder.Layout **AUTHOR** 

Content with a focus on the author: an avatar with a heading and subheading, and body text underneath.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setHeading(CharSequence)`](CardBuilder#setHeading(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setSubheading(CharSequence)`](CardBuilder#setSubheading(java.lang.CharSequence))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean))

Added in API level XE21

#### public static final CardBuilder.Layout **CAPTION** 

Images appear full screen in the background with a text caption and optional avatar at the bottom of the card.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean))

Added in API level XE21

#### public static final CardBuilder.Layout **COLUMNS** 

A two-column layout with images on the left and text on the right. The size of the text is dynamic based on the amount of content in the card.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean))

Added in API level XE21

#### public static final CardBuilder.Layout **COLUMNS_FIXED** 

A two-column layout with images on the left and text on the right. The size of the text is fixed at 40 pixels. This layout should be used when displaying multiple cards of this type in a sequence, such as a scrolling list of restaurants or settings, and it is important to render each card at the same size for visual consistency.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean))

Added in API level XE22

#### public static final CardBuilder.Layout **EMBED_INSIDE** 

Allows a custom layout to be embedded inside a card that optionally has a standard footnote, timestamp, and stack indicator.

The embedded layout will be inflated inside a [`RelativeLayout`](http://developer.android.com/reference/android/widget/RelativeLayout.html) that is bounded within the standard margins of the card so that it does not overlap with the card's footer.

Once you have called [`getView()`](CardBuilder#getView()) or [`getRemoteViews()`](CardBuilder#getRemoteViews()), you can call `findViewById()` or standard `RemoteViews` methods in order to access the views inside your embedded layout.

##### See Also

-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean))

Added in API level XE21

#### public static final CardBuilder.Layout **MENU** 

Text with an optional icon centered in the card and an optional footnote underneath, like a menu item.

##### See Also

-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))

Added in API level XE21

#### public static final CardBuilder.Layout **TEXT** 

Text that fills the whole card, with optional background images. The size of the text is dynamic based on the amount of content in the card.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean)

Added in API level XE21

#### public static final CardBuilder.Layout **TEXT_FIXED** 

Text that fills the whole card, with optional background images. The size of the text is fixed at 30 pixels. This layout should be used when using cards to display multiple pages of text and it is important to render each page at the same size for visual consistency.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setAttributionIcon(Drawable)`](CardBuilder#setAttributionIcon(android.graphics.drawable.Drawable))
-   [`setFootnote(CharSequence)`](CardBuilder#setFootnote(java.lang.CharSequence))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`setTimestamp(CharSequence)`](CardBuilder#setTimestamp(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean)

Added in API level XE21

#### public static final CardBuilder.Layout **TITLE** 

Images appear full screen in the background with a name and optional icon centered at the bottom.

##### See Also

-   [`addImage(Drawable)`](CardBuilder#addImage(android.graphics.drawable.Drawable))
-   [`setIcon(Drawable)`](CardBuilder#setIcon(android.graphics.drawable.Drawable))
-   [`setText(CharSequence)`](CardBuilder#setText(java.lang.CharSequence))
-   [`showStackIndicator(boolean)`](CardBuilder#showStackIndicator(boolean)

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).

