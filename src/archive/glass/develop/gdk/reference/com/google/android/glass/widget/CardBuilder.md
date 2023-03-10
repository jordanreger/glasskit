# CardBuilder

Added in API level XE21

The [`CardBuilder`](CardBuilder.md) class helps with building Glass-themed cards with various layouts.

See [Creating Glass-styled cards](/archive/glass/develop/gdk/card-design.md#glass-styled_cards) for more information and sample code.

### General usage

1.  Create a `CardBuilder` object, passing the desired [`CardBuilder.Layout`](CardBuilder.Layout.md) to the constructor.
2.  Set content on the card with the `add/set*` family of methods.
3.  Get the `View` by calling [`getView()`](#getView()) or get a [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) object with [`getRemoteViews()`](#getRemoteViews()).

### Recycling note for embedded layouts

When using [`EMBED_INSIDE`](CardBuilder.Layout.md#EMBED_INSIDE) `CardBuilder` makes no distinction between different embedded layouts when recycling views. If you have two `CardBuilder` instances with `EMBED_INSIDE` but one has layout A and the other has layout B, they will be treated as the same by `CardBuilder`.

If this behavior is undesirable (for example, when using a [`CardScrollAdapter`](CardScrollAdapter.md) with different embedded layouts), you must distinguish them by returning different view types from [`getItemViewType(int)`](CardScrollAdapter.md#getItemViewType(int)) so that the recycler only sends you `convertView`s with nested layouts that you expect for a particular item.

If you need to support cards with multiple embedded layouts alongside the built-in layouts, we recommend that you return view types numbered [`getViewTypeCount()`](#getViewTypeCount()), `CardBuilder.getViewTypeCount() + 1`, and so on.

| Nested Classes | | |
| --- | --- | --- |
| enum | [CardBuilder.Layout](CardBuilder.Layout) | Defines the visual layouts for cards. |

| Public Constructors | |
| --- | --- |
| [CardBuilder](#CardBuilder(android.content.Context,%20com.google.android.glass.widget.CardBuilder.Layout))([Context](http://developer.android.com/reference/android/content/Context.html) context, [CardBuilder.Layout](CardBuilder.Layout.md) layout) | |

| Public Methods | |
| --- | --- |
| [CardBuilder](CardBuilder.md) | [addImage](#addImage(android.graphics.drawable.Drawable))([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) imageDrawable) |
| [CardBuilder](CardBuilder.md) | [addImage](#addImage(android.graphics.Bitmap))([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) imageBitmap) |
| [CardBuilder](CardBuilder.md) | [addImage](#addImage(int))(int imageId) |
| void | [clearImages](#clearImages)() |
| int | [getItemViewType](#getItemViewType())() |
| [RemoteViews](http://developer.android.com/reference/android/widget/RemoteViews.html) | [getRemoteViews](#getRemoteViews())() |
| [View](http://developer.android.com/reference/android/view/View.html) | [getView](#getView(android.view.View,%20android.view.ViewGroup))([View](http://developer.android.com/reference/android/view/View.html) convertView, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) parent) |
| static int | [getViewTypeCount](#getViewTypeCount())() |
| [CardBuilder](CardBuilder.md) | [setAttributionIcon](#setAttributionIcon(android.graphics.Bitmap))([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) iconBitmap) |
| [CardBuilder](CardBuilder.md) | [setAttributionIcon](#setAttributionIcon(android.graphics.drawable.Drawable))([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) iconDrawable) |
| [CardBuilder](CardBuilder.md) | [setAttributionIcon](#setAttributionIcon(int))(int iconId) |
| [CardBuilder](CardBuilder.md) | [setEmbeddedLayout](#setEmbeddedLayout(int))(int layoutResId) |
| [CardBuilder](CardBuilder.md) | [setFootNote](#setFootnote(java.lang.CharSequence))([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) footnote) |
| [CardBuilder](CardBuilder.md) | [setFootNote](#setFootnote(int))(int footnoteId) |
| [CardBuilder](CardBuilder.md) | [setHeading](#setHeading(java.lang.CharSequence))([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) heading) |
| [CardBuilder](CardBuilder.md) | [setHeading](#setHeading(int))(int headingId) |
| [CardBuilder](CardBuilder.md) | [setIcon](#setIcon(android.graphics.Bitmap))([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) iconBitmap) |
| [CardBuilder](CardBuilder.md) | [setIcon](#setIcon(android.graphics.drawable.Drawable))([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) iconDrawable) |
| [CardBuilder](CardBuilder.md) | [setIcon](#setIcon(int))(int iconId) |
| [CardBuilder](CardBuilder.md) | [setSubheading](#setSubheading(java.lang.CharSequence))([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) subheading) |
| [CardBuilder](CardBuilder.md) | [setSubheading](#setSubheading(int))(int subheadingId) |
| [CardBuilder](CardBuilder.md) | [setText](#setText(int))(int textId) |
| [CardBuilder](CardBuilder.md) | [setText](#setText(java.lang.CharSequence))([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) text) |
| [CardBuilder](CardBuilder.md) | [setTimestamp](#setTimestamp(java.lang.CharSequence))([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) timestamp) |
| [CardBuilder](CardBuilder.md) | [setTimestamp](#setTimestamp(int))(int timestampId) |
| [CardBuilder](CardBuilder.md) | [showStackIndicator](#showStackIndicator(boolean))(boolean visible) |


| Inherited Methods | |
| --- | --- |
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

## Public Constructors

Added in API level XE21

#### public **CardBuilder** ([Context](http://developer.android.com/reference/android/content/Context.html) context, [CardBuilder.Layout](CardBuilder.Layout.md) layout) 

Constructs a new `CardBuilder`.

| Parameters | |
| --- | --- |
| context | the `Context` that will be used by the builder to create its views. |
| layout | the desired layout for the card |

## Public Methods

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **addImage** ([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) imageDrawable) 

Adds an image, specified as a [`Drawable`](http://developer.android.com/reference/android/graphics/drawable/Drawable.html), to the card.

This method only applies to cards that are converted into views using [`getView()`](CardBuilder#getView()). [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) built by `CardBuilder` only support `Bitmap` and resource-based images. `Drawable` images on `RemoteViews` are not supported.

| Parameters | |
| --- | --- |
| imageDrawable | the `Drawable` image to add |

##### Returns
- this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **addImage** ([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) imageBitmap)

Adds an image, specified as a [`Bitmap`](http://developer.android.com/reference/android/graphics/Bitmap.html), to the card.

| Parameters | |
| --- | --- |
| imageBitmap | the `Bitmap` image to add |

##### Returns
- this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **addImage** (int imageId) 

Adds an image, specified as a drawable resource, to the card.

| Parameters | |
| --- | --- |
| imageId | the resource ID of the image to add |

##### Returns
- this object for call chaining

Added in API level XE21

#### public void **clearImages** () 

Clears all images that were previously added to the card.

Added in API level XE21

#### public int **getItemViewType** () 

Returns the view type of this particular card.

Useful in combination with an adapter. See [`getItemViewType(int)`](http://developer.android.com/reference/android/widget/Adapter.html#getItemViewType(int)).

Added in API level XE21

#### public [RemoteViews](http://developer.android.com/reference/android/widget/RemoteViews.html) **getRemoteViews** () 

Returns a [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) representation of this card.

Added in API level XE21

#### public [View](http://developer.android.com/reference/android/view/View.html) **getView** ([View](http://developer.android.com/reference/android/view/View.html) convertView, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) parent) 

Returns a [`View`](http://developer.android.com/reference/android/view/View.html) representation of this card.

Useful in combination with an adapter. See [`getView(int, View, ViewGroup)`](http://developer.android.com/reference/android/widget/Adapter.html#getView(int,%20android.view.View,%20android.view.ViewGroup)).

| Parameters | |
| --- | --- |
| convertView | an old view to reuse, if possible; can be `null` Note: if this view does not have the right type, this method creates a new view |
| parent | that this view will eventually be attached to, maybe `null` |

Added in API level XE21

#### public [View](http://developer.android.com/reference/android/view/View.html) **getView** () 

Returns a [`View`](http://developer.android.com/reference/android/view/View.html) representation of this card.

Added in API level XE21

#### public static int **getViewTypeCount** () 

Returns the total number of view types cards can take.

Useful in combination with an adapter. See [`getViewTypeCount()`](http://developer.android.com/reference/android/widget/Adapter.html#getViewTypeCount()).

Added in API level XE22

#### public [CardBuilder](CardBuilder.md) **setAttributionIcon** ([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) iconBitmap) 

Sets the attribution icon for the card using a [`Bitmap`](http://developer.android.com/reference/android/graphics/Bitmap.html).

| Parameters | |
| --- | --- |
| iconBitmap | the `Bitmap` to use as the attribution icon |

##### Returns

-   this object for call chaining

Added in API level XE22

#### public [CardBuilder](CardBuilder.md) **setAttributionIcon** ([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) iconDrawable) 

Sets the attribution icon for the card using a [`Drawable`](http://developer.android.com/reference/android/graphics/drawable/Drawable.html).

This method only applies to cards that are converted into views using [`getView()`](#getView()). [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) built by `CardBuilder` only support `Bitmap` and resource-based images. `Drawable` images on `RemoteViews` are not supported.

| Parameters | |
| --- | --- |
| iconDrawable | the `Drawable` to use as the attribution icon |

##### Returns

-   this object for call chaining

Added in API level XE22

#### public [CardBuilder](CardBuilder.md) **setAttributionIcon** (int iconId) 

Sets the attribution icon for the card using a drawable resource.

| Parameters | |
| --- | --- |
| iconId | the resource ID to use as the attribution icon |

##### Returns

-   this object for call chaining

Added in API level XE22

#### public [CardBuilder](CardBuilder.md) **setEmbeddedLayout** (int layoutResId) 

Sets the resource ID of the layout to embed in the card.

| Parameters | |
| --- | --- |
| layoutResId | the resource ID of the layout to embed in the card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setFootnote** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) footnote) 

Sets the footnote text for the card.

| Parameters | |
| --- | --- |
| footnote | the footnote text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setFootnote** (int footnoteId) 

Sets the footnote text for the card using a string resource.

| Parameters | |
| --- | --- |
| footnoteId | the footnote text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setHeading** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) heading) 

Sets the heading text for the card.

| Parameters | |
| --- | --- |
| heading | the heading text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setHeading** (int headingId) 

Sets the footnote text for the card using a string resource.

| Parameters | |
| --- | --- |
| headingId | the heading text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setIcon** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) footnote) 

Sets the footnote text for the card.

| Parameters | |
| --- | --- |
| footnote | the footnote text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setFootnote** (int footnoteId) 

Sets the footnote text for the card using a string resource.

| Parameters | |
| --- | --- |
| footnoteId | the footnote text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setIcon** ([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) iconBitmap)

Adds an image, specified as a [`Bitmap`](http://developer.android.com/reference/android/graphics/Bitmap.html), to the card.

| Parameters | |
| --- | --- |
| iconBitmap | the `Bitmap` image to add |

##### Returns
- this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setIcon** ([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) iconDrawable) 

Adds an image, specified as a [`Drawable`](http://developer.android.com/reference/android/graphics/drawable/Drawable.html), to the card.

This method only applies to cards that are converted into views using [`getView()`](CardBuilder#getView()). [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) built by `CardBuilder` only support `Bitmap` and resource-based images. `Drawable` images on `RemoteViews` are not supported.

| Parameters | |
| --- | --- |
| iconDrawable | the `Drawable` to use as the icon |

##### Returns
- this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setIcon** (int iconId) 

Adds an image, specified as a drawable resource, to the card.

| Parameters | |
| --- | --- |
| iconId | the resource ID to use as the icon |

##### Returns
- this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setSubheading** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) subheading)

Sets the subheading text for the card.

| Parameters | |
| --- | --- |
| subheading | the subheading text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setSubheading** (int subheadingId)

Sets the subheading text for the card using a string resource.

| Parameters | |
| --- | --- |
| footnoteId | the footnote text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **Text** (int textId)

Sets the main text for the card using a string resource.

| Parameters | |
| --- | --- |
| textId | main text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setText** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) text)

Sets the main text for the card.

| Parameters | |
| --- | --- |
| text | main text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setTimestamp** ([CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) timestamp) 

Sets the timestamp text for the card.

| Parameters | |
| --- | --- |
| timestamp | the timestamp text for this card |

##### Returns

-   this object for call chaining

Added in API level XE21

#### public [CardBuilder](CardBuilder.md) **setTimestamp** (int timestampId) 

Sets the timestamp text for the card using a string resource.

| Parameters | |
| --- | --- |
| timestampId | the timestamp text resource ID for this card |

##### Returns

-   this object for call chaining

Added in API level XE22

#### public [CardBuilder](CardBuilder.md) **showStackIndicator** (boolean visible) 

Shows an indicator if `visible` is true that this card represents a stack of cards, rather than a single card.

| Parameters | |
| --- | --- |
| visible | true to show the stack indicator, or false to hide it |

##### Returns

-   this object for call chaining

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
