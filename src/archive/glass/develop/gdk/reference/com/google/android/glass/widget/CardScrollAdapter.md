Added in API level XE12

A special form of a [`BaseAdapter`](http://developer.android.com/reference/android/widget/BaseAdapter.html).

Use this in combination with a [`CardScrollView`](CardScrollView.md) to implement horizontally scrolling views, also referred to as cards. This adapter binds (possibly dynamic) data to the [`CardScrollView`](CardScrollView.md) by retrieving the data (if needed) and converting each data item into a card. Each card visually represents a certain [`Object`](http://developer.android.com/reference/java/lang/Object.html) item.

To be consistent with the Glass UI, create cards with the [`CardBuilder`](CardBuilder.md) class, which supports several content layouts. If you require more flexibility, you can create your own XML layouts or create views programmatically.

See [Scrolling cards in activities](card-scroller.md#scrolling_cards_in_activities) for more information.

| Inherent Constants | |
| --- | --- |
| From interface android.widget.Adapter | |
| int | INGORE_ITEM_VIEW_TYPE |
| int | NO_SELECTION |

| Public Constructors | |
| --- | --- |
| [CardScrollAdapter](#CardScrollAdapter())() | |

| Public Methods | |
| --- | --- |
| abstract int | [getCount](#getCount())() |
| int | [getHomePosition](#getHomePosition())() |
| abstract Object | [getItem](#getItem(int))(int position) |
| long | [getItemId](#getItemId(int))(int position) |
| int | [getItemViewType](#getItemViewType(int))(int position) |
| abstract int | [getPosition](#getPosition(java.lang.Object))([Object](http://developer.android.com/reference/java/lang/Object.html) item) |
| abstract [View](http://developer.android.com/reference/android/view/View.html) | [getView](#getView(int, android.view.View, android.view.ViewGroup))(int position, [View](http://developer.android.com/reference/android/view/View.html) convertView, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) parent) |
| int | [getViewTypeCount](#getViewTypeCount())() |

| Inherited Methods | |
| --- | --- |
| From class android.widget.BaseAdapter | |
| boolean | areAllItemsEnabled() |
| [View](http://developer.android.com/reference/android/view/View.html) | getDropDownView(int arg0, [View](http://developer.android.com/reference/android/view/View.html) arg1, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) arg2) |
| int | getItemViewType(int arg0) |
| int | getViewTypeCount() |
| boolean | hasStableIds() |
| boolean | isEmpty() |
| boolean | isEnabled(int arg0) |
| void | notifyDataSetChanged() |
| void | notifyDataSetInvalidated() |
| void | registerDataSetObserver([DataSetObserver](http://developer.android.com/reference/android/database/DataSetObserver.html) arg0) |
| void | unregisterDataSetObserver([DataSetObserver](http://developer.android.com/reference/android/database/DataSetObserver.html) arg0) |
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
| From interface android.widget.Adapter | |
| abstract int | getCount() |
| abstract [Object](http://developer.android.com/reference/java/lang/Object.html) | getItem(int arg0) |
| abstract long | getItemId(int arg0) |
| abstract int | getItemViewType(int arg0) |
| abstract [View](http://developer.android.com/reference/android/view/View.html) | getView(int arg0, [View](http://developer.android.com/reference/android/view/View.html) arg1, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) arg2) |
| abstract int | getViewTypeCount() |
| abstract boolean | hasStableIds() |
| abstract boolean | isEmpty() |
| abstract void | registerDataSetObserver([DataSetObserver](http://developer.android.com/reference/android/database/DataSetObserver.html) arg0) |
| abstract void | unregisterDataSetObserver([DataSetObserver](http://developer.android.com/reference/android/database/DataSetObserver.html) arg0) |
| | |
| From interface android.widget.ListAdapter | |
| abstract boolean | areAllItemsEnabled() |
| abstract boolean | isEnabled(int arg0) |
| | |
| From interface android.widget.SpinnerAdapter | |
| abstract [View](http://developer.android.com/reference/android/view/View.html) | getDropDownView(int arg0, [View](http://developer.android.com/reference/android/view/View.html) arg1, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) arg2) |

## Public Methods

Added in API level XE12

#### public abstract int **getCount** () 

Added in API level XE12

#### public int **getHomePosition** () 

Returns the home position. The default implementation simply assumes position 0 is the home position, but the user can override this method to move the home position to a different card.

For example, the home position of the Glass timeline is the clock card, and other cards can be located both to the left and to the right of it.

##### Returns

-   the position of the item that represents the home position

Added in API level XE12

#### public abstract [Object](http://developer.android.com/reference/java/lang/Object.html) **getItem** (int position) 

Added in API level XE12

#### public long **getItemId** (int position) 

The default implementation simply assigns the card's position as row identifier and assumes this property holds even across data changes. When each data item has a truly unique row identifier, users can override this method to return the real row identifier and override [`hasStableIds()`](http://developer.android.com/reference/android/widget/BaseAdapter.html#hasStableIds()) to return true. By doing so, the card scroller is more likely to maintain its view on selected cards across data changes.

#### public int **getItemViewType** (int position) 

Added in API level XE16

#### public abstract int **getPosition** ([Object](http://developer.android.com/reference/java/lang/Object.html) item) 

Finds the position of the given item.

| Parameters | |
| --- | --- |
| item | the item to find |

##### Returns
- the position of the given item, or `INVALID_POSITION` if the item cannot be found

Added in API level XE12

#### public abstract [View](http://developer.android.com/reference/android/view/View.html) **getView** (int position, [View](http://developer.android.com/reference/android/view/View.html) convertView, [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) parent) 

#### public int **getViewTypeCount** () 

The default implementation returns 0 to signal lack of recycling. Users can override this method (only called once when adapter is set) and [`getItemViewType(int)`](#getItemViewType(int)) to enable view recycling.

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
