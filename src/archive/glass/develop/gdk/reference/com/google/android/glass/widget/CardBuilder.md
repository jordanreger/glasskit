# CardBuilder

Added in API level XE21

The [`CardBuilder`](CardBuilder) class helps with building Glass-themed cards with various layouts.

See [Creating Glass-styled cards](/archive/glass/develop/gdk/card-design#glass-styled_cards) for more information and sample code.

### General usage

1.  Create a `CardBuilder` object, passing the desired [`CardBuilder.Layout`](CardBuilder.Layout) to the constructor.
2.  Set content on the card with the `add/set*` family of methods.
3.  Get the `View` by calling [`getView()`](#getView()) or get a [`RemoteViews`](http://developer.android.com/reference/android/widget/RemoteViews.html) object with [`getRemoteViews()`](#getRemoteViews()).

### Recycling note for embedded layouts

When using [`EMBED_INSIDE`](CardBuilder.Layout#EMBED_INSIDE) `CardBuilder` makes no distinction between different embedded layouts when recycling views. If you have two `CardBuilder` instances with `EMBED_INSIDE` but one has layout A and the other has layout B, they will be treated as the same by `CardBuilder`.

If this behavior is undesirable (for example, when using a [`CardScrollAdapter`](CardScrollAdapter) with different embedded layouts), you must distinguish them by returning different view types from [`getItemViewType(int)`](CardScrollAdapter#getItemViewType(int)) so that the recycler only sends you `convertView`s with nested layouts that you expect for a particular item.

If you need to support cards with multiple embedded layouts alongside the built-in layouts, we recommend that you return view types numbered [`getViewTypeCount()`](#getViewTypeCount()), `CardBuilder.getViewTypeCount() + 1`, and so on.

| Nested Classes | | |
| --- | --- | --- |
| enum | [CardBuilder.Layout](CardBuilder.Layout) | Defines the visual layouts for cards. |

| Public Constructors | |
| --- | --- |
| [CardBuilder](#CardBuilder(android.content.Context,%20com.google.android.glass.widget.CardBuilder.Layout))([Context](http://developer.android.com/reference/android/content/Context.html) context, [CardBuilder.Layout](CardBuilder.Layout) layout) | |

| Public Methods | |
| --- | --- |
| [CardBuilder](CardBuilder) | [addImage](#addImage(android.graphics.drawable.Drawable))([Drawable](http://developer.android.com/reference/android/graphics/drawable/Drawable.html) imageDrawable) |
| [CardBuilder](CardBuilder) | [addImage](#addImage(android.graphics.Bitmap))([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) imageBitmap) |
| [CardBuilder](CardBuilder) | [addImage](#addImage(int))(int imageId) |
| void | [clearImages](#clearImages)() |
| int | [getItemViewType](#getItemViewType())() |

> **TODO**: Finish list. Stopped at `RemoteViews`

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
