Added in API level XE12

A special form of a [`BaseAdapter`](http://developer.android.com/reference/android/widget/BaseAdapter.html).

Use this in combination with a [`CardScrollView`](CardScrollView.md) to implement horizontally scrolling views, also referred to as cards. This adapter binds (possibly dynamic) data to the [`CardScrollView`](CardScrollView.md) by retrieving the data (if needed) and converting each data item into a card. Each card visually represents a certain [`Object`](http://developer.android.com/reference/java/lang/Object.html) item.

To be consistent with the Glass UI, create cards with the [`CardBuilder`](CardBuilder.md) class, which supports several content layouts. If you require more flexibility, you can create your own XML layouts or create views programmatically.

See [Scrolling cards in activities](card-scroller.md#scrolling_cards_in_activities) for more information.